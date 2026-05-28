# Cross-Site Request Forgery (CSRF)
CSRF is an attack where a malicious website tricks a logged-in user into sending unwanted requests to another trusted website.

## How it works
- User is already logged into a website
- Attacker tricks the user into clicking a malicious link or button
- Browser automatically sends the request using saved session cookies
- Website thinks the request is coming from the real user

## Example
if a banking site doesn't protect against CSRF, an attacker could trick a logged-in user into making a bank transfer without their knowledge.

## Prevention
- Use CSRF tokens
- Use SameSite cookies
- Verify important requests
- Use stateless authentication with JWT tokens instead of session-based authentication


# Cross-Site Scripting (XSS)
XSS is an attack where an attacker injects malicious JavaScript code into a website that is later executed in other users’ browsers.

## How it works
- Attacker adds harmful JavaScript code into a website
- Website stores or displays that code
- Other users open the affected page
- The malicious script runs in their browser
- The script may steal cookies, hijack sessions, or modify webpage content

## Example
An attacker stores this script in a comment section:

```
<script>alert('XSS');</script>
```
When another user opens the page, the script executes in their browser.

## Prevention

### 1. Input Validation
Validate and sanitize all user inputs before storing them.

- Validate user input
- Remove dangerous tags/scripts
- Sanitize data before displaying

### 2. Output Encoding
Encode output data so browsers treat it as normal text instead of executable code.

Example in Spring:
```
HtmlUtils.htmlEscape(userInput);
```

This converts dangerous characters into safe HTML entities.

### 3. Additional Protection
- Use Content Security Policy (CSP)
- Avoid rendering raw HTML directly
- Use modern frontend frameworks that escape HTML automatically

# SQL Injection
SQL Injection is an attack where an attacker inserts malicious SQL code into application input fields to manipulate database queries.

## How it works
- Attacker enters malicious SQL code into an input field
- Application directly adds that input into an SQL query
- Database executes the modified query
- Attacker may access, modify, or delete data

## Example
Normal Query

```
SELECT * FROM users WHERE username = 'input';
```

Attacker Input
```
' OR '1'='1
```

Final Query Executed
```
SELECT * FROM users WHERE username = '' OR '1'='1';
```
Since '1'='1' is always true, the query may return all users and bypass authentication.

## Prevention
- Use prepared statements and parameterized queries.
- Employ ORM frameworks that abstract direct SQL queries.
- Validate and sanitize inputs.
- Employ ORM frameworks that abstract direct SQL queries.