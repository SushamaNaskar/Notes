# ORM mapping
- ORM mapping stands for Object Relational Mapping.
- It is a technique used to connect:
 * Java Objects ↔ Database Tables

In Spring Boot, ORM is mainly achieved using:
- JPA (Specification)
- Hibernate (Implementation)

# Simple Real-Life Understanding
Suppose you have a database table: employees

```
| id | name  | salary |
| -- | ----- | ------ |
| 1  | Rahul | 50000  |

```

In Java, we create a class:

```
public class Employee {
    private Long id;
    private String name;
    private Double salary;
}
```

ORM maps:

| Java Object Field | Database Column |
| ----------------- | --------------- |
| `id`              | `id`            |
| `name`            | `name`          |
| `salary`          | `salary`        |

# Why ORM is Used
## Without ORM:
- We write lots of SQL manually.
- Need to manually convert database rows into Java objects.

## With ORM:
- Less boilerplate code
- Easier database handling
- Better readability
- Faster development

# Example of ORM Mapping using Hibernate/JPA
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double salary;
}

# Important Annotations
| Annotation        | Purpose                        |
| ----------------- | ------------------------------ |
| `@Entity`         | Marks class as database entity |
| `@Table`          | Maps class to table            |
| `@Id`             | Primary key                    |
| `@GeneratedValue` | Auto-generates ID              |

# JPA and Hibernate

Usually:

JPA = Specification (rules/interfaces)
Hibernate = ORM implementation
Spring Data JPA = Simplifies database operations



- JPA = Interface
- Hibernate = Implementation class

# JPA (Java Persistence API)
- JPA is a specification/interface for ORM in Java.
- It defines:
   * Rules
   * Interfaces
   * Annotations
for database operations.

## Examples:
```
@Entity
@Id
@OneToMany
```
These annotations come from JPA.

<!-- JPA (Java Persistence API) is a specification that defines standards and rules for Object Relational Mapping(ORM) in Java. It provides interfaces and annotations for database operations, but it does not contain the actual implementation. -->

# Hibernate
- Hibernate is an ORM framework that implements the JPA specification. 
- It provides the actual logic to map Java objects to database tables and perform database operations internally.

## Hibernate handles:
- SQL generation
- Object mapping
- CRUD operations
- Caching
- Lazy loading
- Query optimization
- Manages entity lifecycle


# “Difference between JPA and Hibernate?”
- JPA is a specification that defines how ORM should work in Java applications, while Hibernate is one of the implementations of JPA.

- Hibernate provides the actual ORM functionality and additional features like caching, lazy loading, and query optimization.


- *In Spring Boot projects, developers usually use JPA through Spring Data JPA, and Hibernate works as the default implementation underneath.*

# Spring Data JPA
- Spring Data JPA simplifies database operations by 
1. providing repository interfaces 
2. and generating CRUD methods and queries automatically on top of JPA and Hibernat

<!-- - Spring Data JPA simplifies Hibernate + JPA usage. -->

# Use Case
- Instead of writing implementation classes manually, we simply create interfaces.
- or Instead of writing DAO implementation manually, we simply create interfaces.

## Example:
```
public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {
}
```

Spring automatically provides:
- save()
- findById()
- findAll()
- delete()

## Problem It Solves

Without Spring Data JPA:
- Need manual DAO classes
- Need EntityManager code
- More configuration

## Advantages of Spring Data JPA
- Ready-made CRUD methods
- Automatic query generation
- Repository pattern support
- Less code
- Cleaner architecture


# Spring Data JPA Flow
```
Controller
   ↓
Service
   ↓
Repository (Spring Data JPA)
   ↓
Hibernate
   ↓
JDBC
   ↓
Database
```

# Easy Understanding of Technologies

```
JPA
↓
Defines ORM rules/specification

Hibernate
↓
Implements JPA and performs ORM

Spring Data JPA
↓
Makes Hibernate easier using repositories
```


# JDBC (Java Database Connectivity)
JDBC is a Java API used to connect Java applications with relational databases.

It allows Java programs to:
- Connect to database
- Execute SQL queries
- Fetch results

Examples of supported databases:
- MySQL
- PostgreSQL
- Oracle

## Use Case
Used when we want direct database communication using SQL.

## Important Interview Point

Hibernate internally uses JDBC to execute SQL queries.

```
Spring Data JPA → Hibernate → JDBC → Database
```


# JPQL (Java Persistence Query Language)
JPQL is an object-oriented query language used with JPA.

It is similar to SQL but works with:
- Entity names
- Java object fields

instead of table names and column names.

Difference:
- SQL works on tables and columns.
- JPQL works on Entity classes and fields.

SQL Example
```
SELECT * FROM employees;
```

JPQL Example
```
@Query("SELECT e FROM Employee e")
List<Employee> getEmployees();
```

Here:
- Employee = Entity class
- e = Object

NOT table names.

# step by step flow

# 1. Controller receives request
```
GET /employees
```

# 2. Service calls Repository
```
employeeRepository.findAll();
```

# 3. Spring Data JPA handles repository logic
It creates implementation automatically.

# 4. Hibernate executes ORM logic
- Converts objects ↔ tables
- Generates SQL

# 5. Hibernate uses JDBC
JDBC sends SQL to database.

# 6. Database returns result
```
Database → JDBC → Hibernate → Spring Data JPA → Service → Controller
```

# DAO (Data Access Object)

DAO is a design pattern used to separate database logic from business logic.

DAO layer handles CRUD operations.
- Create
- Read
- Update
- Delete (CRUD)

## Traditional DAO Example
```
public class EmployeeDAO {

   public void save(Employee emp) {
      // database logic
   }
}
```

Example methods:
```
saveEmployee()
getEmployee()
deleteEmployee()
```
In modern Spring Boot projects, Repository interfaces often replace traditional DAO classes.