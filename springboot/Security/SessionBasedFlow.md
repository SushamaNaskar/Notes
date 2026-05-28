# Complete Spring Security Login Flow (Session-Based Authentication)
This is the default Spring Security login flow when using:
 - form login
 - session authentication
 - UserDetailsService

```
Client Login Request
POST /login
      ↓
UsernamePasswordAuthenticationFilter
      ↓
AuthenticationManager
      ↓
AuthenticationProvider
      ↓
UserDetailsService
      ↓
Load User From DB
      ↓
PasswordEncoder
      ↓
Password Match?
      ↓
Authentication Success
      ↓
SecurityContext
      ↓
Session Created
      ↓
JSESSIONID Cookie Sent
      ↓
Browser Stores Cookie
```

# Step 1 — Security Configuration
```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http) throws Exception {

        http

            .authorizeHttpRequests(auth -> auth
                    .requestMatchers("/login").permitAll()
                    .anyRequest().authenticated()
            )

            .formLogin(Customizer.withDefaults())

            .sessionManagement(session ->
                    session.sessionCreationPolicy(
                            SessionCreationPolicy.IF_REQUIRED
                    ));

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
```

## What Happens Internally?