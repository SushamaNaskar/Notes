# Before using global exception handling with:
```
@RestControllerAdvice
```
- developers usually handled exceptions manually using try-catch inside every controller method.

- Without @RestControllerAdvice, we would need to write try-catch blocks in every controller method.
- Global exception handling centralizes error handling, reduces duplicate code, keeps controllers clean, and ensures consistent API responses.


# Global Response Handling & Exception Handling in Spring Boot
- In professional REST APIs, responses should follow a consistent structure.

Instead of returning different formats like:
```
{
  "name": "John"
}
```

or

```
{
  "error": "Employee not found"
}
```

we create a standard structure:
```
{
  "timeStamp": "2026-05-10T22:50:00",
  "data": {},
  "error": {}
}
```

This is achieved using:
- ApiResponse
- ApiError
- ResponseBodyAdvice
- @RestControllerAdvice
- @ExceptionHandler

# Complete Architecture

```
Client Request
      ↓
Controller
      ↓
Service
      ↓
Success OR Exception
      ↓
Global Handlers
      ↓
ApiResponse
      ↓
JSON Response
```

## SUCCESS FLOW
```
Controller returns DTO
       ↓
ResponseBodyAdvice intercepts
       ↓
Wrap inside ApiResponse
       ↓
Final JSON response
```

## ERROR FLOW
```
Client
   ↓
Controller
   ↓
Service
   ↓
Exception thrown
   ↓
@RestControllerAdvice catches exception
   ↓
ApiError created
   ↓
ApiResponse created with error
   ↓
ResponseEntity returned
   ↓
JSON error response
```

# Components Overview
| Component                | Purpose                             |
| ------------------------ | ----------------------------------- |
| `ApiResponse<T>`         | Standard response wrapper           |
| `ApiError`               | Stores error information            |
| `GlobalResponseHandler`  | Wraps successful responses          |
| `GlobalExceptionHandler` | Handles exceptions globally         |
| `ResponseBodyAdvice`     | Intercepts responses before sending |
| `@RestControllerAdvice`  | Global advice for controllers       |


# 1. ApiResponse
- ApiResponse<T> is the main wrapper for all API responses.
- It contains:
 * timestamp
 * success data
 * error details

 ```
 @Data
public class ApiResponse<T> {

    private LocalDateTime timeStamp;
    private T data;
    private ApiError error;

    public ApiResponse() {
        this.timeStamp = LocalDateTime.now();
    }

    public ApiResponse(T data) {
        this();
        this.data = data;
    }

    public ApiResponse(ApiError error) {
        this();
        this.error = error;
    }
}
```

# Understanding Generic <T>
```
public class ApiResponse<T>
```
T means:

"This wrapper can hold any type of data."

Examples:
```
ApiResponse<EmployeeDTO>
ApiResponse<List<EmployeeDTO>>
ApiResponse<String>
```

# Fields

## 1. timeStamp

Stores response creation time.

```
"timeStamp": "2026-05-10T22:55:00"
```

## 2. data

Stores successful response.

```
"data": {
   "id": 1,
   "name": "John"
}
```

## 3. error

Stores error information.

```
"error": {
   "status": "NOT_FOUND",
   "message": "Employee not found"
}
```

# Relationship Between ApiResponse and ApiError
```
ApiResponse
   ├── data
   └── error → ApiError
```
# 2. ApiError
- Stores detailed error information.

```
@Data
@Builder
public class ApiError {

    private HttpStatus status;
    private String message;
    private List<String> subErrors;
}
```

# Fields

## status
HTTP error status.

```
404 NOT_FOUND
400 BAD_REQUEST
500 INTERNAL_SERVER_ERROR
```

## message

Main error message.

```
Employee not found
```

## subErrors

Used mainly for validation errors.

```
[
  "Name cannot be blank",
  "Age must be >= 18"
]
```

# Why Use @Builder?

Instead of:

```
ApiError error = new ApiError();
error.setStatus(...);
```

we use:
```
ApiError.builder()
        .status(...)
        .message(...)
        .build();
```

# @RestControllerAdvice
- Global advice for all controllers.

```
@RestControllerAdvice
public class GlobalResponseHandler
```

## Used for:
- exception handling
- response modification
- request interception

- Combines:
```
@ControllerAdvice
@ResponseBody
```

# 3. Global Response Handler
Automatically wraps all successful responses inside ApiResponse.

```
@RestControllerAdvice
public class GlobalResponseHandler implements ResponseBodyAdvice<Object> {
        }
```

# Why use ResponseBodyAdvice?

<!-- - To globally intercept and modify all responses before sending to client.
- It ensures that every API response from your application follows the same structure automatically. -->

- ResponseBodyAdvice is a Spring feature that lets you:
 * intercept every response and
 * modify the response body before sending to client

Instead of returning:
```
{
  "name": "John"
}
```

your API will return:
```
{
  "timeStamp": "2026-05-10T21:30:00",
  "data": {
    "name": "John"
  },
  "error": null
}
```


## implements ResponseBodyAdvice<Object>
This interface has 2 methods:
```
supports()
beforeBodyWrite()
```

## 1. supports()
```
@Override
public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
    return true;
}
```

This tells Spring:

"Apply this advice to all responses."

If you return false, \
the advice will not execute.

## 2. beforeBodyWrite()
This method modifies response before sending to client.
```
@Override
public Object beforeBodyWrite(
        Object body,
        MethodParameter returnType,
        MediaType selectedContentType,
        Class<? extends HttpMessageConverter<?>> selectedConverterType,
        ServerHttpRequest request,
        ServerHttpResponse response) {

            if(body instanceof ApiResponse<?>) {
            return body;
        }

        return new ApiResponse<>(body);
        }
```


# Important Parameters
| Parameter             | Meaning                |
| --------------------- | ---------------------- |
| `body`                | Actual response body   |
| `returnType`          | Controller return type |
| `selectedContentType` | Response content type  |
| `request`             | Current request        |
| `response`            | Current response       |


## Main Logic

```
if(body instanceof ApiResponse<?>) {
    return body;
}
```
Prevents double wrapping.

## Wrapping Response
```
return new ApiResponse<>(body);
```


# Global Exception Handler
Handles exceptions globally across all controllers.

```
@RestControllerAdvice
public class GlobalExceptionHandler { }
```

# What is @ExceptionHandler?
Handles specific exceptions.

```
@ExceptionHandler(ResourceNotFoundException.class)
```

"Whenever this exception occurs, call this method."

# Resource Not Found Handler

```
@ExceptionHandler(ResourceNotFoundException.class)
public ResponseEntity<ApiResponse<?>> handleResourceNotFound(ResourceNotFoundException exception)
```

# Create ApiError
```
ApiError apiError = ApiError.builder()
        .status(HttpStatus.NOT_FOUND)
        .message(exception.getMessage())
        .build();
```