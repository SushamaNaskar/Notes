# SecurityFilterChain
- SecurityFilterChain is a list of security filters that Spring Security executes for every incoming HTTP request.

SecurityFilterChain is a Spring Security component that defines the sequence of security filters applied to incoming HTTP requests for authentication, authorization, session management, CSRF protection, and other security features.

Contains:

URL rules
Authentication rules
Authorization rules
Security filters

```
@Bean
public SecurityFilterChain securityFilterChain(HttpSecurity http)
        throws Exception {

    http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .formLogin(Customizer.withDefaults());

    return http.build();
}
```

Common Filters
| Filter                               | Purpose                           |
| ------------------------------------ | --------------------------------- |
| SecurityContextPersistenceFilter     | Loads logged-in user from session |
| UsernamePasswordAuthenticationFilter | Handles login form                |
| BasicAuthenticationFilter            | Handles Basic Auth                |
| JwtAuthenticationFilter              | Validates JWT token               |
| CsrfFilter                           | CSRF protection                   |
| AuthorizationFilter                  | Checks permissions                |
