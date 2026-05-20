# Repository Layer
Repository is responsible for database operations.

It communicates directly with the database.
```
@Repository
public interface EmployeeRepository
        extends JpaRepository<EmployeeEntity, Long> {
}
```

# What JpaRepository Gives Automatically
Without writing SQL, you get:
| Method         | Purpose         |
| -------------- | --------------- |
| `findAll()`    | Get all records |
| `findById()`   | Get by ID       |
| `save()`       | Insert/update   |
| `deleteById()` | Delete          |
| `count()`      | Count records   |

# Internal Flow
When you call:

```
repository.findAll();
```

Spring Data JPA internally creates SQL like:

```
SELECT * FROM employees;
```