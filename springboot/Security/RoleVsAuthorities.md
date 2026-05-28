# Roles vs Authorities in Spring Security
both are stored inside:

```
GrantedAuthority
```

But they represent different ideas.

| Concept              | Meaning              |
| -------------------- | -------------------- |
| Role                 | WHO the user is      |
| Authority/Permission | WHAT the user can do |

# Roles
Broad categories:

```
ADMIN
DRIVER
RIDER
```

These describe identity/category.

# Authorities
Specific permissions:

```
WALLET_CREATE
USER_DELETE
ORDER_READ
ORDER_CANCEL
```

These describe permissions/actions.

# Real World Analogy
Imagine a company.

## Role
```
Manager
Employee
HR
```

## Authorities
```
Approve Leave
View Salary
Edit Employee
```

# Why Both Exist?

Because roles alone become messy.

## BAD DESIGN
```
ADMIN_CAN_CREATE_WALLET
ADMIN_CAN_DELETE_WALLET
ADMIN_CAN_VIEW_WALLET
```

Too many roles.

## GOOD DESIGN
ROLE_ADMIN

```
Authorities:
- WALLET_CREATE
- WALLET_DELETE
- WALLET_VIEW
```
Much cleaner.

# Entity Design

## Role Entity
```
@Entity
public class Role {

    @Id
    private Long id;

    private String name;
}
```

## Permission Entity
```
@Entity
public class Permission {

    @Id
    private Long id;

    private String name;
}
```

## User Entity
```
@Entity
public class User {

    @Id
    private Long id;

    private String username;

    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roles;
}
```

## Add Permissions Inside Role
```
@Entity
public class Role {

    @Id
    private Long id;

    private String name;

    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Permission> permissions;
}
```

## Final Structure
```
User
  ↓
Roles
  ↓
Permissions
```

## Example Object Graph
```
User: John
    ↓
ROLE_ADMIN
    ↓
Permissions:
- WALLET_CREATE
- USER_DELETE
- ORDER_READ
```

## Fetching Roles & Authorities
This happens during login.

```
@Service
public class CustomUserDetailsService
        implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {

        User user = userRepository
                .findByUsername(username)
                .orElseThrow();

        List<GrantedAuthority> authorities =
                new ArrayList<>();
    }
}
```          

# Add Roles
```
for(Role role : user.getRoles()) {

    authorities.add(
        new SimpleGrantedAuthority(role.getName())
    );
}
```

# Add Permissions
```
for(Role role : user.getRoles()) {

    for(Permission permission : role.getPermissions()) {

        authorities.add(
            new SimpleGrantedAuthority(
                permission.getName()
            )
        );
    }
}
```

# Final Authorities Example
ROLE_ADMIN
WALLET_CREATE
USER_DELETE
ORDER_READ

# Return UserDetails
```
return new org.springframework.security.core.userdetails.User(
        user.getUsername(),
        user.getPassword(),
        authorities
);
```

# GrantedAuthority

It does NOT care whether it's role or permission.

SecurityContext Stores
```
SecurityContextHolder
```

contains:
```
Authentication
```
which contains:
```
Collection<GrantedAuthority>
```

# Using in Security Checks

## Role Check
```
.hasRole("ADMIN")
```

Spring checks:

```
ROLE_ADMIN
```

## Authority Check
```
.hasAuthority("WALLET_CREATE")

```

Spring checks exact authority.


## Example

User Authorities:
```
ROLE_DRIVER
WALLET_CREATE
ORDER_READ
```
Endpoint
```
.requestMatchers(HttpMethod.POST, "/wallet")
.hasAuthority("WALLET_CREATE")
```

## Flow
```
POST /wallet
        ↓
Need WALLET_CREATE
        ↓
User has it
        ↓
Access granted
```

# JWT Storage

Usually in JWT systems we store:
```
roles
permissions
```

## JWT Payload Example
```
{
  "sub": "john",
  "roles": ["ROLE_ADMIN"],
  "permissions": [
    "WALLET_CREATE",
    "USER_DELETE"
  ]
}
```

## Then JWT Filter Extracts Them
```
Claims claims = jwtService.extractClaims(token);

List<String> roles =
        claims.get("roles", List.class);

List<String> permissions =
        claims.get("permissions", List.class);
```

# Convert to Authorities
```
List<GrantedAuthority> authorities =
        new ArrayList<>();

roles.forEach(role ->
    authorities.add(
        new SimpleGrantedAuthority(role)
    )
);

permissions.forEach(permission ->
    authorities.add(
        new SimpleGrantedAuthority(permission)
    )
);
```

# hasRole vs hasAuthority Deep Difference
```
| Method                     | Checks           |
| -------------------------- | ---------------- |
| hasRole("ADMIN")           | ROLE_ADMIN       |
| hasAuthority("ROLE_ADMIN") | ROLE_ADMIN       |
| hasAuthority("ADMIN")      | ADMIN            |
| hasAnyRole("A","B")        | ROLE_A or ROLE_B |
```