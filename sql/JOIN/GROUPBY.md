# Group By
GROUP BY is used to group rows that have the same values in one or more columns and perform aggregate calculations on each group.

Commonly used with:
- COUNT()
- SUM()
- AVG()
- MIN()
- MAX()

# Sample Table

employees
| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 70000  | 20      |
| 3      | Bob   | 60000  | 10      |
| 4      | Emma  | 80000  | 20      |
| 5      | Tom   | 55000  | 10      |


# Why GROUP BY?
Think of aggregate functions as needing to know:

"What set of rows should I calculate on?"

## Without GROUP BY
```
SELECT AVG(salary)
FROM employees;
```

SQL sees:
```
All rows together
```

So it calculates:
```
(50000 + 70000 + 60000 + 80000 + 55000) / 5
= 63000
```


| avg_salary |
| ---------- |
| 63000      |

## What if We Want Average Salary Per Department?
Now we need separate groups.
```
SELECT dept_id, AVG(salary)
FROM employees
GROUP BY dept_id;
```

GROUP BY dept_id tells SQL:
```
Create a group for each unique dept_id.
```

### Group 10
| name | salary |
| ---- | ------ |
| John | 50000  |
| Bob  | 60000  |
| Tom  | 55000  |

Average:
```
(50000 + 60000 + 55000) / 3
= 55000
```

### Group 20
| name  | salary |
| ----- | ------ |
| Alice | 70000  |
| Emma  | 80000  |

Average:
```
(70000 + 80000) / 2
= 75000
```
result:

| dept_id | avg_salary |
| ------- | ---------- |
| 10      | 55000      |
| 20      | 75000      |


## Visualizing the Difference

### Without GROUP BY
```
employees
   │
   ▼
One Big Group
   │
   ▼
AVG(salary)
   │
   ▼
63000
```

### With GROUP BY dept_id
```
employees
   │
   ▼
Group by dept_id

Group 10        Group 20
---------       ---------
50000           70000
60000           80000
55000

   │               │
   ▼               ▼
AVG()            AVG()

55000           75000
```

# GROUP BY Example

Find total salary per department.
```
SELECT dept_id, SUM(salary)
FROM employees
GROUP BY dept_id;
```

| dept_id | sum_salary |
| ------- | ---------- |
| 10      | 165000     |
| 20      | 150000     |

Explanation:

Department 10:
50000 + 60000 + 55000 = 165000

Department 20:

70000 + 80000 = 150000

# COUNT with GROUP BY

Count employees in each department.
```
SELECT dept_id, COUNT(*)
FROM employees
GROUP BY dept_id;
```

| dept_id | employee_count |
| ------- | -------------- |
| 10      | 3              |
| 20      | 2              |

# AVG with GROUP BY

Average salary per department.
```
SELECT dept_id, AVG(salary)
FROM employees
GROUP BY dept_id;
```

| dept_id | avg_salary |
| ------- | ---------- |
| 10      | 55000      |
| 20      | 75000      |


# MIN and MAX
```
SELECT dept_id,
       MIN(salary) AS min_salary,
       MAX(salary) AS max_salary
FROM employees
GROUP BY dept_id;
```

| dept_id | min_salary | max_salary |
| ------- | ---------- | ---------- |
| 10      | 50000      | 60000      |
| 20      | 70000      | 80000      |


# Multiple Columns in GROUP BY
Group by department and salary.

```
SELECT dept_id, salary, COUNT(*)
FROM employees
GROUP BY dept_id, salary;
```

SQL creates a separate group for every unique combination of:
```
(dept_id, salary)
```


# GROUP BY Execution Order

When SQL executes a query:
```
SELECT dept_id, AVG(salary)
FROM employees
WHERE salary > 50000
GROUP BY dept_id;
```

Order:
```
FROM
↓
WHERE
↓
GROUP BY
↓
Aggregate Functions
↓
SELECT
↓
ORDER BY
```

# Theoretical Rule

For a query like:
```
SELECT A, B, AGG(...)
FROM table
GROUP BY A;
```

## B must be either:
Included in GROUP BY

```
GROUP BY A, B
```

or

## Aggregated
MAX(B)
MIN(B)
COUNT(B)

## B is Functionally dependent on A

A column B is functionally dependent on column A if:

```
For every value of A, there is exactly one value of B.
```

In database notation:
```
A → B
```

Meaning:
```
Knowing A is enough to determine B.
```


## Example 1: Primary Key
departments
| dept_id (PK) | dept_name   |
| ------------ | ----------- |
| 10           | Engineering |
| 20           | HR          |
| 30           | Sales       |

Since dept_id is a primary key:
```
dept_id → dept_name
```

If I tell you:
```
dept_id = 10
```

there is only one possible dept_name:
```
Engineering
```

So dept_name is functionally dependent on dept_id.

## Example 2: Not Functionally Dependent
employees
| emp_id | name  | dept_id |
| ------ | ----- | ------- |
| 1      | John  | 10      |
| 2      | Bob   | 10      |
| 3      | Alice | 20      |

Here:
```
dept_id = 10
```
Could mean:
```
John
Bob
```
Multiple names exist.

Therefore:
```
dept_id → name ❌
```

name is NOT functionally dependent on dept_id.

### ❌ Invalid:
```
SELECT dept_id, name, AVG(salary)
FROM employees
GROUP BY dept_id;
```
Why?

For department 10 there are multiple names:

John
Bob
Tom

Since there isn't a single name for department 10, SQL doesn't know which one to display.

### Valid
```
SELECT e.dept_id,
       d.dept_name,
       AVG(e.salary)
FROM employees e
JOIN departments d
    ON e.dept_id = d.dept_id
GROUP BY e.dept_id, d.dept_name;
```

This is valid because every row in department 10 has the same department name (Engineering).