# MVC Architecture (Model View Controller)

MVC is a design pattern used to organize application code into 3 separate parts:

- Model → Handles data and business logic (Database interaction/ Persistence Layer)
- View → Handles UI / response shown to user (JSON response)
- Controller → Handles incoming requests and connects Model + View

2. Presentation Layer : Contains: Controller \
3. Persistence Layer : Contains:  Repository \
4. Service Layer : Contains: Service classes

# MVC Flow
```
Client Request
      ↓
DispatcherServlet
      ↓
Controller
      ↓
Service
      ↓
Repository
      ↓
Database
      ↓
Repository
      ↓
Service
      ↓
Controller
      ↓
JSON Response
```

# DispatcherServlet?
- It is called the:
Front Controller of Spring MVC

- Responsibilities:

 * Receives all incoming requests
 * Finds correct controller
 * Manages request flow
 * Returns response to client

# Model

The Model contains:

- Business logic
- Data handling
- Database interaction

It is responsible for:

- Fetching data
- Saving data
- Updating data
- Deleting data

In Spring Boot:

- Entity classes
- Repository classes
- Service classes

usually belong to Model layer.

## Example
```
@Entity
public class Employee {

    @Id
    private Long id;

    private String name;
}
```

Repository:

```
@Repository
public interface EmployeeRepository 
       extends JpaRepository<Employee, Long> {
}
```

Service:
```
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public List<Employee> getEmployees() {
        return repository.findAll();
    }
}
```

# 2. View

The View is what the user sees.

## Examples:
- HTML page
- JSON response
- JSP
- Thymeleaf template
- React frontend response

In REST APIs:
- JSON itself acts as the View.

## Example
```
{
   "id": 1,
   "name": "Rahul"
}
```

# 3. Controller

The Controller:

- Receives HTTP requests
- Calls service methods
- Returns response

It acts like a middleman between user and business logic.

## Example
```
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService service;

    @GetMapping
    public List<Employee> getEmployees() {
        return service.getEmployees();
    }
}
```

# MVC in Spring Boot REST API
In modern Spring Boot backend projects:
```
Frontend (React/Angular)
        ↓
Controller
        ↓
Service
        ↓
Repository
        ↓
Database
```

# Typical Spring Boot Project Structure
src/main/java
    ├── controller
    ├── service
    ├── repository
    ├── entity
    └── dto

# MVC Layers in Spring Boot

| Layer      | Responsibility                                               | Common Annotations                                                                 |
| ---------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| Controller | Handles requests                                             | `@Controller`, `@RestController`                                                   |
| Service    | Business logic                                               | `@Service`                                                                         |
| Repository | Database access                                              | `@Repository`                                                                      |
| DTO        | Transfers data between layers / API request-response objects | No specific annotation (optional: validation annotations like `@NotNull`, `@Size`) |
| Entity     | Database table mapping / persistent data objects             | `@Entity`                                                                          |


# Relationship Between Layers
| Layer      | Responsibility         |
| ---------- | ---------------------- |
| Entity     | Database table mapping |
| Repository | Database access        |
| Service    | Business logic         |
| Controller | Handle API requests    |


# Complete Request Flow in Spring Boot

Suppose user hits:
```
GET /employees
```

## Step 1 → Request reaches DispatcherServlet
Spring Boot first sends every HTTP request to the:

```
DispatcherServlet
```

## Step 2 → Request reaches Controller
```
@GetMapping
public List<Employee> getEmployees()
```
Controller receives request.

## Step 3 → Controller calls Service
```
service.getEmployees();
```

## Step 4 → Service calls Repository
```
repository.findAll();
```

## Step 5 → Repository talks to Database
SQL runs internally:

```
SELECT * FROM employee;
```

## Step 6 → Data returns back
```
Database
   ↓
Repository
   ↓
Service
   ↓
Controller
```

## Step 7 → Controller returns JSON response
```
[
  {
    "id":1,
    "name":"Rahul"
  }
]
```

# Why MVC is Important

- Separation of concerns
- Clean architecture
- Reusable code
- Easier teamwork