# Controller Layer in Spring Boot
The Controller Layer is the entry point of a Spring Boot application.

<!-- Responsibilities:
- Handles HTTP requests
- Accepts client data
- Calls Service layer
- Returns response to client -->

- Receives HTTP requests
- Calls service methods
- Returns response

Flow:
```
Client → Controller → Service → Repository → Database
```

# Important Annotations

| Annotation        | Purpose                                           |
| ----------------- | ------------------------------------------------- |
| `@RestController` | Creates REST API controller                       |
| `@Controller`     | Used for MVC controllers returning HTML/JSP pages |
| `@RequestMapping` | Base URL mapping                                  |
| `@GetMapping`     | GET request                                       |
| `@PostMapping`    | POST request                                      |
| `@PutMapping`     | PUT request                                       |
| `@DeleteMapping`  | DELETE request                                    |
| `@PatchMapping`   | PATCH request                                     |
| `@PathVariable`   | Reads value from URL path                         |
| `@RequestParam`   | Reads query parameters                            |
| `@RequestBody`    | Converts JSON → Java Object                       |
| `@ResponseBody`   | Returns JSON directly                             |
| `@RequestHeader`  | Reads HTTP headers                                |
| `@CrossOrigin`    | Enables frontend-backend communication            |
| `@Valid`          | Validates request body                            |



# @RestController
Combination of:
```
@Controller + @ResponseBody
```

Meaning:
- Every method returns JSON/XML directly instead of a JSP/HTML page.
- Mostly used in REST APIs.

## Example:
```
@RestController
public class TestController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
}
```

Output:
```
"Hello"
```

# Difference Between @Controller and @RestController
@Controller is mainly used in traditional Spring MVC applications where the backend returns a view/page like:
- JSP
- Thymeleaf HTML page

When a method inside @Controller returns a string, Spring treats that string as a view name.

## Example:
```
@Controller
public class HomeController {

    @GetMapping("/home")
    public String home() {
        return "index";
    }
}
```

Here:
```
"index"
```
means:
```
index.jsp or index.html
```
So the browser gets an HTML page.

<br>
@RestController is used for building REST APIs.

Instead of returning HTML pages, it returns:
- JSON
- XML
- Plain text

directly in the HTTP response body.

Example:
```
@RestController
public class EmployeeController {

    @GetMapping("/employee")
    public Employee getEmployee() {
        return new Employee(1, "Rahul");
    }
}
```

Response:
```
{
  "id": 1,
  "name": "Rahul"
}
```
So:
- @Controller → returns views/pages
- @RestController → returns data(JSON)

## Important Internal Difference
@RestController is actually a combination of:
```
@Controller + @ResponseBody
```

Meaning:
- Every method automatically returns response data directly.

With @Controller, if you want JSON response, you must manually add:
```
@ResponseBody
```

Example:
```
@Controller
public class TestController {

    @ResponseBody
    @GetMapping("/hello")
    public String hello() {
        return "Hello";
    }
}
```
Without @ResponseBody, Spring will think "Hello" is a view name.


| Feature                | `@Controller`    | `@RestController`         |
| ---------------------- | ---------------- | ------------------------- |
| Used for               | MVC applications | REST APIs                 |
| Returns                | HTML/JSP pages   | JSON/XML                  |
| Needs `@ResponseBody`? | Yes              | No                        |
| Mostly used with       | Thymeleaf/JSP    | React/Angular/Mobile apps |

## Interview Answer (Short Version)

## @Controller
- @Controller is used for Spring MVC applications that return views like JSP or HTML pages. 
- With @Controller, if you want JSON response, you must manually add @ResponseBody.
 
## @RestController
- @RestController is combination of @Controller and @ResponseBody.
- @RestController is used for REST APIs and returns JSON/XML data directly. 

# @RequestMapping
Used to define:
- Base URL
- HTTP method
- Common mappings

Example
```
@RestController
@RequestMapping("/employees")
public class EmployeeController {

}
```

Now all APIs start with:
```
/employees
```

Example:
```
/employees/1
/employees/all
```

# @CrossOrigin
Used to allow frontend apps to access backend APIs.

```
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {

}
```

# Why do we use @CrossOrigin?
Because browsers block requests from different origins due to: CORS Policy

# Dynamic URLs

## A. @PathVariable
- Comes from URL path
- Used when value is mandatory.

Example:
```
@GetMapping("/employees/{id}")
public String getEmployee(@PathVariable Long id) {
    return "Employee " + id;
}
```

URL:
```
/employees/5
```

### Multiple Path Variables
```
@GetMapping("/{dept}/{id}")
public String test(
        @PathVariable String dept,
        @PathVariable Long id) {

    return dept + " " + id;
}
```

URL:
```
/employees/hr/5
```

## B. @RequestParam
- Comes from Query parameter 
- can be optional ,we use required = false for optional parameters.

Used for:
- Optional filtering
- Searching
- Pagination
- Sorting

Example:
```
@GetMapping("/employees")
public String getEmployee(@RequestParam Long id) {
    return "Employee " + id;
}
```

URL:
```
/employees?id=5
```

### Optional Request Parameter
```
@GetMapping("/employees")
public String getEmployee(
        @RequestParam(required = false) Long id) {

    return "Employee " + id;
}
```

# Difference Between @PathVariable and @RequestParam
| Feature         | `@PathVariable` | `@RequestParam`   |
| --------------- | --------------- | ----------------- |
| Comes from      | URL path        | Query parameter   |
| Mandatory?      | Usually yes     | Can be optional   |
| Example         | `/employees/5`  | `/employees?id=5` |
| Mostly used for | Unique resource | Filtering/search  |


# @RequestBody
Used to receive JSON data from client.

Example JSON:
```
{
  "name": "Rahul",
  "salary": 50000
}
```

Java:
```
@PostMapping("/employees")
public Employee createEmployee(@RequestBody Employee employee) {
    return employee;
}
```
Spring automatically converts 
```
JSON → Java Object.
```

Using:
```
Jackson Library
```

# How does Spring convert JSON to Java object?

Answer:
- Spring uses Jackson internally.
- @RequestBody triggers HttpMessageConverters.
- Jackson maps JSON fields to Java object fields.


# @RequestHeader
Used to read HTTP headers.
```
@GetMapping("/employee")
public String getEmployee(
        @RequestHeader("Authorization") String token) {

    return token;
}
```

- Common Interview Topic:

JWT tokens are usually passed in Authorization header.

# GET API — @GetMapping
Used to fetch data.

```
@GetMapping("/{id}")
public Employee getEmployee(@PathVariable Long id) {
    return employeeService.getEmployee(id);
}
```

# POST API — @PostMapping
- Used to create data.
- Usually returns: 201 CREATED

```
@PostMapping
public Employee createEmployee(@RequestBody Employee employee) {
    return employeeService.create(employee);
}
```

# PUT API — @PutMapping
Used to fully update existing data.

```
@PutMapping("/{id}")
public Employee updateEmployee(
        @PathVariable Long id,
        @RequestBody Employee employee) {

    return employeeService.update(id, employee);
}
```

# PATCH API — @PatchMapping
Used for partial updates.

```
@PatchMapping("/{id}")
public Employee updateSalary(
        @PathVariable Long id,
        @RequestParam Double salary) {

    return employeeService.updateSalary(id, salary);
}
```

# DELETE API — @DeleteMapping
Used to remove data.

```
@DeleteMapping("/{id}")
public String deleteEmployee(@PathVariable Long id) {
    employeeService.delete(id);
    return "Deleted Successfully";
}
```

# @ResponseBody
Returns data directly as JSON instead of rendering view.

```
@ResponseBody
@GetMapping("/test")
public String test() {
    return "Hello";
}
```

Already included inside:
```
@RestController
```


# ResponseEntity
ResponseEntity<T> is a class in Spring Boot used to return:
- Response body
- HTTP status code
- Headers

from a controller method.

Instead of only returning data, ResponseEntity provides full control over:
- HTTP status codes
- headers
- response body

It helps create proper REST APIs.

Example
```
@GetMapping("/{id}")
public ResponseEntity<Employee> getEmployee(
        @PathVariable Long id) {

    return ResponseEntity.ok(employeeService.get(id));
}
```

## Custom Status
```
@PostMapping
public ResponseEntity<Employee> create(
        @RequestBody Employee employee) {

    return new ResponseEntity<>(
            employee,
            HttpStatus.CREATED);
}
```

# Structure of ResponseEntity
```
ResponseEntity<BodyType>
```

Example:
```
ResponseEntity<EmployeeDTO>
```

Here:

- EmployeeDTO → response body type

# Commonly Used Methods

## 1. OK Response (200)
```
return ResponseEntity.ok(employee);
```

Equivalent to:
```
return new ResponseEntity<>(employee, HttpStatus.OK);
```

## 2. CREATED (201)
Used after successful creation.
```
@PostMapping
public ResponseEntity<EmployeeDTO> createEmployee(
        @RequestBody EmployeeDTO dto) {

    EmployeeDTO saved = service.create(dto);

    return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(saved);
}
```
Interview point:
 - 201 CREATED is best practice after POST.

## 3. NO CONTENT (204)
Used when response body is not needed.
```
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteEmployee(@PathVariable Long id) {

    service.delete(id);

    return ResponseEntity.noContent().build();
}
```

Meaning:
- request successful
- nothing to return

## 4. NOT FOUND (404)
```
return ResponseEntity
        .status(HttpStatus.NOT_FOUND)
        .body("Employee not found");
```

## 5. BAD REQUEST (400)
```
return ResponseEntity
        .badRequest()
        .body("Invalid request");
```

# Common HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | OK                    |
| 201  | Created               |
| 204  | No Content            |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 405  | Method Not Allowed    |
| 500  | Internal Server Error |


# Difference between @ResponseBody and ResponseEntity?

## @ResponseBody
- only returns body

## ResponseEntity
- returns body + status + headers

