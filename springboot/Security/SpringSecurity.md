# Spring Security
- Spring Security is a security framework for Spring Boot applications.
- Spring Security sits completely in front of your actual application endpoints (like your Controllers). 
- It acts as a protective barrier using a sequence of filters known as the Security Filter Chain.

# It handles:
- Login
- Logout
- Password checking
- Authentication
- Authorization
- Session management
- CSRF protection
- JWT authentication
- Protection against attacks

# Adding Spring Security
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

# What happens after adding this dependency?
- Spring Boot auto-configures security for you.

## It automatically:
- Protects all endpoints
- Creates a login page
- Creates default user
- Generates a password
- Enables session management
- Enables CSRF protection
- Adds logout support
- Adds security filters

So even if you write NO security code, your app becomes protected.


# Default URLs Provided By Spring Security

## 1. Login Page
```
/login
```
GET request shows login form.\
POST request processes login.

## 2. Logout Endpoint
```
/logout
```
When called:
- Session invalidated
- User logged out
- Cookies cleared

## 3. Error Page
If login fails:
```
/login?error
```

## 4. Logout Success
```
/login?logout
```

# What You See After Running the Application

Suppose you have:

```
@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
}
```

Now run:

```
http://localhost:8080/hello
```

Instead of seeing:
```
Hello
```

You will be redirected to:
```
http://localhost:8080/login
```

Because Spring Security protects all endpoints by default.

## Default Login Page
- Spring Security automatically creates a login page for you.

You DO NOT create this page manually initially.

### The default page contains:

- Username field
- Password field
- Sign in button
- Error message on failed login
- Logout support

## Default Username and Password
Spring creates a temporary default user automatically.

### Username
```
user
```

### Password
Generated randomly at startup. \

Example console log:

```
Using generated security password: 9f8sd7f6sdf
```

So login becomes:
```
username = user
password = 9f8sd7f6sdf
```
### Problem With Generated Password
- The generated password changes every time the application restarts.
- So developers usually define their own username and password by 

### Adding Username and Password in application.properties

#### application.properties
```
spring.security.user.name=anuj
spring.security.user.password=1234
```
Now restart the application.

Login becomes:
```
username = anuj
password = 1234
```
No random password anymore.

# Default Authentication Flow

## Step 1
User opens:

```
http://localhost:8080/hello
```
## Step 2

Spring Security intercepts request.

It checks: 
```
Is user authenticated?
```

Answer:
```
No
```

## Step 3
Spring redirects to: 
```
/login
```

## Step 4

User enters:
```
username = anuj
password = 1234
```


## Step 5
Spring checks credentials.

If correct:

```
Login success
```
## Step 6
Spring creates :

### 1. SESSION

Example:
```
JSESSIONID = AB12CD34
```
Browser stores this session id in cookies.

### 2. CSRF TOKEN
Spring Security also creates:
```
CSRF Token
```
Example:
```
_csrf = XYS78ABC
```
Browser stores CSRF token.


## Step 7

Future requests automatically send:
```
 JSESSIONID
```

and for POST/PUT/DELETE requests also send:
```
 CSRF Token
```

 Example:
```
Cookie: JSESSIONID=AB12CD34
X-CSRF-TOKEN: XYS78ABC
```

## Step 8
Spring Security validates:

- Session valid?
- CSRF token valid?

If both are valid:
```
User is authenticated
```
and request is allowed.

## flow diagram
```
User Request
     │
     ▼
Spring Security Filters
     │
     ▼
Authenticated?
   /      \
 NO        YES
 │           │
 ▼           ▼
Redirect     Allow Access
to /login
     │
     ▼
User Login
     │
     ▼
Session Created (JSESSIONID)
     │
     ▼
CSRF Token Generated
     │
     ▼
Browser Stores Both
     │
     ▼
Future Requests Send:
- JSESSIONID
- CSRF Token
     │
     ▼
Spring Validates Both
     │
     ▼
Access Granted
```

# InMemory Authentication Concept
When credentials are stored inside application memory:
```
InMemory Authentication
```
This is mostly used for:

- Learning
- Testing
- Interviews
- Small applications

## Flow
```
User tries login
      ↓
Spring checks in memory
      ↓
Authentication success
```

## Example InMemory User
```
@Bean
public UserDetailsService userDetailsService() {

    UserDetails user = User
            .withUsername("anuj")
            .password(passwordEncoder().encode("1234"))
            .roles("USER")
            .build();

    return new InMemoryUserDetailsManager(user);
}
```
# Password Encoder
- Passwords should NEVER be stored as plain text.

Spring Security uses:
```
@Bean
public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
}
```
BCrypt hashes passwords securely.