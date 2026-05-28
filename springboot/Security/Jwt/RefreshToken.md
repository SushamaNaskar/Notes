# Problems with Only Using Access Tokens
## 1. Security Risk
If an access token is valid for a long time, and someone steals it, they can use it for a long time.

So we keep access tokens short-lived (like 15 minutes).

## 2. Bad User Experience

If the access token expires quickly, the user would have to log in again and again.

That becomes annoying.

## Solution: Use Two Tokens
1. Access Token
- Short expiry
- Used for API requests
- More secure

2. Refresh Token
- Long expiry
- Used to generate a new access token
- Prevents frequent logins
- Stored in DB

3. Session Table
- stores active refresh tokens
- tracks logged-in devices/sessions
- helps revoke sessions

```
User Login
   ↓
AuthenticationManager verifies credentials
   ↓
Generate:
   - Access Token
   - Refresh Token
   ↓
Save refresh token in Session table
   ↓
Send:
   - Access token in response body
   - Refresh token in HttpOnly cookie
```
# in short
```
LOGIN
  ↓
Generate refresh token
  ↓
Store refresh token in DB session table

--------------------------------

REFRESH REQUEST
  ↓
Validate JWT signature + expiry
  ↓
Check refresh token exists in DB
  ↓
Update lastUsedAt
  ↓
Generate new access token

--------------------------------

LOGOUT
  ↓
Delete session from DB
  ↓
Refresh token becomes invalid
```

# Login Flow
```
Frontend sends email + password
        ↓
POST /auth/login
        ↓
AuthController.login()
        ↓
authService.login(loginDto)
        ↓
Create UsernamePasswordAuthenticationToken
(email, password)
        ↓
authenticationManager.authenticate(...)
        ↓
Spring Security calls
loadUserByUsername()
        ↓
Fetch user from DB
        ↓
Compare entered password
with encrypted password
        ↓
Authentication successful
        ↓
Get authenticated User object
        ↓
Generate Access Token
(short-lived JWT)
        ↓
Generate Refresh Token
(long-lived JWT)
        ↓
SessionService.generateNewSession()
        ↓
Fetch all existing sessions
for user
        ↓
Check SESSION_LIMIT
        ↓
If limit reached:
remove least recently used session
        ↓
Save new refresh token session in DB
        ↓
Create HttpOnly Cookie
with refresh token
        ↓
Add cookie to response
        ↓
Return access token
(and refresh token in response body)
        ↓
Frontend stores access token
        ↓
User is logged in
```

# Refresh api flow
```
Access Token Expires
        ↓
Frontend gets 401 Unauthorized
from protected API
        ↓
Frontend calls:
POST /auth/refresh
        ↓
Browser automatically sends
refreshToken cookie
(HttpOnly cookie)
        ↓
AuthController.refresh()
        ↓
Extract all cookies from request
        ↓
Find cookie named "refreshToken"
        ↓
Extract refresh token value
from cookie
        ↓
authService.refreshToken(refreshToken)
        ↓
jwtService.getUserIdFromToken(refreshToken)
        ↓
Verify JWT signature
(secret key validation)
        ↓
Verify refresh token expiry
        ↓
Extract userId from JWT payload
(subject)
        ↓
sessionService.validateSession(refreshToken)
        ↓
Search Session table using
refresh token
        ↓
Check whether refresh token
still exists in DB
        ↓
If session not found:
throw exception
(refresh token revoked/invalid)
        ↓
Update session.lastUsedAt
to current time
        ↓
Save updated session
        ↓
userService.getUserById(userId)
        ↓
Fetch latest user data from DB
        ↓
jwtService.generateAccessToken(user)
        ↓
Create NEW short-lived
access token
        ↓
Create LoginResponseDto
with:
- userId
- new access token
- same refresh token
        ↓
Return response to frontend
        ↓
Frontend replaces old expired
access token with new one
        ↓
User continues using app
without logging in again
```

# controllers
```
@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private final AuthService authService;

    @Value("${deploy.env}")
    private String deployEnv;


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto loginDto, HttpServletRequest request,
                                        HttpServletResponse response) {
        LoginResponseDto loginResponseDto = authService.login(loginDto);

        Cookie cookie = new Cookie("refreshToken", loginResponseDto.getRefreshToken());
        cookie.setHttpOnly(true);
        cookie.setSecure("production".equals(deployEnv));
        response.addCookie(cookie);

        return ResponseEntity.ok(loginResponseDto);
    }

    @PostMapping("/refresh")
    public ResponseEntity<LoginResponseDto> refresh(HttpServletRequest request) {
        String refreshToken = Arrays.stream(request.getCookies()).
                filter(cookie -> "refreshToken".equals(cookie.getName()))
                .findFirst()
                .map(Cookie::getValue)
                .orElseThrow(() -> new AuthenticationServiceException("Refresh token not found inside the Cookies"));
        LoginResponseDto loginResponseDto = authService.refreshToken(refreshToken);

        return ResponseEntity.ok(loginResponseDto);
    }
}

```

## login

### get the newly generated tokens after verifications
```
 LoginResponseDto loginResponseDto = authService.login(loginDto);
 ```

 authService returns the access token, refresh token and userId.

### Create Cookie
```
Cookie cookie =
    new Cookie("refreshToken",
               loginResponseDto.getRefreshToken());
```
Creates browser cookie.

### Why Store Refresh Token in Cookie?
Better security.

Instead of frontend JS storing it manually.

### HttpOnly Cookie
```
cookie.setHttpOnly(true);
```
JavaScript CANNOT access this cookie.

Protects against:

XSS Attacks

Without HttpOnly:
malicious JS can steal refresh token.

### Secure Cookie
```
cookie.setSecure(
    "production".equals(deployEnv)
);
```
If production:

cookie only sent over HTTPS

Prevents network sniffing.

### Add Cookie to Response
```
response.addCookie(cookie);
```
Browser automatically stores cookie.

### Return Response
```
return ResponseEntity.ok(loginResponseDto);
```

Frontend receives:
```
{
  "id": 1,
  "accessToken": "...",
  "refreshToken": "..."
}
```
Though ideally:

- refresh token should NOT also be returned in body
- only cookie is preferred

## REFRESH FLOW

### Extract Cookie
```
Arrays.stream(request.getCookies())
```
Gets all cookies.

### Filter Refresh Token Cookie
```
.filter(cookie ->
    "refreshToken".equals(cookie.getName()))
```
Finds refreshToken cookie.

### Extract Value
```
.map(Cookie::getValue)
```
Gets actual JWT string.

### If Missing
```
.orElseThrow(...)
```
Throws exception if cookie absent.

### Call Service
```
authService.refreshToken(refreshToken);
```
refreshToken returns newly generated access token after validating session info

# AuthService
```
@Service
@RequiredArgsConstructor
public class AuthService {

   public LoginResponseDto login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword())
        );

        User user = (User) authentication.getPrincipal();
        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);
        sessionService.generateNewSession(user, refreshToken);

        return new LoginResponseDto(user.getId(), accessToken, refreshToken);
    }

    public LoginResponseDto refreshToken(String refreshToken) {
        Long userId = jwtService.getUserIdFromToken(refreshToken);
        sessionService.validateSession(refreshToken);
        User user = userService.getUserById(userId);

        String accessToken = jwtService.generateAccessToken(user);
        return new LoginResponseDto(user.getId(), accessToken, refreshToken);
    }

}    

```    

## login flow

### authenticate user
```
 Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword())
        );
```

### What happens internally?
1. Creates authentication request object.
```
new UsernamePasswordAuthenticationToken(email, password)
```
This object only contains credentials initially.

2. authenticationManager.authenticate(...) runs.

Spring Security now:

- calls UserDetailsService.loadUserByUsername()
- fetches user from DB
- compares password
- verifies account

If password is wrong:
- exception thrown

If correct:
- returns authenticated object

### Returned Authentication Object
```
Authentication authentication
```

Now contains:
- authenticated = true
- principal = actual User object
- authorities/roles

### Extract User
```
User user = (User) authentication.getPrincipal();
```
Because we need user info to generate tokens.

### Generate Access Token
```
String accessToken =
        jwtService.generateAccessToken(user);
```

Access token:
- short expiry
- used for protected APIs

Usually:
- 15 mins
- 30 mins

### Generate Refresh Token
```
String refreshToken =
        jwtService.generateRefreshToken(user);
```

Refresh token:
- long expiry
- used only for refreshing access token

### Save new generate Session in DB
```
sessionService.generateNewSession(user, refreshToken);
```

### Why store refresh token in DB?

JWT alone is stateless.

But refresh token in DB gives:
- logout support
- session tracking
- revoke stolen tokens
- multi-device control


## Refresh Token Logic

### Extract the user ID stored inside the refresh token.
```
Long userId =
    jwtService.getUserIdFromToken(refreshToken);
```
- JWT is parsed.
- User ID extracted from payload.

This step ALSO validates:
1. signature
  * was token signed using correct secret key?
  * has token been tampered with?
2. expiry 
  * is token expired?
3. Reads claims from JWT payload.
  * Then extracts:
    ```
    subject
    ```
   which contains user ID.

### Why User ID is Needed?

Because we need to:
- fetch user from database
- generate new access token for that user

### getUserIdFromToken does NOT mean:

- "user is authenticated"

It only means:

- "token structure/signature/expiry are valid"

### Validate Session
```
sessionService.validateSession(refreshToken);
```
This checks whether refresh token still exists in database.

### fetch actual user from database.
```
User user = userService.getUserById(userId);
```
### Why Needed?

Because new access token needs user information.

Usually:
- id
- email
- roles
- authorities

are added into access token.

### generate new access token, since the old one has expired
```
 String accessToken = jwtService.generateAccessToken(user);
```
 generate new accees token

# JwtService

```
@Service
public class JwtService {

  @Value("${jwt.secretKey}")
    private String jwtSecretKey;

    private SecretKey getSecretKey() {
        return Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
    }

      public String generateAccessToken(User user) {
        return Jwts.builder()
                .subject(user.getId().toString())
                .claim("email", user.getEmail())
                .claim("roles", user.getRoles().toString())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000*60*10))
                .signWith(getSecretKey())
                .compact();
    }

        public String generateRefreshToken(User user) {
        return Jwts.builder()
                .subject(user.getId().toString())
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000L *60*60*24*30*6))
                .signWith(getSecretKey())
                .compact();
    }
}
``` 
- we dont use  email or any other user info to create refreshtoken
- and refresh token has long expiration time

# Session service
```

@Service
@RequiredArgsConstructor
public class SessionService {

    private final SessionRepository sessionRepository;
    private final int SESSION_LIMIT = 2;

    public void generateNewSession(User user, String refreshToken) {
        List<Session> userSessions = sessionRepository.findByUser(user);
        if (userSessions.size() == SESSION_LIMIT) {
            userSessions.sort(Comparator.comparing(Session::getLastUsedAt));

            Session leastRecentlyUsedSession = userSessions.getFirst();
            sessionRepository.delete(leastRecentlyUsedSession);
        }

        Session newSession = Session.builder()
                .user(user)
                .refreshToken(refreshToken)
                .build();
        sessionRepository.save(newSession);
    }

    public void validateSession(String refreshToken) {
        Session session = sessionRepository.findByRefreshToken(refreshToken)
                .orElseThrow(() -> new SessionAuthenticationException("Session not found for refreshToken: "+refreshToken));
        session.setLastUsedAt(LocalDateTime.now());
        sessionRepository.save(session);
    }

}
```

## generateNewSession
Called during:
LOGIN

Main Goal
```
Create new session for refresh token
```

BUT before creating:
- enforce device/session limit

### Fetch all sessions for user.

Example DB Data

Suppose user already logged in on:
| id | device | refreshToken |
| -- | ------ | ------------ |
| 1  | laptop | abc          |
| 2  | mobile | xyz          |

Then:
```
userSessions
```
contains 2 Session objects.

#### Why Needed?

To check:

- how many active devices user has

### Has user reached max session/device limit?
```
if (userSessions.size() == SESSION_LIMIT)
```

Example
```
If limit = 2
```
And user logs in from tablet:

- Laptop  ✅
- Mobile  ✅
- Tablet   ← new login

Need to remove one old session.

#### Why Session Limit is Useful?

Prevents:
- unlimited device usage
- account sharing
- too many active refresh tokens

Common in:
- Netflix
- Spotify
- banking apps

### Sort sessions by:
```
lastUsedAt
```

What is lastUsedAt?

Tracks:

when session was last active

Example:
| Device | lastUsedAt |
| ------ | ---------- |
| Laptop | 10:00      |
| Mobile | 2:00       |

Laptop is older/inactive.

#### Why Sort?

To implement:
```
LRU Strategy

LRU = Least Recently Used
```
Meaning:
- remove oldest inactive session first

### Get oldest session.
```
Session leastRecentlyUsedSession =
        userSessions.getFirst();
```

### Delete old session from DB
```
sessionRepository.delete(
        leastRecentlyUsedSession
);
```

### Create New Session
```
Session newSession = Session.builder()
```
Creates new Session object.

### Add User
```
.user(user)
```
Associates session with user.

### Add Refresh Token
```
.refreshToken(refreshToken)
```
Stores refresh token in DB.

### build()
```
.build();
```
Creates Session object.

### Stores session in DB
```
sessionRepository.save(newSession);
```
## validateSession
Called during:
REFRESH TOKEN FLOW

Main Goal
```
Check whether refresh token still has valid session
```
This is:
- server-side validation

### Why Needed?

JWT alone only checks:
- signature
- expiry

JWT cannot know:
- logout
- revoked token
- removed device

Database session check solves this.

### Search DB for refresh token
```
Session session =
    sessionRepository.findByRefreshToken(refreshToken)
```

### Updates activity timestamp
```
session.setLastUsedAt(LocalDateTime.now());
```
#### Why Update It?

Tracks:
- recently active devices

Used for:
- LRU session removal
- activity monitoring

### Persist updated timestamp.
```
sessionRepository.save(session);
```

# session entity
```
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
public class Session {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String refreshToken;

    @CreationTimestamp
    private LocalDateTime lastUsedAt;

    @ManyToOne
    private User user;
}

```

# session repository
```

public interface SessionRepository extends JpaRepository<Session, Long> {
    List<Session> findByUser(User user);

    Optional<Session> findByRefreshToken(String refreshToken);
}

```

# LoginResponseDto
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginResponseDto {

    private Long id;
    private String accessToken;
    private String refreshToken;
}
