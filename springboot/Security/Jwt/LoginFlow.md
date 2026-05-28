# Login Flow
```
Client
   ↓
POST /auth/login
   ↓
SecurityConfig
   ↓
JwtAuthenticationFilter (returns after checking header, since no token found)
   ↓
Request reaches Controller
   ↓
pass UsernamePasswordAuthenticationToken to authenticationManager
   ↓
authenticationManager internally fetches userdetails from db and verifies passwords
(using userDetailsService and UserDetails)  
```


# Create Security Config
```

@Configuration
public class SecurityConfig {

    @Autowired
    private JwtAuthenticationFilter jwtFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/auth/**"
                        ).permitAll()
                        .anyRequest().authenticated()
                )

                .sessionManagement(session -> session
                        .sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                .addFilterBefore(
                        jwtFilter,
                        UsernamePasswordAuthenticationFilter.class
                );

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration config
    ) throws Exception {

        return config.getAuthenticationManager();
    }
}
```

# Create JWT Filter
```
@Component
public class JwtAuthenticationFilter
        extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain
    ) throws ServletException, IOException {

        String authHeader =
                request.getHeader("Authorization");

        if (authHeader == null ||
                !authHeader.startsWith("Bearer")) {

            filterChain.doFilter(request, response);
            return;
        }
    }
}
```

## Read Authorization Header
```
String authHeader =
        request.getHeader("Authorization");
```

Reads:
```
Authorization: Bearer eyJhbGci...
```

from incoming request.

## Check Header Exists
```
if (authHeader == null ||
        !authHeader.startsWith("Bearer ")) 
```
Checks:

header missing?
does not start with "Bearer "?

## Skip JWT Logic
```
filterChain.doFilter(request, response);
return;
```
Meaning:
```
I found no JWT token.
Continue request normally.
```
This is important for:

- signup
- login
- public APIs

because they do not yet have token. goes to controller.


# create controller
```

import java.util.Arrays;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;


    @PostMapping("/login")
    public ResponseEntity<LoginResponseDto> login(@RequestBody LoginDto loginDto, HttpServletRequest request,
                                        HttpServletResponse response) {
        LoginResponseDto loginResponseDto = authService.login(loginDto);


        return ResponseEntity.ok(loginResponseDto);
    }

   
}

```

# create authservice
```

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserService userService;
    private final SessionService sessionService;

    public LoginResponseDto login(LoginDto loginDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword())
        );

        User user = (User) authentication.getPrincipal();
        String accessToken = jwtService.generateAccessToken(user);

        return new LoginResponseDto(user.getId(), accessToken, refreshToken);
    }

}
```
## Create authentication request object
```
new UsernamePasswordAuthenticationToken(
        loginDto.getEmail(),
        loginDto.getPassword()
)
```

This object contains:
```
principal   = email
credentials = password
authenticated = false
```

Example:
```
principal   = "abc@gmail.com"
credentials = "1234"
```

At this point:

- User is NOT authenticated
- No database call yet
- Just a container object

## Pass object to AuthenticationManager

```
 Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword())
        );
```

This means:

```
"Spring Security, please verify this username and password."
```
### AuthenticationManager finds AuthenticationProvider
Usually Spring uses:

```
DaoAuthenticationProvider
```

because you configured:
```
UserDetailsService
```

and

```
PasswordEncoder
```

### DaoAuthenticationProvider calls loadUserByUsername()
Internally:

```
userDetailsService.loadUserByUsername(email)
```

Your code:
```
return userRepository.findByEmail(username)
```

This is where DB query happens.

### User returned from DB

Example:
```
email = abc@gmail.com
password = hashed_password
roles = ROLE_USER
```

Returned as UserDetails.

### Password comparison
Spring internally does:

```
passwordEncoder.matches(
        rawPassword,
        encodedPassword
)
```

Example:

```
"1234"
vs
"$2a$10$abcxyz..."
```

If password matches → success.

If not → throws:
```
BadCredentialsException
```
### Returns authenticated object
Spring creates a NEW authenticated object:

```
UsernamePasswordAuthenticationToken(
        userDetails,
        null,
        userDetails.getAuthorities()
)
```

Now:

```
authenticated = true
principal = UserDetails object
```

Returned here:

```
Authentication authentication =
        authenticationManager.authenticate(...)
```

### You access authenticated user
```
User user = (User) authentication.getPrincipal();
```

Now you can:
- generate JWT
- create session
- store user info

## flow
```
Create UsernamePasswordAuthenticationToken object
                    ↓
authenticationManager.authenticate()
        ↓
DaoAuthenticationProvider
        ↓
loadUserByUsername()
        ↓
Database query
        ↓
UserDetails returned
        ↓
PasswordEncoder.matches()
        ↓
Authentication success
        ↓
Returns authenticated Authentication object
```
## Important Difference

### Before authenticate()
```
new UsernamePasswordAuthenticationToken(
        email,
        password
)
```

This is:

```
Unauthenticated token
```
### After authenticate()

Returned object:

```
Authenticated token
```
with:

- user details
- roles
- authenticated=true

# create userService
```

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .orElseThrow(() -> new BadCredentialsException("User with email "+ username +" not found"));
    }

}
```

# create user repo
```

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

}

```

# create jwtService service
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

}
```

## Purpose of This Method
This method creates a JWT Access Token for a logged-in user.

### User user
Takes logged-in user object.
Example:
```
User {
   id = 1
   email = "john@gmail.com"
   roles = [ROLE_USER]
}
```

### Create JWT Builder
```
return Jwts.builder()
```
Starts building JWT token.

Think of it like:

```
Create empty JWT token
```
Now we add data into it step-by-step.

### Add Subject
```
.subject(user.getId().toString())
```
Adds:

subject (sub)

inside JWT payload.

### What is Subject?
Subject usually identifies:

```
who owns this token
```

You are storing:

```
user.getId()
```

Suppose:

```
user.getId() = 5
```

JWT payload becomes:

```
{
   "sub": "5"
}
```

### Why toString()?
```
user.getId().toString()
```

because JWT subject must be String.

## Add Email Claim
```
.claim("email", user.getEmail())
```

Adds custom field inside JWT.

Suppose:

```
user.getEmail() = "john@gmail.com"
```

JWT payload becomes:

```

{
   "sub": "5",
   "email": "john@gmail.com"
}
```

### What is claim()?

JWT claims are:

```
extra data stored inside token
```

Examples:

- email
- roles
- userId
- permissions

### Add Roles Claim
```
.claim("roles", user.getRoles().toString())
```

Stores user roles.

Suppose:

```
user.getRoles() = [ROLE_USER]
```

JWT payload:

```

{
   "roles": "[ROLE_USER]"
}
```
### Why Store Roles?

Later you can check:

- Is user ADMIN?
- Is user USER?

without database call.

### Set Issued Time
```
.issuedAt(new Date())
```
Adds:

```
iat
```

claim.

Meaning:
```
Token creation time
```

Example:
```
{
   "iat": 1716450000
}
```

### new Date()

```
new Date()
```

Current date-time.

Example:
```
23 May 2026 10:30 AM
```

## Set Expiration Time
```
.expiration(new Date(System.currentTimeMillis() + 1000*60*10))
```

VERY IMPORTANT.

Sets token expiry time.

### System.currentTimeMillis()
```
System.currentTimeMillis()
```

Current time in milliseconds.
```
10006010
```

Calculation:
```
1000 ms = 1 second
60 seconds = 1 minute
10 minutes
```

Result:
```
10 minute expiry
```

Final Meaning
```
new Date(currentTime + 10 minutes)
```

Token expires after:
```
10 minutes
```

## JWT Payload Now
```
{
   "sub": "5",
   "email": "john@gmail.com",
   "roles": "[ROLE_USER]",
   "iat": 1716450000,
   "exp": 1716450600
}
```

## Sign Token
```
.signWith(getSecretKey())
```

VERY IMPORTANT STEP.

This digitally signs JWT.

### getSecretKey()
Returns secret key.

Example:
```
private Key getSecretKey() {
    return Keys.hmacShaKeyFor(secret.getBytes());
}
```

This secret is known only to server.

### What Happens Internally?

JWT library:

- creates header
- creates payload
- hashes them with secret key
- generates signature

### Convert to Final String
```
.compact();
```

Converts JWT object into final String.

Final result:
```
xxxxx.yyyyy.zzzzz
```

Structure:
```
HEADER.PAYLOAD.SIGNATURE
```

Final Generated Token Example

```
eyJhbGciOiJIUzI1NiJ9.
eyJzdWIiOiI1IiwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSJ9.
abcxyz123
```


# login dto
```

@Data
public class LoginDto {
    String email;
    String password;
}

```

# Login Response Dto
```
package com.example.demo4.SecurityApp.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class LoginResponseDto {

    private Long id;
    private String accessToken;
    private String refreshToken;
}

```

# User Dto
```

@Data
public class UserDto {

    private Long id;
    private String email;
    private String name;
}

```

# User entity
```

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String email;
    private String password;
    private String name;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private Set<Role> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_"+role.name()))
                .collect(Collectors.toSet());
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }
}
```