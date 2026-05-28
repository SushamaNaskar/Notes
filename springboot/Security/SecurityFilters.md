# Security Filter Chain
- In Spring Security, every incoming HTTP request passes through multiple security filters before reaching your controller.

```
SecurityContextHolderFilter
CorsFilter
CsrfFilter
LogoutFilter
UsernamePasswordAuthenticationFilter
BasicAuthenticationFilter
JwtFilter (custom)
SessionManagementFilter
ExceptionTranslationFilter
AuthorizationFilter
```
# Example Flow
```
Incoming Request
      ↓
1. CSRF Filter
      ↓
2. CORS Filter
      ↓
3. UsernamePasswordAuthenticationFilter
      ↓
4. BasicAuthenticationFilter
      ↓
5. JWT Filter (Custom)
      ↓
6. SessionManagementFilter
      ↓
7. AuthorizationFilter
      ↓
Controller
```

# Complete Example Configuration
```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http

            // 1. CSRF
            .csrf(csrf -> csrf.disable())

            // 2. CORS
            .cors(cors -> {})

            // 3. Session Management
            .sessionManagement(session ->
                    session.sessionCreationPolicy(
                            SessionCreationPolicy.STATELESS))

            // 4. Authorization
            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/public/**").permitAll()
                    .requestMatchers("/admin/**").hasRole("ADMIN")
                    .anyRequest().authenticated()
            )

            // 5. Basic Authentication
            .httpBasic(Customizer.withDefaults())

            // 6. Add JWT Filter
            .addFilterBefore(
                    new JwtFilter(),
                    UsernamePasswordAuthenticationFilter.class
            );

        return http.build();
    }
}
```

# 1. CSRF Filter
Protects against: Cross Site Request Forgery

# 2. CORS Filter
Controls which frontend domains can call backend APIs.

## Configure CORS
```
@Bean
public CorsConfigurationSource corsConfigurationSource() {

    CorsConfiguration config = new CorsConfiguration();

    config.setAllowedOrigins(List.of("http://localhost:3000"));

    config.setAllowedMethods(
            List.of("GET", "POST", "PUT", "DELETE"));

    config.setAllowedHeaders(List.of("*"));

    UrlBasedCorsConfigurationSource source =
            new UrlBasedCorsConfigurationSource();

    source.registerCorsConfiguration("/**", config);

    return source;
}
```

# 3. UsernamePasswordAuthenticationFilter
Extract login credentials from login request.

## Internal Flow
```
UsernamePasswordAuthenticationFilter
      ↓
Extract username/password
      ↓
AuthenticationManager
      ↓
UserDetailsService
      ↓
Load user from DB
      ↓
PasswordEncoder matches password
      ↓
Authentication Success/Failure
```

## Example UserDetailsService
```
@Service
public class MyUserDetailsService
        implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {

        return User.builder()
                .username("anuj")
                .password(passwordEncoder().encode("1234"))
                .roles("USER")
                .build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

# 4. BasicAuthenticationFilter
Handles: HTTP Basic Authentication

# 5. JWT Filter (Custom)
Validates JWT token on every request.

# JWT Filter Example
```
@Component
public class JwtFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader =
                request.getHeader("Authorization");

        if (authHeader != null &&
                authHeader.startsWith("Bearer ")) {

            String token = authHeader.substring(7);

            // validate token
            String username = JwtUtil.extractUsername(token);

            if (username != null) {

                UsernamePasswordAuthenticationToken auth =
                        new UsernamePasswordAuthenticationToken(
                                username,
                                null,
                                List.of()
                        );

                SecurityContextHolder
                        .getContext()
                        .setAuthentication(auth);
            }
        }

        filterChain.doFilter(request, response);
    }
}
```

## Add JWT Filter
```
http.addFilterBefore(
        jwtFilter,
        UsernamePasswordAuthenticationFilter.class
);
```
## Why Before UsernamePasswordAuthenticationFilter?

Because JWT authentication should happen before Spring tries normal login authentication.

# SessionManagementFilter
Purpose

Handles:

Session creation
Session validation
Stateless/stateful behavior

Configure Stateless
```
http.sessionManagement(session ->
        session.sessionCreationPolicy(
                SessionCreationPolicy.STATELESS));
```

# 7. AuthorizationFilter
Checks: Does user have permission?
```
.authorizeHttpRequests(auth -> auth
        .requestMatchers("/admin/**")
        .hasRole("ADMIN")
        .anyRequest()
        .authenticated()
)
```

# Full Internal Flow (JWT)
```
Client Request
Authorization: Bearer eyJ...
      ↓
Security Filter Chain
      ↓
CSRF Filter
      ↓
CORS Filter
      ↓
JWT Filter
      ↓
Validate Token
      ↓
Create Authentication Object
      ↓
Store in SecurityContext
      ↓
SessionManagementFilter
(STATELESS)
      ↓
AuthorizationFilter
(check roles)
      ↓
Controller
```

# Full Internal Flow (Session Based)
```
Login Request
      ↓
UsernamePasswordAuthenticationFilter
      ↓
AuthenticationManager
      ↓
UserDetailsService
      ↓
Password Match
      ↓
Authentication Success
      ↓
Session Created
      ↓
Session ID sent to browser
```