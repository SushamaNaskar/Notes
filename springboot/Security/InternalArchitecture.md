High Level Internal Architecture
```
                ┌──────────────────────────┐
                │      Client / Browser    │
                └────────────┬─────────────┘
                             │ HTTP Request
                             ▼
                ┌──────────────────────────┐
                │ DelegatingFilterProxy    │
                │ (registered by Spring)   │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ FilterChainProxy         │
                │ (Spring Security Core)   │
                └────────────┬─────────────┘
                             ▼
          ┌─────────────────────────────────────┐
          │ Security Filter Chain               │
          │                                     │
          │ 1. CSRF Filter                      │
          │ 2. CORS Filter                      │
          │ 3. UsernamePasswordAuthentication   │
          │    Filter                           │
          │ 4. BasicAuthenticationFilter        │
          │ 5. JWT Filter (custom)              │
          │ 6. SessionManagementFilter          │
          │ 7. AuthorizationFilter              │
          │                                     │
          └────────────────┬────────────────────┘
                           ▼
                ┌──────────────────────────┐
                │ AuthenticationManager    │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ AuthenticationProvider   │
                │ (DaoAuthenticationProv.) │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ UserDetailsService       │
                │ loadUserByUsername()     │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ Database / InMemory      │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ PasswordEncoder          │
                │ matches(raw, encoded)    │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ Authentication Object    │
                │ (authenticated=true)     │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ SecurityContextHolder    │
                │ stores current user      │
                └────────────┬─────────────┘
                             ▼
                ┌──────────────────────────┐
                │ Controller Endpoint      │
                └──────────────────────────┘
```

| Component             | Responsibility                   |
| --------------------- | -------------------------------- |
| DelegatingFilterProxy | Bridge between Tomcat and Spring |
| FilterChainProxy      | Manages filter chains            |
| Security Filters      | Perform actual security          |



1. DelegatingFilterProxy (The Bridge)

What it is: A standard Servlet Filter provided by Spring, but registered directly with your Servlet container (e.g., Tomcat).

Its Role: The Servlet container doesn't know anything about Spring's application context or Spring-managed beans. When a request comes in, DelegatingFilterProxy intercepts it. It does not perform any security checks itself. Instead, it acts as a bridge, looking up and delegating the request to a specific Spring bean named FilterChainProxy.

2. FilterChainProxy (The Orchestrator)

What it is: A standard Spring-managed bean wrapped by DelegatingFilterProxy.

Its Role: This is the central powerhouse of Spring Security's servlet support. It receives the request from DelegatingFilterProxy and manages the security lifecycle. It contains a list of one or more SecurityFilterChain instances and determines which chain matches the incoming request URL.

3. SecurityFilterChain (The Container)

What it is: An interface that defines a collection of sequential security filters.


Its Role: It holds a list of individual Spring Security filters (like UsernamePasswordAuthenticationFilter, CsrfFilter, BasicAuthenticationFilter, etc.) that need to be invoked for a request. Rather than registering dozens of separate filters with the Servlet container, Spring Security puts them inside a SecurityFilterChain, which is entirely managed by FilterChainProxy.

4. springSecurityFilterChain (The Bean Identity)
What it is: This is simply the exact bean name (an ID) given to the FilterChainProxy instance inside Spring’s application context.

Its Role: When DelegatingFilterProxy asks the Spring context, "Give me the bean responsible for handling security," it looks for a bean explicitly named "springSecurityFilterChain". Under the hood, that bean is an instance of FilterChainProxy.