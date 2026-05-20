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

# Key features of Spring Data JPA
1. Repository Abstraction: Provides a Repository interface with methods for common data access operations.

2. Custom Query Methods: Allows defining custom query methods by
simply declaring method names.

3. Pagination and Sorting: Offers built-in support for pagination and
sorting.

4. Query Derivation: Automatically generates queries from method
names.


# Custom Query Methods
- Spring Data JPA allows creating database queries simply by writing method names in the repository interface.

Example
```
public interface PatientRepository
        extends JpaRepository<Patient, Long> {

    List<Patient> findByName(String name);
}
```

Usage
```
List<Patient> patients =
        patientRepository.findByName("Rahul");
```

## Common Keywords
| Keyword     | Meaning       |
| ----------- | ------------- |
| And         | AND condition |
| Or          | OR condition  |
| GreaterThan | >             |
| LessThan    | <             |
| Between     | BETWEEN       |
| Like        | LIKE          |
| Containing  | contains text |
| OrderBy     | sorting       |
| IsNull      | NULL check    |


# Query Derivation
Query Derivation means Spring automatically derives (creates) SQL/JPQL queries from repository method names.

Example
```
List<Patient> findByName(String name);
```
Spring analyzes:
 - find
 - By
 - Name

and creates query automatically.

## Important Point

Spring parses method names using naming conventions.

### Example:
```
findByNameAndAge
```

breaks into:
  * find
  * By
  * Name
  * And
  * Age


# Difference Between Custom Query Method and Query Derivation
| Feature             | Meaning                                 |
| ------------------- | --------------------------------------- |
| Custom Query Method | You define repository methods           |
| Query Derivation    | Spring generates query from method name |

So query derivation is the mechanism behind custom query methods.

# Pagination and Sorting
Spring Data JPA provides built-in support for:

- Pagination → fetching data page by page (using Pageable interface)
- Sorting → ordering results (using Sort interface)

Useful when database contains large data.

## Pagination Example
```
public interface PatientRepository
        extends JpaRepository<Patient, Long> {

}
```

### Service Example
```
Page<Patient> patients =
        patientRepository.findAll(
                PageRequest.of(0, 5)
        );
```

### Meaning
```
PageRequest.of(pageNumber, pageSize)
```

### Generated SQL
```
SELECT * FROM patient
LIMIT 5 OFFSET 0;
```

### Next Page
```
PageRequest.of(1, 5)
```

SQL:
```
LIMIT 5 OFFSET 5;
```

### Accessing Data
```
patients.getContent();      // records
patients.getTotalPages();   // total pages
patients.getTotalElements();// total rows
```

## Sorting Example
### Sort by age ascending
```
List<Patient> patients =
        patientRepository.findAll(
                Sort.by("age")
        );
```

### Descending Order
```
Sort.by("age").descending()
```

### Multiple Sorting
```
Sort.by("age")
    .descending()
    .and(Sort.by("name"));
```

## Pagination + Sorting Together
```
PageRequest.of(
        0,
        5,
        Sort.by("age").descending()
);
```

# Final Quick Revision Table

| Feature                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| Repository Abstraction | Ready-made CRUD methods                 |
| Custom Query Methods   | Create queries using method names       |
| Pagination and Sorting | Fetch data efficiently                  |
| Query Derivation       | Auto-generate queries from method names |


query derivation is the mechanism behind custom query methods.