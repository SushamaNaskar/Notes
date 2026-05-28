# Protected API Flow
```
Client sends JWT Token
   ↓
SecurityConfig
   ↓
JwtAuthenticationFilter
   ↓
Extract Username/UserId From Token
   ↓
Validate Token using secret key
   ↓
Load User From Database
   ↓
Create Authentication Object
   ↓
Store In SecurityContext
   ↓
Request reaches Controller
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

# Create Jwt Authentication Filter

```

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserService userService;


    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

     
            final String requestTokenHeader = request.getHeader("Authorization");

            if (requestTokenHeader == null || !requestTokenHeader.startsWith("Bearer")) {
                filterChain.doFilter(request, response);
                return;
            }

            String token = requestTokenHeader.split("Bearer ")[1];
            Long userId = jwtService.getUserIdFromToken(token);

            if (userId != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                User user = userService.getUserById(userId);

                UsernamePasswordAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                authenticationToken.setDetails(
                        new WebAuthenticationDetailsSource().buildDetails(request)
                );

                SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            }

            filterChain.doFilter(request, response);
       
    }
}

```

## Purpose of This Filter

This class checks every incoming request for a JWT token.

If the token is valid:
- It finds the user,
- creates an authenticated user object,
- and stores it inside Spring Security Context.

After that, Spring Security treats the request as:

```
Authenticated User
```

## Full Flow First
```
Client sends request
        ↓
Authorization Header checked
        ↓
Extract JWT Token
        ↓
Extract username from token
        ↓
Validate token
        ↓
Load user from database
        ↓
Create Authentication object
        ↓
Store inside SecurityContextHolder
        ↓
Request continues to Controller
```

## OncePerRequestFilter
- This makes class a Spring Security filter.
- OncePerRequestFilter ensures that your filter runs only one time for a single HTTP request.


## Read Authorization Header

```
String requestTokenHeader =
        request.getHeader("Authorization");
```

Reads:
```
Authorization: Bearer eyJhbGci...
```

from incoming request.

## Check Header Exists

```
if (requestTokenHeader == null ||
        !requestTokenHeader.startsWith("Bearer")) 
```

Checks:
- header missing?
- does not start with "Bearer "?

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

because they do not yet have token. So in this flow they move to controller.

## Extract Token

```
String token =
        requestTokenHeader.substring(7);
```

or 

```
String token = requestTokenHeader.split("Bearer ")[1];
```

### substring(7)

Removes:
```
Bearer 
```

from:
```
Bearer eyJhbGci...
```

Result:
```
eyJhbGci...
```

Why 7?

Because:
```
"Bearer "
```
has 7 characters.

## Extract Username or userId

```
Long userId = jwtService.getUserIdFromToken(token);
```

JWT payload may contain:

```
{
   "sub": "john"
}
```

This method extracts:
```
john
```

- jwtService validates the JWT token using the secret key
- extracts its payload (claims)
- and returns the user ID stored in the token’s subject field

## Check User Not Already Authenticated

```
if (userId != null &&
        SecurityContextHolder.getContext()
                .getAuthentication() == null) 
```

Checks:
- userId extracted successfully
- no authentication already present

### Why second check?
- Because maybe another filter already authenticated user.
- Avoids duplicate authentication.

## Load User From Database

```
User user = userService.getUserById(userId);
```

userService contains getUserById which fetches the full user details from database using the userId value.

## Create Authentication Object
```
UsernamePasswordAuthenticationToken authenticationToken =
        new UsernamePasswordAuthenticationToken(
                user,
                null,
                user.getAuthorities());
```
This creates Spring Security authentication object.

### Parameters Meaning
- user : Represents logged-in user.
- null: Password not needed now because: User already authenticated
- user.getAuthorities() : Represents roles.

Example:
```
ROLE_USER
ROLE_ADMIN
```

## Add Request Details
```
authenticationToken.setDetails(
    new WebAuthenticationDetailsSource()
        .buildDetails(request)
);
```

Adds request-related info.\
Like:
- IP address
- session ID

## Store Authentication In SecurityContext

```
SecurityContextHolder
    .getContext()
    .setAuthentication(authenticationToken);
```
- This tells Spring Security:
    This user is authenticated
- Now throughout request lifecycle:
    Spring knows logged-in user

## Continue Request
```
filterChain.doFilter(request, response);
```

Means:
- Continue to next filter/controller

Without this line:
- Request stops here


# Create JwtService

```

@Service
public class JwtService {

    @Value("${jwt.secretKey}")
    private String jwtSecretKey;

    private SecretKey getSecretKey() {
        return Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
    }


    public Long getUserIdFromToken(String token) {
        Claims claims = Jwts.parser()
                .verifyWith(getSecretKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
        return Long.valueOf(claims.getSubject());
    }

}
```

## Purpose:
- Read JWT token
- Verify token is valid
- Extract userId from token


## getSecretKey

```
  private SecretKey getSecretKey() {
        return Keys.hmacShaKeyFor(jwtSecretKey.getBytes(StandardCharsets.UTF_8));
    }
```

- Convert String secret into SecretKey object
- because JWT library needs:
  * SecretKey object
  * not plain string.

```
return Keys.hmacShaKeyFor()
```
Creates HMAC SHA secret key.\
Used for algorithm:
```
HS256
```

```
jwtSecretKey.getBytes(StandardCharsets.UTF_8)
```

Converts:
```
String → byte[]
```
because encryption works with bytes. \

Example
```
"hello"
```

becomes:
```
[104,101,108,108,111]
```

## Main Method
```
public Long getUserIdFromToken(String token)
```
Extract userId from JWT token

### What Happens Internally
```
1. Verify token signature
2. Decode token
3. Read payload
4. Extract subject
5. Convert subject to Long
```

### JWT Structure
JWT looks like:
```
header.payload.signature
```

### Claims Object

```
Claims claims =
```
Claims means:

 JWT payload data

Like:
- subject
- expiry
- roles
- email

## parser()

```
Jwts.parser()
```
Creates JWT parser object. \
Think:

```
"Let's start reading token"
```
### verifyWith

```
.verifyWith(getSecretKey())
```
Purpose:
```
Verify token signature
```
parser now knows:

Which secret key should be used
for signature verification

At this stage:

Token is NOT verified yet

You are only setting configuration.

Like:
```
"Use this password later"
```

What It Checks

It checks:

```
Was token signed using OUR secret key?
```

If NO:

```
Exception thrown
```
Meaning:
```
Fake or modified token
```

### build

```
.build()
```
Builds parser object.

## parseSignedClaims

```
parseSignedClaims(token)
```
Decode and parse JWT token

Internally It Does
1. Splits JWT token
2. Reads header
3. Reads payload
4. Reads signature
5. Recreates signature using secret key
6. Compares signatures
7. If valid → parse claims
8. If invalid → throw exception

## getPayload()
Returns payload section.

Example payload:

```
{
   "sub":"1"
}
```

## claims.getSubject()
Gets: sub field from JWT


# Create userService
```
@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;


    public User getUserById(Long userId) {
        return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User with id "+ userId +
                " not found"));
    }
}
```

# Create user entity
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

# controller
```

@RestController
@RequestMapping(path = "/posts")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @GetMapping
    public List<PostDTO> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("/{postId}")
    public PostDTO getPostById(@PathVariable Long postId) {
        return postService.getPostById(postId);
    }

    @PostMapping
    public PostDTO createNewPost(@RequestBody PostDTO inputPost) {
        return postService.createNewPost(inputPost);
    }

}

```