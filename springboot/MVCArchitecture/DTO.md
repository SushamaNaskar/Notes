# DTO
- A DTO is a simple Java class used to transfer data between layers of an application, especially between:
- Client ↔ Controller
- Controller ↔ Service
- Service ↔ External APIs

It usually contains:
- fields
- getters/setters
- constructors

but no business logic.

## Real Interview Answer
- DTO stands for Data Transfer Object.
- It is used to transfer data between layers of application, especially between client and server.
- DTO 
  * hide sensitive data
  * improves security, 
  * supports validation, and 
  * keeps API layer separate from database entities - Avoid exposing database structure
  * Send Only Required Data(Customize API response).

# Why Do We Use DTO?
Suppose your database entity is:

```
@Entity
public class EmployeeEntity {

    @Id
    private Long id;

    private String name;
    private String email;
    private double salary;
    private String password;
}
```

If you directly return this entity from API:
```
return employeeEntity;
```

then client may also receive:
```
{
  "id": 1,
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "salary": 50000,
  "password": "12345"
}
```

This is bad because:

- password should not be exposed
- salary may be confidential
- entity structure should not be directly exposed

So we create a DTO.

## Example DTO
```
public class EmployeeDTO {

    private String name;
    private String email;

    // getters and setters
}
```

Now API returns:
```
{
  "name": "Rahul",
  "email": "rahul@gmail.com"
}
```
Much safer and cleaner.

# Main Reasons to Use DTO

## 1. Security -> Hide sensitive data

Example:
- password
- salary
- bank details

## 2. Separate API Layer from Database Layer

Entity = database structure \
DTO = API structure

If database changes, API may still remain same.

## 3. Send Only Required Data

- Improves performance.
- Instead of sending huge entity object, send only needed fields.

## 4. Supports Validation
DTO is commonly used with validation annotations.

Example:
- @NotNull
- @Email
- @Size

## 5. Maintain Cleaner Architecture
Helps maintain:
- loose coupling
- layered architecture
- clean code


# Why use DTO instead of Entity?

DTO helps:
- Hide sensitive data
- Avoid exposing database structure
- Customize API response
- Improve security

# Difference between Entity and DTO

| Entity              | DTO                               |
| ------------------- | --------------------------------- |
| Maps database table | Used for API communication        |
| Contains DB fields  | Contains required response fields |
| Managed by JPA      | Simple Java object                |


# DTO Validation
Spring Boot supports validation using:
```
spring-boot-starter-validation
```

# DTO Validation Example
```
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class EmployeeDTO {

    @NotBlank(message = "Name cannot be empty")
    private String name;

    @Email(message = "Invalid email format")
    private String email;

    @Size(min = 5, message = "Password must be at least 5 characters")
    private String password;

    // getters and setters
}

```

# Important Validation Annotations
| Annotation  | Meaning                 |
| ----------- | ----------------------- |
| `@NotNull`  | Cannot be null          |
| `@NotBlank` | Cannot be null or empty |
| `@Size`     | Length validation       |
| `@Email`    | Valid email             |
| `@Min`      | Minimum value           |
| `@Max`      | Maximum value           |
| `@Pattern`  | Regex validation        |


# DTO with Controller

Controller Example
```
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @PostMapping
    public String createEmployee( @Valid @RequestBody EmployeeDTO employeeDTO) {

        return "Employee Created";
    }
}
```

# What Does @Valid Do?
"Validate this DTO before entering controller method."
- automatically validate request body before controller logic executes.

If validation fails:

- method will not execute
- Spring automatically throws validation error

# Example Request

## Valid Request
```
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "password": "12345"
}
```
Works successfully.

## Invalid Request
```
{
  "name": "",
  "email": "abc",
  "password": "12"
}
```

Spring returns:
```
{
  "timestamp": "...",
  "status": 400,
  "errors": [
    "Name cannot be empty",
    "Invalid email format",
    "Password must be at least 5 characters"
  ]
}
```