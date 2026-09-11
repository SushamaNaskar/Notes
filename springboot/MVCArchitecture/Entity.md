# Entity Layer
- An Entity represents a table in the database.
- It is basically a Java class whose objects map to database rows.

<!-- An Entity is a Java class that maps to a database table. Its fields map to columns, and its objects represent rows. -->

```
@Entity
@Table(name = "employees")
public class EmployeeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;
}
```

# Important Annotations
```
| Annotation        | Purpose                        |
| ----------------- | ------------------------------ |
| `@Entity`         | Marks class as database entity |
| `@Table`          | Specifies table name           |
| `@Id`             | Marks Primary key              |
| `@GeneratedValue` | Auto-generates ID              |
| `@Column`         | Custom column settings         |

| Annotation        | Purpose               |
| ----------------- | --------------------- |
| `@Entity`         | Marks entity class    |
| `@Table`          | Maps table            |
| `@Id`             | Marks Primary key     |
| `@Column`         | Maps column           |
| `@GeneratedValue` | Auto ID generation    |
| `@OneToOne`       | One-to-one relation   |
| `@OneToMany`      | One-to-many relation  |
| `@ManyToOne`      | Many-to-one relation  |
| `@ManyToMany`     | Many-to-many relation |
| `@JoinColumn`     | Foreign key column    |


```

# Example with Column Mapping
```
@Column(name = "employee_name")
private String name;
```

Maps:
```
name
```

to DB column:
```
employee_name
```

# What Happens Internally

Spring Boot + JPA/Hibernate:

- Reads entity class
- Creates mapping with DB table
- Converts Java objects ↔ database rows

```
EmployeeEntity emp = new EmployeeEntity();
emp.setName("Rahul");
```

Hibernate converts this into SQL:
```
INSERT INTO employees (name) VALUES ('Rahul');
```

# Why We Use Entity
<!-- - Represents database data -->
- Helps ORM mapping
- Avoids manual SQL handling
- Converts objects to rows automatically

