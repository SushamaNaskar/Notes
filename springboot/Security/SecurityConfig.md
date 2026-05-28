# Basic Spring Security Configuration
```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/public/**").permitAll()
                        .anyRequest().authenticated()
                )
                .formLogin(Customizer.withDefaults());

        return http.build();
    }
}
```

## @Configuration
Tells Spring:
```
This class contains Spring configuration
```

## @EnableWebSecurity
Enables Spring Security.

## SecurityFilterChain
This is the main security configuration object.

Spring internally creates security filters using this configuration.

## Authorization Rules
```
.authorizeHttpRequests(auth -> auth
        .requestMatchers("/public/**").permitAll()
        .anyRequest().authenticated()
)
```

```
requestMatchers("/public/**").permitAll()
```
- url containing /public can we accessed by anyone without authentication(login)

```
anyRequest().authenticated()
```
- for everything else login required

## Form Login
```
.formLogin(Customizer.withDefaults())
```
Enables:
   * Login page
   * Username/password form
   * Session authentication


# Full Stateless API Security Config
Common for JWT APIs:

```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .formLogin(form -> form.disable())

                .httpBasic(httpBasic -> httpBasic.disable())

                .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll()
                        .anyRequest().authenticated()
                );

        return http.build();
    }
}
```

## Disable HTTP Basic Authentication
Spring also enables HTTP Basic authentication sometimes.

```
http
    .httpBasic(httpBasic -> httpBasic.disable());
```

### Disable Form Login
```
.formLogin(form -> form.disable());
```
Now Spring Security:
- Does NOT show login page
- Does NOT support form-based authentication

## Disable CSRF
```
http
    .csrf(csrf -> csrf.disable());
```

## Disable session /go stateless STATELESS
```
http.
 .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )
```