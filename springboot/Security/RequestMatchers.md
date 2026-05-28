# Request Matchers
```
httpSecurity
    .authorizeHttpRequests(matcherRegistry -> matcherRegistry
        .requestMatchers("/admin/**").hasRole("ADMIN")
        .requestMatchers(HttpMethod.GET, "/wallet").hasAnyRole("RIDER", "DRIVER")
        .requestMatchers(HttpMethod.POST, "/wallet").hasAuthority("WALLET_CREATE")
        .requestMatchers("/auth/**", "/error/*").permitAll()
        .anyRequest().authenticated()
    )
```

# Big Picture Flow

When a request comes:

```
Request comes to Spring Security
        ↓
Spring checks URL + HTTP Method
        ↓
Matches rules one by one
        ↓
Checks user roles/authorities
        ↓
Allow or deny request
```

| Rule                            | Meaning                   |
| ------------------------------- | ------------------------- |
| `hasRole("ADMIN")`              | Requires `ROLE_ADMIN`     |
| `hasAnyRole("RIDER", "DRIVER")` | Requires either role      |
| `hasAuthority("WALLET_CREATE")` | Requires exact permission |
| `permitAll()`                   | Public endpoint           |
| `authenticated()`               | Any logged-in user        |



# ROLE vs AUTHORITY
## Roles

Broad categories:
```
ADMIN
USER
DRIVER
RIDER
```

## Authorities

Specific permissions:
```
WALLET_CREATE
WALLET_DELETE
USER_READ
USER_UPDATE
```

# authorizeHttpRequests()

```
.authorizeHttpRequests(matcherRegistry -> matcherRegistry)
```
This starts authorization configuration.

You are telling Spring:

“I will now define access rules for different endpoints.”

## What is matcherRegistry?

It is an object used to register rules.

Think of it like:
```
IF request matches this
THEN apply this rule
```

# Admin Route Protection

```
.requestMatchers("/admin/**").hasRole("ADMIN")
```

## What does /admin/** mean?
```
/admin/users
/admin/delete
/admin/settings
/admin/anything
```
** means:

“everything inside admin”

## hasRole("ADMIN")

This means:

Only users with role ADMIN can access.

### Internally Spring checks
```
user.getAuthorities()
```

and looks for:
```
ROLE_ADMIN
```
### IMPORTANT

```
hasRole("ADMIN")
```
automatically adds:
```
ROLE_
```
So:
```
hasRole("ADMIN")
```
actually checks:
```
ROLE_ADMIN
```

### Example

Suppose logged-in user has:
```
ROLE_ADMIN
```

Then access is granted.

If user has:
```
ROLE_USER
```
Then:
```
403 Forbidden
```

# HttpMethod.GET

```
 .requestMatchers(HttpMethod.GET, "/wallet").hasAnyRole("RIDER", "DRIVER")
 ```

flow:
 ```
 Request: GET /wallet
        ↓
Spring checks role
        ↓
ROLE_RIDER OR ROLE_DRIVER ?
        ↓
Allowed
```

# POST /wallet Rule
```
.requestMatchers(HttpMethod.POST, "/wallet")
.hasAuthority("WALLET_CREATE")
```

For:

```
POST /wallet
```

user must have authority:
```
WALLET_CREATE
```

# Public Routes
```
.requestMatchers("/auth/**", "/error/*").permitAll()
```
These routes need NO authentication.

Anyone can access.