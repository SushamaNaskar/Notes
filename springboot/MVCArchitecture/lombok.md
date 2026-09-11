# lombok:
 A library that reduces "boilerplate" code. It automatically generates things like getters, setters, and constructors for you.
 - Lombok generates them automatically at compile time using annotations.

# Lombok in Spring Boot
Very commonly used in:

- DTOs
- Entities
- Services
- Controllers
- Configuration classes

 # Why We Use Lombok
 ## Without Lombok:
 ```
 public class Employee {

    private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

## With Lombok:
```
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Employee {
    private Long id;
    private String name;
}
```

# Add Lombok Dependency
Maven
```
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

# Important Lombok Annotations
- @Getter — Generates getter methods.
- @Setter — Generates setter methods.
- @NoArgsConstructor — Generates an empty constructor.
- @AllArgsConstructor — Generates a constructor with all fields.
- @RequiredArgsConstructor — Generates a constructor for final and @NonNull fields.
- @Data — Combines:
      * @Getter
      * @Setter
      * @ToString
      * @EqualsAndHashCode
      * @RequiredArgsConstructor
- @Builder — Generates the Builder pattern for readable and flexible object creation.
- @ToString — Generates toString() method.
- @EqualsAndHashCode — Generates equals() and hashCode().
- @Slf4j — Automatically creates an SLF4J logger --> named log.


# Why is @RequiredArgsConstructor preferred in Spring Boot?
Because it supports constructor injection with final fields, making dependencies immutable and easier to test.




## 1. @Getter
Generates getter methods.
```
@Getter
public class Employee {
    private String name;
}
```

Generated:
```
public String getName() {
    return name;
}
```

## 2. @Setter
Generates setter methods.
```
@Setter
public class Employee {
    private String name;
}
```

Generated:
```
public void setName(String name) {
    this.name = name;
}
```

## @ToString
Generates toString() method.

```
@ToString
public class Employee {
    private String name;
}
```

Output:
```
Employee(name=Rahul)

```

## 4. @EqualsAndHashCode

Generates:
- equals()
- hashCode()

Used when comparing objects.

```
@EqualsAndHashCode
public class Employee {
    private Long id;
}
```

## 5. @NoArgsConstructor
Creates empty constructor.

```
@NoArgsConstructor
public class Employee {
}
```

Generated:
```
public Employee() {
}

```
Important for:
- JPA/Hibernate
- Jackson JSON conversion

## 6. @AllArgsConstructor
Creates constructor with all fields.

```
@AllArgsConstructor
public class Employee {
    private Long id;
    private String name;
}
```

Generated:
```
public Employee(Long id, String name) {
    this.id = id;
    this.name = name;
}
```

## 7. @RequiredArgsConstructor
Creates constructor for:

- final fields
- fields marked @NonNull

```
@RequiredArgsConstructor
public class Employee {

    private final EmployeeService service;
}
```

Generated:
```
public Employee(EmployeeService service) {
    this.service = service;
}
```




## 8. @Data
- Most popular Lombok annotation.

Includes:

- @Getter
- @Setter
- @ToString
- @EqualsAndHashCode
- @RequiredArgsConstructor

```
@Data
public class EmployeeDTO {
    private Long id;
    private String name;
}
```

## 9. @Builder
- It implements the Builder Design Pattern automatically.

- Builder pattern helps create objects in a:
 * readable
 * flexible
 * safe

way.

- builder() is a static method that starts the builder process.
- It returns a Builder object.

### build()

build() creates the final actual object.

## Without builder:
```
Employee emp = new Employee(
        1L,
        "Rahul",
        "IT",
        50000.0
);
```
## Problems Here

### 1. Hard to Read

What does 50000.0 mean?

Salary? Bonus? Age?

### 2. Constructor Order Matters
```
new Employee(1L, "IT", "Rahul", 50000.0);
```
Wrong order → bugs.

### 3. Too Many Parameters
Large constructors become messy.

## With builder:
```
Employee emp = Employee.builder()
        .id(1L)
        .name("Rahul")
        .build();
```

Example:
```
@Builder
@Getter
public class Employee {
    private Long id;
    private String name;
}
```
- Useful when class has many fields.
- No need to pass all values / support optional parameters

## 10. @Slf4j
- Creates logger automatically.
```
@Slf4j
@Service
public class EmployeeService {

    public void test() {
        log.info("Service started");
    }
}
```

Instead of:
```
private static final Logger logger =
    LoggerFactory.getLogger(EmployeeService.class);
```


