# DelegatingFilterProxy 
- DelegatingFilterProxy is a special Servlet Filter provided by Spring.
- It acts as a bridge between:
   * Servlet Container (Tomcat)
   * Spring Security

# Main Purpose
Its job is:
```
Receive request
      ↓
Find Spring Security filter bean
      ↓
Forward request to it
```
- It does NOT perform security itself.
- It only delegates requests.

# Why It Is Needed
- Tomcat understands only normal Servlet Filters.
- But Spring Security filters are Spring-managed beans.
- So Spring needs something that can:
    * behave like a Servlet Filter for Tomcat
    * but internally call Spring beans

That bridge is:
```
DelegatingFilterProxy
```    

# Simple Flow
```
Client Request
      ↓
Tomcat
      ↓
DelegatingFilterProxy
      ↓
springSecurityFilterChain
      ↓
Security Filters
      ↓
Controller
```

# Actual Internal Structure
```
DelegatingFilterProxy
        ↓ delegates to
FilterChainProxy
        ↓ contains
Security Filters
```

# What Happens Step by Step

## Step 1 — Request Comes
```
GET /api/users
```
Tomcat receives request.

## Step 2 — DelegatingFilterProxy Intercepts
DelegatingFilterProxy catches every request before controllers.

## Step 3 — It Finds Spring Security Bean
It searches inside:

Spring Application Context (IOC Container)

for bean named:
```
springSecurityFilterChain
```

### Where Does This Bean Come From?
#### default flow
If you add:
```
spring-boot-starter-security
```

Spring Boot automatically creates a default:
```
springSecurityFilterChain
```
bean for you.


#### You Write Your Own Security Configuration

Example:
You create:
```
@Bean
SecurityFilterChain securityFilterChain(HttpSecurity http)
```

When Spring runs:
```
http.build();
```

Spring internally creates:
```
springSecurityFilterChain
```
bean.

# What DelegatingFilterProxy Does Before Delegating

Before forwarding request, it:
- intercepts request
- looks into Spring IOC container
- finds bean springSecurityFilterChain
- forwards request to it

# Internal Flow Diagram
```
Client Request
      ↓
Tomcat Servlet Container
      ↓
DelegatingFilterProxy
      ↓
Spring Application Context
      ↓
Find Bean:
springSecurityFilterChain
      ↓
FilterChainProxy
      ↓
Security Filters
    ├── UsernamePasswordAuthenticationFilter
    ├── BasicAuthenticationFilter
    ├── CsrfFilter
    ├── AuthorizationFilter
    └── etc.
      ↓
DispatcherServlet
      ↓
Controller
```