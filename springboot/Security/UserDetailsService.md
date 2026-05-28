# UserDetails and UserDetailsService in Spring Security

## User Entity
```
@Entity
public class User implements UserDetails {

    private String username;
    private String password;

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public Collection<? extends GrantedAuthority>
            getAuthorities() {

        return List.of(
            new SimpleGrantedAuthority("ROLE_USER")
        );
    }
}
```

## UserService
```
@Service
public class UserService implements UserDetailsService {

  @Override
  public UserDetails loadUserByUsername(String username) {

    User user = userRepository.findByUsername(username);

    return user;
    }
}
```

```
Spring Security expects user information in the form of UserDetails.

So when authentication happens,
Spring calls UserDetailsService.loadUserByUsername().

loadUserByUsername() Fetch user from database and 
return an object implementing UserDetails.

Spring then uses that UserDetails object
to access username, password, and authorities.
```

```
Spring calls:
    loadUserByUsername()

        ↓

Your service fetches user from DB

        ↓

Returns User object
(which implements UserDetails)

        ↓

Spring Security calls:
    getPassword()
    getUsername()
    getAuthorities()

        ↓

Authentication happens
```


# Why we need to implement  UserDetails interface
Spring Security internally works with:
```
UserDetails
```
NOT directly with your database entity.

So Spring expects something like:
```
UserDetails userDetails
```
during authentication.

## Real Authentication Flow
```
DaoAuthenticationProvider
        ↓
calls UserDetailsService
        ↓
returns UserDetails
        ↓
Spring calls:
    getPassword()
    getAuthorities()
    getUsername()
```
So Spring needs a UserDetails object.

## Why This Design Exists

Because Spring Security should work with:

- Database users
- LDAP users
- OAuth users
- In-memory users
- External systems

So instead of depending on your entity:
```
Spring depends on interface:
UserDetails
```
UserDetails is Spring Security's standard format
for representing a logged-in user.

and 
```
User implements UserDetails
```
means:
```
"My User entity follows Spring Security's
required user format."
```