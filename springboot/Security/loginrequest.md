```
How request moves through:
Security Filters
    ↓
AuthenticationManager
    ↓
AuthenticationProvider
    ↓
UserDetailsService
    ↓
PasswordEncoder
    ↓
SecurityContext
```

# Big Picture
```
Client sends login request
        ↓
Security Filter Chain intercepts request
        ↓
UsernamePasswordAuthenticationFilter extracts credentials
        ↓
AuthenticationManager handles authentication
        ↓
AuthenticationProvider verifies user
        ↓
UserDetailsService loads user from DB
        ↓
PasswordEncoder verifies password
        ↓
Authenticated user returned
        ↓
SecurityContext stores authenticated user
        ↓
Request reaches controller
```

# Step-by-Step Explanation of the Diagram

## 1. HTTP Request Enters

Left side:
```
HTTP Request
```

Example:
```
POST /login

username=anuj
password=123
```
This request never directly goes to controller first.

Instead:
```
Spring Security intercepts it first
```

through:
```
Security Filter Chain
```

## 2. Security Filter Chain
This box:
```
Security Filters Chain
```

contains many filters:
```
WebAsyncManagerIntegrationFilter
SecurityContextPersistenceFilter
HeaderWriterFilter
LogoutFilter
UsernamePasswordAuthenticationFilter
...
```
Each filter has one small responsibility.

Most filters inspect or fetch different parts
of the HTTP request such as:

- username/password
- Authorization header
- JWT token
- session ID
- cookies
- CSRF token
- request headers
- roles/authorities
- async context

After processing their responsibility,
they pass the request to the next filter.

## Important Filter Here
For login authentication:
```
UsernamePasswordAuthenticationFilter
```
is the main filter.

It does:
```
String username = request.getParameter("username");
String password = request.getParameter("password");
```

Then creates:
```
UsernamePasswordAuthenticationToken
```

Example:
```
UsernamePasswordAuthenticationToken token =
    new UsernamePasswordAuthenticationToken(
        username,
        password
    );
```

At this moment:
```
User is NOT authenticated yet
```

It only contains credentials.

## 3. Authentication Delegated to AuthenticationManager
Diagram Step:
```
authentication responsibility is delegated
```

The filter now says:
```
"I extracted credentials.
Now someone authenticate this user."
```

So it calls:
```
authenticationManager.authenticate(token);
```

## 4. AuthenticationManager
This box:
```
AuthenticationManager
```
acts like:
```
Main authentication coordinator
```
Usually implementation is:
```
ProviderManager
```
It does NOT authenticate directly.
Instead:
```
It selects suitable AuthenticationProvider
```

## 5. AuthenticationProvider
This section:
```
AuthenticationProvider
```
Spring can have many providers:
```
DaoAuthenticationProvider
InMemoryAuthenticationProvider
OAuth2AuthenticationProvider
LDAPAuthenticationProvider
...
```

AuthenticationManager loops through providers:
```
for(provider : providers){
   if(provider.supports(token)){
      provider.authenticate(token);
   }
}
```

### Why Multiple Providers?
Because authentication can happen using:

- Database
- JWT
- LDAP
- OAuth2
- In-memory users
- External systems

Each provider handles different authentication type.

## 6. DaoAuthenticationProvider
This specific provider:
```
DaoAuthenticationProvider
```

is used for:
```
Username/password authentication using database
```
This is the most common provider.

## 7. UserDetailsService
DaoAuthenticationProvider now needs user data.

So it calls:
```
UserDetailsService
```
Method:
```
loadUserByUsername(username)
```

Example:
```
@Override
public UserDetails loadUserByUsername(String username) {

    return userRepository
            .findByUsername(username)
            .orElseThrow();
}
```
This fetches user from DB.

## Returned UserDetails
Example:
```
UserDetails:
    username = "anuj"
    password = "$2a$..."
    roles = ROLE_ADMIN
```

IMPORTANT:
```
Password from DB is encrypted/hashed
```
NOT plain text.

## 8. PasswordEncoder
Now:
```
PasswordEncoder
```
compares:
```
Raw password from request
VS
Encoded password from DB
```

Example:
```
passwordEncoder.matches(rawPassword, encodedPassword)
```

Example:
```
"123"
vs
"$2a$10$abcxyz..."
```
Usually encoder:
```
BCryptPasswordEncoder
```

## 9. Authentication Success
If password matches:

Provider creates:
```
UsernamePasswordAuthenticationToken(
    principal,
    null,
    authorities
)
```

Now token becomes:
```
Authenticated = true
```
Contains:

UserDetails
Roles
Authorities

This is:
```
Authenticated user object
```

## 10. Return to AuthenticationManager
Diagram Step:
```
Return the authenticated user
```

Provider returns authenticated token to:
```
AuthenticationManager
```

Then manager returns it to:
```
UsernamePasswordAuthenticationFilter
```

## 11. Store User in SecurityContext
Diagram Step:
```
set authenticated user in context
```

Now filter stores authenticated user into:
```
SecurityContextHolder
```

Example:
```
SecurityContextHolder
    .getContext()
    .setAuthentication(authentication);
```

## 12. SecurityContextHolder
This section:
```
SecurityContextHolder
```
is extremely important.

It stores:
```
Currently logged-in user
```

Inside:
```
SecurityContext
    ↓
Authentication
```
This becomes globally accessible during request.

### Why SecurityContext Matters
Anywhere in app:
```
Authentication auth =
    SecurityContextHolder
        .getContext()
        .getAuthentication();
```

You can access:

- username
- roles
- authorities
- authenticated user

## 13. Request Reaches DispatcherServlet
Diagram:
```
Dispatcher Servlet and controllers
```
NOW request finally reaches controller.

Because authentication already completed.

Controller example:
```
@GetMapping("/profile")
public String profile(Authentication auth){
    return auth.getName();
}
```

# Complete Flow in Simple Language
```
1. Request enters Spring Security

2. UsernamePasswordAuthenticationFilter
   extracts username/password

3. Filter sends credentials to AuthenticationManager

4. AuthenticationManager selects suitable AuthenticationProvider

5. DaoAuthenticationProvider loads user from DB
   using UserDetailsService

6. PasswordEncoder verifies password

7. If valid:
      authenticated token created

8. Authentication stored inside SecurityContext

9. Request allowed to continue

10. Controller executes
```

# Extremely Important Understanding

- AuthenticationManager ->  It decides, Which provider should authenticate
- AuthenticationProvider -> Actual authenticator, It verifies credentials.
- UserDetailsService -> Acts like User fetcher, It loads user from DB.
- PasswordEncoder -> Password verifier,  It compares passwords securely.
- SecurityContextHolder -> Acts like Logged-in user storage, Accessible throughout request lifecycle.

# Real Internal Flow With Classes
```
HTTP Request
    ↓
DelegatingFilterProxy
    ↓
FilterChainProxy
    ↓
UsernamePasswordAuthenticationFilter
    ↓
AuthenticationManager (ProviderManager)
    ↓
DaoAuthenticationProvider
    ↓
UserDetailsService
    ↓
Database
    ↓
PasswordEncoder
    ↓
Authenticated Token
    ↓
SecurityContextHolder
    ↓
DispatcherServlet
    ↓
Controller
```

# Spring Security Authentication Flow
```
1. HTTP request enters Spring Security Filter Chain

2. Security Filter Chain contains many filters,
   where each filter has one responsibility
   and may fetch different parts of the request.

3. UsernamePasswordAuthenticationFilter
   extracts username and password
   from the HTTP request.

4. The filter creates an unauthenticated
   UsernamePasswordAuthenticationToken.

5. Control moves to AuthenticationManager.

6. AuthenticationManager selects the suitable
   AuthenticationProvider.

7. Example:
   DaoAuthenticationProvider handles
   username/password authentication.

8. DaoAuthenticationProvider uses
   UserDetailsService to load user from database.

9. If user exists,
   PasswordEncoder verifies the password.

10. If password matches,
    authenticated token is created.

11. Authenticated token returns back to:
        AuthenticationProvider
            ↓
        AuthenticationManager
            ↓
        UsernamePasswordAuthenticationFilter

12. UsernamePasswordAuthenticationFilter stores
    authentication inside SecurityContext.

13. SecurityContextHolder now contains
    the authenticated user.

14. Request continues to DispatcherServlet
    and Controllers.
```

# Very Important Internal Detail
At login:
```
UsernamePasswordAuthenticationToken
```
exists in TWO states.

Before Authentication
Created by filter:
```
new UsernamePasswordAuthenticationToken(
    username,
    password
)
```
This means:
```
authenticated = false
```

After Authentication
Created by provider:
```
new UsernamePasswordAuthenticationToken(
    userDetails,
    null,
    authorities
)
```
Now:
```
authenticated = true
```
This authenticated token gets stored in:
```
SecurityContextHolder
```

# UsernamePasswordAuthenticationFilter
-  extracts username and password
   from the HTTP request and authenticate the user based on user name and password




# userDetails
```
Spring Security expects user information in the form of UserDetails.

So when authentication happens,
Spring calls UserDetailsService.loadUserByUsername().

This method must return an object implementing UserDetails.

Spring then uses that UserDetails object
to access username, password, and authorities.
```


```
When Spring Security needs authenticated user information,
it calls UserDetailsService.

That service returns an object implementing UserDetails,
which usually contains user data loaded from the database.

Spring Security then uses that UserDetails object
to access username, password, and roles.
```