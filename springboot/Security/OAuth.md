# Simple Mental Model
```
Traditional Login:
Your App trusts your DB

OAuth2 Login:
Your App trusts Google
```

# OAuth2 / Third-Party Authentication
using:

Frontend Client
Spring Boot Server
Google (Authorization Server)

This is the exact flow happening when you click:
```
Login with Google
```

## First Understand the 3 Main Components
1. Client

This is your frontend application.

Examples:
- React App
- Angular App
- HTML page

In your diagram:
```
Client
```

## 2. Server

Your backend application.

Example:
```
Spring Boot Application
```
Responsibilities:
- Handles OAuth2 flow
- Exchanges auth code for token
- Generates your JWT
- Stores refresh token

In diagram:
```
Server
```

## 3. Authorization Server

The third-party login provider.

Examples:
- Google
- GitHub
- Facebook

Responsibilities:

- Verifies user credentials
- Gives authorization code
- Gives access token
- Provides user info

In diagram:
```
Authorization Server
```

## BIG PICTURE FLOW
```
Frontend
   ↓
Spring Boot
   ↓
Google Login
   ↓
Google verifies user
   ↓
Spring Boot receives auth code
   ↓
Spring Boot gets Google access token
   ↓
Spring Boot generates its own JWT
   ↓
Frontend receives JWT
```

## STEP-BY-STEP EXPLANATION

### STEP 1
Client calls:

```
/oauth2/authorization/google
```

This endpoint is automatically created by Spring Security.

Frontend button:
```
<a href="/oauth2/authorization/google">
   Login with Google
</a>
```

#### What Happens Internally?

Spring Security sees:
```
/oauth2/authorization/google
```

and understands:
```
Start Google OAuth2 Login
```

### STEP 2
Server Connects to Google

Diagram:
```
connect with auth server with client id
```

Spring sends request to Google including:

- client_id
- redirect_uri
- scopes
- state

#### Example Request
```
https://accounts.google.com/o/oauth2/v2/auth?
client_id=abc123
&redirect_uri=http://localhost:8080/login/oauth2/code/google
&scope=email profile
&state=xyz
```

#### Important Terms
1. client_id
```
Unique ID of your application.
```
Google gives this when you register app in:
Google Cloud Console

2. redirect_uri

Where Google should return after login.

Example:
```
/login/oauth2/code/google
```

3. scope

What permissions your app wants.

Example:
- email
- profile

4. state
Random security token.

Used to prevent:
```
CSRF attacks
```

### STEP 3
User Redirected to Google Login Page

Diagram:
```
redirect to the 3rd party login page
```
Browser opens Google login screen.

### User Sees
```
Continue with Google
```

User enters:
- email
- password 

and grants permissions.

### STEP 4
User Provides Credentials and Consent

Diagram:
```
user provides credentials and consent
```
Very important:

Your application NEVER sees Google password.

Only Google sees it.

This is the major advantage of OAuth2.

#### Traditional Login vs OAuth2
Traditional
```
Frontend → Your Backend → DB password check
```
Your app handles passwords.

OAuth2
```
Frontend → Google
```

Google handles passwords.

Much safer.

## STEP 5
Google Redirects Back to Spring Boot

Diagram:
```
Redirect user to redirect url with state and code
```
Google redirects browser to:
```
/login/oauth2/code/google?state=STATE&code=AUTH_CODE
```

### Important Things Here

Google sends:

| Parameter | Meaning             |
| --------- | ------------------- |
| state     | Security validation |
| code      | Authorization code  |


What is AUTH_CODE?

- Temporary code proving:
```
User successfully authenticated
```
Example:
```
4/0AdQt8q...
VERY IMPORTANT
```
Google DOES NOT directly send access token to browser in Authorization Code Flow.

Instead:

- browser gets temporary code
- backend exchanges it securely

This is why Authorization Code Flow is secure.

## STEP 6
Spring Security Uses AUTH_CODE to Request Tokens
```
Spring Security uses the AUTH_CODE to request tokens
```
Now backend talks directly to Google.

Internal Spring Filter

This is handled automatically by:
```
OAuth2LoginAuthenticationFilter
```

Server-to-Server Request

Spring sends:
```
POST https://oauth2.googleapis.com/token
```
with:

- auth code
- client secret
- redirect URI

Why This Is Secure

Because:

Client secret never exposed to browser

Only backend knows it.

## STEP 7
Google Validates STATE and AUTH_CODE

Diagram:
```
validate STATE CODE and AUTH_CODE
```
Google checks:

- auth code valid?
- state valid?
- code expired?
- correct client?

Why Validate STATE?

Prevents attackers from injecting fake OAuth requests.

This protects against:

Cross-Site Request Forgery (CSRF)

## STEP 8
Google Returns Access Token

Diagram:
```
provides access Tokens
```
Google sends:
```
{
  "access_token": "google_access_token",
  "expires_in": 3600,
  "scope": "email profile"
}
```
What This Token Is

This token belongs to:

Google APIs

NOT your application.

Important distinction.

## STEP 9
Successful Authentication

Diagram:
```
upon successful authentication
```
Spring Security now:

- considers user authenticated
- creates Authentication object

Usually:
```
OAuth2AuthenticationToken
```
## STEP 10
Triggers OAuth2SuccessHandler

Diagram:
```
triggers OAuth2SuccessHandler
```
THIS is your custom class.

Spring automatically calls:

onAuthenticationSuccess()

after OAuth2 login succeeds.

# OAuth2 Client Authentication in Spring Boot
Dependency:
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-oauth2-client</artifactId>
</dependency>
```

## application.yml

Example with Google:
```
spring:
  security:
    oauth2:
      client:
        registration:
          google:
            client-id: your-client-id
            client-secret: your-client-secret
            scope:
              - email
              - profile
```
client-id and client-secret are provided by google oauth 

# customize the OAuth2 configuration

```
  @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
            .oauth2Login(oauth2Config -> oauth2Config
               .failureUrl("/login?error=true")
               .successHandler(oAuth2SuccessHandler)
            );
    }
```
## .successHandler(oAuth2SuccessHandler)

This defines:

- What should happen after successful OAuth2 login.

- Instead of default behavior, Spring calls oAuth2SuccessHandler class handler.

## Default Behavior Without Success Handler

Normally Spring Security:
- authenticates user
- creates session
- redirects to home page

With Custom Success Handler

You can:
- generate JWT
- save user in DB
- redirect frontend
- add custom logic
- create refresh token
- log audit events


# oAuth2SuccessHandler
```

@Component
@RequiredArgsConstructor
@Slf4j
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final UserService userService;
    private final JwtService jwtService;

    @Value("${deploy.env}")
    private String deployEnv;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        OAuth2AuthenticationToken token = (OAuth2AuthenticationToken) authentication;
        DefaultOAuth2User oAuth2User = (DefaultOAuth2User) token.getPrincipal();

        String email = oAuth2User.getAttribute("email");

        User user = userService.getUsrByEmail(email);

        if(user == null) {
            User newUser = User.builder()
                    .name(oAuth2User.getAttribute("name"))
                    .email(email)
                    .build();
            user = userService.save(newUser);
        }

        String accessToken = jwtService.generateAccessToken(user);
        String refreshToken = jwtService.generateRefreshToken(user);

        Cookie cookie = new Cookie("refreshToken", refreshToken);
        cookie.setHttpOnly(true);
        cookie.setSecure("production".equals(deployEnv));
        response.addCookie(cookie);

        String frontEndUrl = "http://localhost:8080/home.html?token="+accessToken;

//        getRedirectStrategy().sendRedirect(request, response, frontEndUrl);

        response.sendRedirect(frontEndUrl);
    }

}
```

## flow
```
After successful Google login:
    ↓
Get user details
    ↓
Save user in DB if not exists
    ↓
Generate JWT tokens
    ↓
Store refresh token in cookie
    ↓
Redirect frontend with access token
```

## Class Inheritance
```
extends SimpleUrlAuthenticationSuccessHandler
```

This class already contains default success-login behavior.

You override it to customize post-login logic.

## Environment Variable
```
@Value("${deploy.env}")
private String deployEnv;
```

Reads property from:
```
deploy.env=production
```
or
```
deploy.env=development
```
Used later for secure cookies.

## Cast Authentication
```
OAuth2AuthenticationToken token =
        (OAuth2AuthenticationToken) authentication;
```

After OAuth2 login, Spring creates:

```
OAuth2AuthenticationToken
```
This contains:
- user details
- provider info
- authorities

## Internal Flow
```
Google Login Success
        ↓
OAuth2LoginAuthenticationFilter
        ↓
OAuth2AuthenticationToken created
        ↓
Passed into success handler
```

## Get OAuth User
```
DefaultOAuth2User oAuth2User =
        (DefaultOAuth2User) token.getPrincipal();
```

getPrincipal() returns logged-in user.

Spring stores Google user info inside:
```
DefaultOAuth2User
```

### Inside oAuth2User
Contains attributes from Google.

Example:
```
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "picture": "https://..."
}
```

## Get Email
```
String email = oAuth2User.getAttribute("email");
```
Extract email from Google response.
Equivalent to:
```
{
   "email": "john@gmail.com"
}
```

## Check User in DB
```
User user = userService.getUsrByEmail(email);
```
Checks:

does user already exist?

### Why Needed?
Because Google authenticates the user,
but your application still needs:

- local user record
- internal user ID
- app-specific roles
- preferences

## Create User if Not Exists
```
if(user == null)
```
New OAuth2 user.

## Create User Object
```
User newUser = User.builder()
        .name(oAuth2User.getAttribute("name"))
        .email(email)
        .build();
```
Using Lombok Builder Pattern.

Equivalent to:
```
User newUser = new User();
newUser.setName(...);
newUser.setEmail(...);
```

## Save User
```
user = userService.save(newUser);
```
Insert into database.

## Generate Access Token
```
String accessToken =
        jwtService.generateAccessToken(user);
```

## Generate Refresh Token
```
String refreshToken =
        jwtService.generateRefreshToken(user);
```

## Create Cookie
```
Cookie cookie =
        new Cookie("refreshToken", refreshToken);
```

## HttpOnly Cookie
```
cookie.setHttpOnly(true);
```

## Secure Cookie
```
cookie.setSecure("production".equals(deployEnv));
```

Development vs Production
Development
http://localhost

HTTPS usually unavailable.

So:

secure = false

Production
https://yourapp.com

Use:

secure = true

## Add Cookie to Response
```
response.addCookie(cookie);
```
Browser stores cookie.

## Frontend Redirect URL
```
String frontEndUrl =
"http://localhost:8080/home.html?token="+accessToken;
```
Redirect user to frontend.

Access token passed as query parameter.

Example:

http://localhost:8080/home.html?token=abc123

Important Note

Passing JWT in URL is usually NOT recommended in production because:

URLs may be logged
browser history stores them
security risk

Better approaches:

HttpOnly cookies
response body
secure frontend exchange

## Redirect User
response.sendRedirect(frontEndUrl);

Browser redirected to frontend.

# final complete flow
```
User clicks Google Login
        ↓
Spring redirects to Google
        ↓
Google authenticates user
        ↓
Google sends authorization code
        ↓
Spring exchanges code for token
        ↓
Fetch Google profile
        ↓
OAuth2SuccessHandler called
        ↓
Extract email
        ↓
Check user in DB
        ↓
Create user if not exists
        ↓
Generate access token
        ↓
Generate refresh token
        ↓
Store refresh token in HttpOnly cookie
        ↓
Redirect frontend with access token
```


# Very Important Security Insight

This architecture is called:

OAuth2 Login + JWT Authentication Hybrid

Meaning:

Google handles identity verification
Your backend handles session/token management

Very common in modern systems.

# Why store refresh token in HttpOnly cookie?

To protect against XSS attacks.

# What object contains Google user info?
DefaultOAuth2User

# Which filter triggers success handler?
OAuth2LoginAuthenticationFilter