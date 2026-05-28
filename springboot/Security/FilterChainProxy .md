# FilterChainProxy 
- FilterChainProxy is the main Spring Security filter manager.
- It contains and manages all Spring Security filters.
- It decides:
   * which filters should run
   * in what order they should run

# Simple Definition
FilterChainProxy is the central filter in Spring Security that holds and executes the Security Filter Chain.

# Main Flow
```
Request
   ↓
DelegatingFilterProxy
   ↓
FilterChainProxy
   ↓
Security Filters
   ↓
Controller
```

# Relationship
```
DelegatingFilterProxy
        ↓ delegates to
FilterChainProxy
        ↓ runs
Security Filters
```

# What Does FilterChainProxy Do?
It:
- stores security filters
- manages filter order
- executes filters one by one
- chooses correct filter chain for request

# Internal Security Filters
FilterChainProxy contains many filters like:

```
SecurityContextHolderFilter
CsrfFilter
UsernamePasswordAuthenticationFilter
BasicAuthenticationFilter
SessionManagementFilter
AuthorizationFilter
ExceptionTranslationFilter
```

# Execution Flow
```
Request
   ↓
FilterChainProxy
   ↓
Filter 1
   ↓
Filter 2
   ↓
Filter 3
   ↓
Controller
```
Each filter performs one security task.

# Example Login Flow
```
POST /login
      ↓
FilterChainProxy
      ↓
UsernamePasswordAuthenticationFilter
      ↓
AuthenticationManager
      ↓
User authenticated
```

# Example JWT Flow
```
Request with JWT
      ↓
FilterChainProxy
      ↓
JWT Filter
      ↓
Validate token
      ↓
Set Authentication
      ↓
Next Filters
```

# Where Does FilterChainProxy Come From?
When you write:
```
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http)
```
and:

```
return http.build();
```

Spring internally creates:

```
FilterChainProxy
```

bean named:
```
springSecurityFilterChain
```

# Full Internal Flow
```
Client Request
      ↓
Tomcat
      ↓
DelegatingFilterProxy
      ↓
springSecurityFilterChain
(FilterChainProxy)
      ↓
Security Filters
      ↓
Controller
```

# springSecurityFilterChain vs SecurityFilterChain

springSecurityFilterChain is the main FilterChainProxy bean that manages and executes all configured SecurityFilterChain objects.

SecurityFilterChain → actual security rules

springSecurityFilterChain → manager of all chains


# springSecurityFilterChain and FilterChainProxy
springSecurityFilterChain
Bean name
Used for lookup
Used by DelegatingFilterProxy
FilterChainProxy
Actual implementation class
Executes security logic
Holds security chains

```
@Bean(name = "springSecurityFilterChain")
public FilterChainProxy filterChainProxy() {
    ...
}
```