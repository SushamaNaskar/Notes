# Authentication Types
There are mainly 2 ways a server remembers a logged-in user:

- Stateful Authentication (Session-Based Authentication)
- Stateless Authentication (Token-Based Authentication / JWT)

# 1. Stateful Authentication (Session-Based)
- The server stores login information about the user.
- This is stateful because server keeps state/data.

## After login:
- Server creates a session
- Server stores session data in memory/database
- Server gives browser a Session ID
- Browser sends Session ID in every request

## The server checks:
"Do I have this session stored?"

If yes → user is authenticated.


## Advantages of Stateful Authentication
- Easy Logout:
 * Server deletes session
 * User immediately logged out.

- Easy to Invalidate:
  Admin can:
   * Expire sessions
   * Force logout users

- More Secure for Browsers:
  Works well with:
    * CSRF protection
    * Cookies
    * Server-side control

## Disadvantages

### Server Must Store Sessions
Memory/database usage increases.

```
1 million users = 1 million sessions
```

### Harder to Scale
In distributed systems:

```
Server1 has session
Server2 doesn't
```
Need:
 - Redis
 - Shared session storage
 - Sticky sessions


# 2. Stateless Authentication (JWT / Token-Based)
Server stores nothing about logged-in user.

Instead:
- Server creates a token (JWT)
- Client stores token
- Client sends token every request
- Token itself contains user data

Server only verifies token.

## Server checks:
- Signature valid?
- Expired?
- Tampered?

If valid → authenticated.

No session lookup needed.

## Advantages of Stateless Authentication

### Highly Scalable
- Any server can verify token.
- No shared session needed.
Perfect for:
  - Microservices
  - Mobile apps
  - REST API

### No Session Storage
Server memory usage reduced.

### Faster Distributed Systems
No Redis/session synchronization required.

## Disadvantages

### Logout is Harder
- Server doesn't store token.
- So how to invalidate immediately?
Need:
  * Blacklist
  * Short expiration
  * Refresh tokens

### Token Theft Risk
If attacker steals JWT:

```
Attacker can use it until expiration
```

### Token Size Larger
JWT contains data.

Bigger than simple Session ID.


# Core Difference
| Feature                    | Stateful (Session)   | Stateless (JWT)          |
| -------------------------- | -------------------- | ------------------------ |
| Server stores login state? | Yes                  | No                       |
| Uses Session?              | Yes                  | No                       |
| Uses JWT?                  | Usually No           | Yes                      |
| Uses Cookies?              | Yes                  | Sometimes                |
| Scalable?                  | Less                 | More                     |
| Logout Easy?               | Yes                  | Harder                   |
| Best for                   | Traditional web apps | REST APIs, microservices |
| Server memory needed?      | Yes                  | No                       |
