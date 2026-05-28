# InMemoryUserDetailsManager
Spring Security also provides a built-in implementation of:
```
UserDetailsService
```

called:
```
InMemoryUserDetailsManager
```

Instead of fetching users from database:
```
Users are stored directly in application memory (RAM)
```

# InMemory Authentication Example
```
@Bean
public UserDetailsService userDetailsService() {

    UserDetails user1 =
            User.withUsername("anuj")
                    .password(passwordEncoder().encode("123"))
                    .roles("USER")
                    .build();

    UserDetails user2 =
            User.withUsername("admin")
                    .password(passwordEncoder().encode("admin"))
                    .roles("ADMIN")
                    .build();

    return new InMemoryUserDetailsManager(user1, user2);
}


@Bean
PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
}
```

# Important Understanding

This User is NOT your entity class.

This is Spring Security's built-in class:
```
org.springframework.security.core.userdetails.User
```

which already implements:
```
UserDetails
```

# InMemory Authentication Flow
```
UsernamePasswordAuthenticationFilter
        ↓
AuthenticationManager
        ↓
DaoAuthenticationProvider
        ↓
InMemoryUserDetailsManager
        ↓
loadUserByUsername(username)
        ↓
Returns UserDetails from memory
        ↓
Spring calls:
    getPassword()
    getAuthorities()
    getUsername()
        ↓
Authentication happens
```