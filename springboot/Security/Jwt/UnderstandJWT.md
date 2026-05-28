# What is JWT?

- JWT (JSON Web Token) is a compact, URL-safe token used to transfer claims between two parties securely.

JWT is mainly used for:
- Authentication
- Authorization
- Secure data exchange

The token usually contains:
- User ID
- Roles
- Permissions
- Expiration time

JWT ensures:
– Integrity
- Authenticity

But NOT confidentiality (payload is readable).


# Why Use JWT?

## Advantages
1. Stateless

Server does not store session data.

### Traditional Session:
Client → Server
Server stores session in memory/database

### JWT:
- Client stores token
- Server only validates token

Why important?
- Reduces server memory usage
- Better scalability

## Scalable in Distributed Systems

JWT works well with:

- Multiple servers
- Load balancers
- Microservices

Because: \

No shared session storage required

## Cross Domain Authentication

JWT works easily across:

- Different domains
- Mobile apps
- Frontend-backend separation

## Ideal for Microservices

- Each microservice can validate the JWT independently.

No need to ask:
```
"Is user logged in?"
```

## Highly Secure

JWT uses:

- Digital signatures
- Secret keys / private keys

This prevents token tampering.

# JWT Structure
A JWT has 3 parts:

```
HEADER.PAYLOAD.SIGNATURE
```

Example
```
eyJhbGciOiJIUzI1NiJ9.
eyJzdWIiOiI0NSIsInJvbGVzIjpbIlJJREVSIl0...
pIEiLEboraXMhJrm8ckRLpoYSWC6n9mY3XNlCpLFE4I
```

## A. Header
The header contains metadata about the token.

Contains:

- Algorithm : Algorithm used for signing (creating the last part known as signature)
- Token type

Example:

{
  "alg": "HS256",
  "typ": "JWT"
}

Meaning:
```
HS256 = HMAC + SHA-256 
```
This algorithm is used to generate the signature.

## B. Payload (Claims)

Payload contains claims (actual user data).

Example:
```
{
  "sub": "45",
  "roles": ["RIDER"],
  "iat": 1721567519,
  "exp": 1721581919
}
```

Important Claims:

| Claim | Meaning                   |
| ----- | ------------------------- |
| sub   | Subject (usually user ID) |
| iat   | Issued At                 |
| exp   | Expiration Time           |
| roles | User roles                |


## C. Signature

Generated using:
```
Header + Payload + Secret Key
```

Purpose:

- Verify token authenticity
- Detect tampering

If payload changes:
```
Signature becomes invalid
```

# JWT Creation Flow

## Base64URL Encoding
The diagram shows:
```
Header → base64url → Encoded Header
Payload → base64url → Encoded Payload
```
This means:

- JSON is converted into encoded string format
- Makes token URL-safe

### Important Interview Point
Encoding ≠ Encryption

- Base64 encoding is NOT secure encryption.

Anyone can decode JWT payload.

So NEVER store:
- Passwords
- Credit cards
- Sensitive secrets

inside JWT payload.

## Concatenation Using "."
The encoded header and payload are joined together using a dot.

```
encodedHeader + "." + encodedPayload
```

Example:
```
abc.xyz
```
This combined value becomes the input for signature generation.

## Secret Key (Orange Box)

The server has a secret key.

Example:
```
mySecretKey123
```
This key:
- Exists only on server
- Is NEVER shared with client

## Signature Generation (HMAC-SHA256)
This is the most important security step.

```
HMAC-SHA256(
    encodedHeader + "." + encodedPayload,
    secretKey
)
```
Meaning:

The server:

- Takes encoded header
- Takes encoded payload
- Combines them
- Uses secret key
- Runs HS256 algorithm

Result:
```
Digital Signature
```

## Signature Encoding

The generated signature is again Base64URL encoded.

This becomes:
```
Encoded Signature
```

## Final JWT Token Creation

Now all 3 parts are joined:
```
encodedHeader
+
"."
+
encodedPayload
+
"."
+
encodedSignature
```

Final structure:

```
header.payload.signature
```

## Visual Understanding
```
HEADER
   ↓ encode

PAYLOAD
   ↓ encode

header.payload
   ↓ sign with secret key

SIGNATURE
   ↓

header.payload.signature
```


# JWT Verification Flow
## 1. Token Comes from Client
Client sends token:

```
Authorization: Bearer <JWT>
```

Example token in diagram:
```
eyJhbGciOiJIUzI1NiJ9.
eyJzdWIiOiI0NSIsInJvbGVzIjpbIlJJREVSIl0...
pIEiLEboraXMhJrm8ckRLpoYSWC6n9mY3XNlCpLFE4I
```

## 2. Split Using "."

The server splits token using the dot (.).

```
header.payload.signature
```

## 3. Encoded Header + Payload

The server takes:
```
encodedHeader + "." + encodedPayload
```
Example:
```
abc.xyz
```
This becomes the input for verification.

## 4.Secret Key

The server uses the SAME secret key used during token creation.

Important:
```
JWT verification only works if same secret key is used.
```

## 5. Recreate Signature

The server runs:

```
HMAC-SHA256(
   encodedHeader + "." + encodedPayload,
   secretKey
)
```

This generates a NEW signature.

The diagram calls this:

Encoded Control Signature

Meaning:
```
"Freshly generated signature for comparison"
```

## 6. Compare Signatures

Now server compares:
| Incoming Signature | Recreated Signature |
| ------------------ | ------------------- |
| From token         | Generated now       |

If Equal
```
TOKEN IS VALID
```

Meaning:

- Payload not modified
- Token created using correct secret key
- Token trusted

If NOT Equal
```
TOKEN IS INVALID
```

Meaning:
- Someone modified payload/header
- Wrong secret key used
- Fake token

```
RECEIVE TOKEN →
SPLIT TOKEN →
RECREATE SIGNATURE →
COMPARE SIGNATURES →
VALID or INVALID
```

# Most Important Concept in JWT
Server NEVER trusts payload directly.

It trusts the payload ONLY IF:

- Signature matches

## Why Tampering Fails

Suppose attacker changes:

```
Original payload:

{
  "role": "USER"
}
```

to:

```
{
  "role": "ADMIN"
}
```
Problem:
- Payload changed
- But attacker doesn't know secret key
- So attacker cannot generate correct signature

Result:
```
Signature mismatch → INVALID TOKEN
```