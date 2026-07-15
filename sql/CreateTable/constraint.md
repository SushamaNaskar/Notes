# constraint
A constraint is a rule applied to a column or table that restricts what data can be stored.

Think of it this way:

Data Type → What kind of data can be stored?
Constraint → What rules must that data follow?

```
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary DECIMAL(10,2) CHECK (salary > 0)
);
```

| Column | Data Type     | Constraint  |
| ------ | ------------- | ----------- |
| emp_id | INT           | PRIMARY KEY |
| name   | VARCHAR(100)  | NOT NULL    |
| salary | DECIMAL(10,2) | CHECK       |

# Common constraints:
PRIMARY KEY
FOREIGN KEY
NOT NULL
UNIQUE
CHECK
DEFAULT


# 1. PRIMARY KEY

Uniquely identifies each row.

```
emp_id INT PRIMARY KEY
```

# 2. NOT NULL

Column cannot contain NULL values.

```
name VARCHAR(100) NOT NULL
```

# 3. UNIQUE

Prevents duplicate values.

```
email VARCHAR(100) UNIQUE
```

# CHECK
Ensures a condition is true.

```
salary DECIMAL(10,2)
CHECK (salary > 0)
```

# 5. DEFAULT

Assigns a value if none is provided.
```
status VARCHAR(20)
DEFAULT 'ACTIVE'
```

Insert:
```
INSERT INTO employees(name)
VALUES ('John');
```

result:
| name | status |
| ---- | ------ |
| John | ACTIVE |


# 6. FOREIGN KEY

Ensures a value exists in another table.
```
dept_id INT,
FOREIGN KEY (dept_id)
REFERENCES departments(dept_id)
```

Departments
| dept_id | dept_name |
| ------- | --------- |
| 10      | HR        |
| 20      | IT        |

Valid:
```
dept_id = 10
```

Invalid:
```
dept_id = 99
```

because department 99 doesn't exist.

# Column-Level vs Table-Level Constraints
## Column-Level

```
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);
```

Applied directly after the column.

## Table-Level
```
CREATE TABLE employees (
    emp_id INT,
    name VARCHAR(100),
    PRIMARY KEY (emp_id)
);
```

Applied after all columns are defined.