# Entity Relationships
JPA supports relationships between entities just like relational databases.

<!-- # What is EntityManager?
- EntityManager is the main JPA interface used to:
 * Save entities
 * Update entities
 * Delete entities
 * Fetch entities

It acts like a bridge between:
- Java Application
- Database -->

# Main Relationship Types
| Relationship | Meaning                         |
| ------------ | ------------------------------- |
| One-to-One   | One record linked to one record |
| One-to-Many  | One record linked to many       |
| Many-to-One  | Many records linked to one      |
| Many-to-Many | Many linked to many             |

# A. One-to-One
- One Person has one Passport.

## Passport
```
@Entity
public class Passport {

    @Id
    @GeneratedValue
    private Long id;

    private String passportNumber;
}
```

## Person
```
@Entity
public class Person {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToOne
    private Passport passport;
}
```

## Database Structure
```
Person Table
------------
id | name | passport_id

Passport Table
---------------
id | passport_number
```


# B. One-to-Many
- One Department has many Employees.

## Department
```
@Entity
public class Department {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany(mappedBy = "department")
    private List<Employee> employees;
}
```

## Employee
```
@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToOne
    private Department department;
}
```

## Relationship Meaning
```
One Department
      ↓
Many Employees
```

# C. Many-to-One
- Many employees belong to one department.
```
@ManyToOne
private Department department;
```

# D. Many-to-Many
Students can enroll in many Courses.
Courses can have many Students.

## Student
```
@Entity
public class Student {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @ManyToMany
    private List<Course> courses;
}
```

## Course
```
@Entity
public class Course {

    @Id
    @GeneratedValue
    private Long id;

    private String title;
}
```
## Join Table Created
```
student_course
---------------
student_id
course_id
```

# Common Relationship Annotations
| Annotation    | Meaning             |
| ------------- | ------------------- |
| `@OneToOne`   | One ↔ One           |
| `@OneToMany`  | One ↔ Many          |
| `@ManyToOne`  | Many ↔ One          |
| `@ManyToMany` | Many ↔ Many         |
| `@JoinColumn` | Foreign key column  |
| `mappedBy`    | Defines owning side |


# Relationship Owning Side and Inverse Side
- When relationships exist between entities, one side controls the relationship.


# Owning Side
- The side that contains: @JoinColumn

Why?
- Because it controls the foreign key.


# Inverse Side
- The side using: mappedBy

## Important Rule
Only Owning Side Updates Relationship

# Cascading

Operations performed on parent entity automatically apply to child entities.

```
cascade = CascadeType.ALL
```

## Why Needed?

Without Cascade:

- Need to save child manually

## With Cascade:

- Parent automatically saves child

## Cascade Types
| Cascade Type | Meaning                    |
| ------------ | -------------------------- |
| `PERSIST`    | Save child automatically   |
| `MERGE`      | Update child automatically |
| `REMOVE`     | Delete child automatically |
| `ALL`        | Apply all operations       |
| `DETACH`     | Detach child               |
| `REFRESH`    | Refresh child              |


# orphanRemoval in JPA/Hibernate
```
orphanRemoval = true means:
```
If a child object is removed from the parent collection, Hibernate automatically deletes that child record from the database.

## Simple Real-Life Example
```
Department → Employees
```

Suppose:
 - Department has 3 employees
 - You remove 1 employee from the list

## With: 
```
 orphanRemoval = true
```
Hibernate automatically deletes that employee from DB.

## Without orphanRemoval

If:
```
orphanRemoval = false
```

Then:
- Employee removed from collection
- BUT row may still exist in DB

## Important Interview Point
orphanRemoval works mainly with:

- @OneToMany
- @OneToOne

# orphanRemoval vs Cascade REMOVE

## Cascade REMOVE
Meaning

When parent is deleted:

Child also deleted

## orphanRemoval
Meaning

When child removed from parent collection:

Child deleted automatically

## Difference Table
| Feature                | Purpose                                     |
| ---------------------- | ------------------------------------------- |
| `CascadeType.REMOVE`   | Delete children when parent deleted         |
| `orphanRemoval = true` | Delete child when removed from relationship |


# Easy Memory Trick
```
Parent deleted → Cascade REMOVE

Child removed from parent → orphanRemoval
```