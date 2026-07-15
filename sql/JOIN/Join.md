# JOIN
JOIN clause is used to combine rows from two or more tables based on a related column between them.

## Example Tables

employees

| emp_id | name  | dept_id |
| ------ | ----- | ------- |
| 1      | John  | 10      |
| 2      | Alice | 20      |
| 3      | Bob   | 10      |
| 4      | Mike  | 30      |


departments
| dept_id | dept_name |
| ------- | --------- |
| 10      | HR        |
| 20      | IT        |
| 40      | Finance   |


# 1. INNER JOIN
Returns only matching rows from both tables.

```
SELECT e.emp_id,
       e.name,
       d.dept_name
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id;
```

| emp_id | name  | dept_name |
| ------ | ----- | --------- |
| 1      | John  | HR        |
| 2      | Alice | IT        |
| 3      | Bob   | HR        |

## Explanation:
- Employee Mike (dept_id=30) is excluded because no matching department exists.
- Finance (dept_id=40) is excluded because no employee belongs to it.

- Adding alias
```
FROM employees e
INNER JOIN departments d
```
e is alias for employees and d is alias for departments 

# JOIN Three/multiple Tables

employees
| emp_id | name  | dept_id |
| ------ | ----- | ------- |
| 1      | John  | 10      |
| 2      | Alice | 20      |
| 3      | Bob   | 10      |

departments
| dept_id | dept_name | location_id |
| ------- | --------- | ----------- |
| 10      | HR        | 101         |
| 20      | IT        | 102         |

locations
| location_id | city      |
| ----------- | --------- |
| 101         | Kolkata   |
| 102         | Bangalore |


```
SELECT e.emp_id,
       e.name,
       d.dept_name,
       l.city
FROM employees e
JOIN departments d
    ON e.dept_id = d.dept_id
JOIN locations l
    ON d.location_id = l.location_id;
```

| emp_id | name  | dept_name | city      |
| ------ | ----- | --------- | --------- |
| 1      | John  | HR        | Kolkata   |
| 2      | Alice | IT        | Bangalore |
| 3      | Bob   | HR        | Kolkata   |


## How SQL Executes It
### Step 1

Join employees and departments

```
employees
JOIN departments
ON employees.dept_id = departments.dept_id
```

Intermediate result:
| emp_id | name  | dept_name | location_id |
| ------ | ----- | --------- | ----------- |
| 1      | John  | HR        | 101         |
| 2      | Alice | IT        | 102         |
| 3      | Bob   | HR        | 101         |


### Step 2

Join the above result with locations
```
... JOIN locations
ON departments.location_id = locations.location_id
```

Final result:
| emp_id | name  | dept_name | city      |
| ------ | ----- | --------- | --------- |
| 1      | John  | HR        | Kolkata   |
| 2      | Alice | IT        | Bangalore |
| 3      | Bob   | HR        | Kolkata   |


# Interview Tip: When joining multiple tables, start from the table that contains the main data you need (often a transaction table like orders) and then join outward to lookup tables (customers, products, departments, etc.).


# SELF JOIN
A SELF JOIN is when a table is joined with itself.

It is commonly used when rows in the same table are related to other rows in that table.

The most common example is Employee → Manager relationships.

## Example Table
employees

| emp_id | name  | manager_id |
| ------ | ----- | ---------- |
| 1      | John  | NULL       |
| 2      | Alice | 1          |
| 3      | Bob   | 1          |
| 4      | Mike  | 2          |
| 5      | Sarah | 2          |

## Here:

John is the CEO (no manager)
Alice reports to John
Bob reports to John
Mike reports to Alice
Sarah reports to Alice

## Problem

Display each employee along with their manager's name.

```
SELECT e.emp_id,
       e.name AS employee_name,
       m.name AS manager_name
FROM employees e
JOIN employees m
    ON e.manager_id = m.emp_id;
```

| emp_id | employee_name | manager_name |
| ------ | ------------- | ------------ |
| 1      | John          | NULL         |
| 2      | Alice         | John         |
| 3      | Bob           | John         |
| 4      | Mike          | Alice        |
| 5      | Sarah         | Alice        |

## Understanding the Aliases
```
employees e
```

Treats the table as Employees

```
employees m
```
Treats the same table as Managers

Even though it's the same table, SQL sees them as two different copies because of aliases.

## Visual Representation
```
employees (e)

Alice   manager_id = 1
               |
               v
employees (m)

John    emp_id = 1
```

Matching condition:
```
e.manager_id = m.emp_id
```


# Implicit JOIN
An implicit join is the older way of joining tables where you list multiple tables in the FROM clause and put the join condition in the WHERE clause.

```
SELECT e.emp_id,
       e.name,
       d.dept_name
FROM employees e,
     departments d
WHERE e.dept_id = d.dept_id;
```


| emp_id | name  | dept_name |
| ------ | ----- | --------- |
| 1      | John  | HR        |
| 2      | Alice | IT        |
| 3      | Bob   | HR        |

When there is no WHERE condition, SQL produces a Cartesian Product(cross join).

## Equivalent Explicit JOIN
Modern SQL prefers:
```
SELECT e.emp_id,
       e.name,
       d.dept_name
FROM employees e
INNER JOIN departments d
    ON e.dept_id = d.dept_id;
```
Both queries produce the same result.

## CROSS JOIN
A CROSS JOIN returns the Cartesian Product of two tables.

Every row from the first table is combined with every row from the second table.

```
Employees          Departments

John      ----->   HR
John      ----->   IT

Alice     ----->   HR
Alice     ----->   IT

Bob       ----->   HR
Bob       ----->   IT
```
Every employee is paired with every department.



These two queries are identical:

## Explicit CROSS JOIN
```
SELECT *
FROM employees
CROSS JOIN departments;
```

## Implicit CROSS JOIN
```
SELECT *
FROM employees,
     departments;
```

When there is no join condition, SQL produces a Cartesian Product.


# INNER JOIN Drawback

employees
| emp_id | name  | dept_id |
| ------ | ----- | ------- |
| 1      | John  | 10      |
| 2      | Alice | 20      |
| 3      | Bob   | 10      |
| 4      | Mike  | 30      |


departments
| dept_id | dept_name |
| ------- | --------- |
| 10      | HR        |
| 20      | IT        |
| 40      | Finance   |

Notice:
- Mike belongs to department 30, which doesn't exist.
- Finance department exists but has no employees.

```
SELECT e.name,
       d.dept_name
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id;
```

| name  | dept_name |
| ----- | --------- |
| John  | HR        |
| Alice | IT        |
| Bob   | HR        |


## What happened?

- Mike disappeared.

- Finance disappeared.

- Because INNER JOIN only keeps rows where a match exists in both tables.

## Problem 1: Lost Data
Suppose your manager asks:

"Show me all employees and their departments."

You run an INNER JOIN.

| name  | dept_name |
| ----- | --------- |
| John  | HR        |
| Alice | IT        |
| Bob   | HR        |

Manager asks:

"Where is Mike?"

You don't see him because INNER JOIN silently removed him.

This is one of the biggest drawbacks of INNER JOIN.

# Outer JOIN
An OUTER JOIN returns matching rows plus unmatched rows from one or both tables.

There are 3 types of OUTER JOINs:
1. LEFT OUTER JOIN
2. RIGHT OUTER JOIN
3. FULL OUTER JOIN

## LEFT JOIN

Returns:
- All rows from the left table
- Matching rows from the right table
- NULL where no match exists


```
SELECT e.name,
       d.dept_name
FROM employees e
LEFT JOIN departments d
ON e.dept_id = d.dept_id;
```

| name  | dept_name |
| ----- | --------- |
| John  | HR        |
| Alice | IT        |
| Bob   | HR        |
| Mike  | NULL      |

```
Employees        Departments

John      ---->  HR
Alice     ---->  IT
Bob       ---->  HR
Mike      ---->  No Match

Result: John, Alice, Bob, Mike
```

Explanation:

Mike is included even though no matching department exists.
Missing matches become NULL.

## RIGHT JOIN
Returns:
- All rows from the right table
- Matching rows from the left table
- NULL where no match exists

```
SELECT e.name,
       d.dept_name
FROM employees e
RIGHT JOIN departments d
ON e.dept_id = d.dept_id;
```
| name  | dept_name |
| ----- | --------- |
| John  | HR        |
| Bob   | HR        |
| Alice | IT        |
| NULL  | Finance   |

```
Employees        Departments

John      ---->  HR
Alice     ---->  IT
Bob       ---->  HR

Finance   <---- No Employee

Result includes Finance
```

Explanation:

Finance appears even though no employee belongs to it.

## FULL OUTER JOIN

Returns:
- All matching rows
- All unmatched rows from the left table
- All unmatched rows from the right table

```
SELECT e.name,
       d.dept_name
FROM employees e
FULL OUTER JOIN departments d
ON e.dept_id = d.dept_id;
```

| name  | dept_name |
| ----- | --------- |
| John  | HR        |
| Bob   | HR        |
| Alice | IT        |
| Mike  | NULL      |
| NULL  | Finance   |

```
LEFT ONLY       MATCHING        RIGHT ONLY

Mike            John-HR         Finance
                Bob-HR
                Alice-IT
```

Keep everything from BOTH tables.

## Self Outer Join
A Self Outer Join is simply a SELF JOIN combined with an OUTER JOIN (usually a LEFT JOIN).

You join a table with itself and keep unmatched rows as well.

### Employee-Manager Example

employees
| emp_id | name  | manager_id |
| ------ | ----- | ---------- |
| 1      | John  | NULL       |
| 2      | Alice | 1          |
| 3      | Bob   | 1          |
| 4      | Mike  | 2          |
| 5      | Sarah | 2          |

Here:

John has no manager (CEO)
Alice reports to John
Bob reports to John
Mike reports to Alice
Sarah reports to Alice

### Self INNER JOIN
```
SELECT e.name AS employee,
       m.name AS manager
FROM employees e
INNER JOIN employees m
ON e.manager_id = m.emp_id;
```

| employee | manager |
| -------- | ------- |
| Alice    | John    |
| Bob      | John    |
| Mike     | Alice   |
| Sarah    | Alice   |

### Problem

John disappeared because:

John.manager_id = NULL

and there is no matching manager row.

### Self LEFT OUTER JOIN
```
SELECT e.name AS employee,
       m.name AS manager
FROM employees e
LEFT JOIN employees m
ON e.manager_id = m.emp_id;
```

| employee | manager |
| -------- | ------- |
| John     | NULL    |
| Alice    | John    |
| Bob      | John    |
| Mike     | Alice   |
| Sarah    | Alice   |

Now John is included.


# USING Clause in SQL JOIN

The USING clause is a shorter way to write a JOIN when the join columns have the same name in both tables.

## query
```
SELECT e.emp_id,
       e.name,
       d.dept_name
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id;
```

## With USING

Since both tables have a column named dept_id:
```
SELECT emp_id,
       name,
       dept_name
FROM employees
JOIN departments
USING (dept_id);
```

# NATURAL JOIN

A NATURAL JOIN automatically joins two tables based on the same column name in both tables.

You do not write the join condition yourself.

```
SELECT *
FROM employees
NATURAL JOIN departments;
```

SQL automatically detects:
```
employees.dept_id
departments.dept_id
```

and internally behaves like:
```
SELECT *
FROM employees
JOIN departments
ON employees.dept_id = departments.dept_id;
```

1. Find columns with the same name in both tables.
```
employees
-----------
emp_id
name
dept_id

departments
-----------
dept_id
dept_name
```

2. Generate the join condition automatically.
```
ON employees.dept_id = departments.dept_id
```

3. Step 3

Remove duplicate join columns from the output.

## Why is NATURAL JOIN discouraged?

Because:

Join conditions are hidden.
Schema changes can change query results.
Harder to read and debug.
Can accidentally join on unwanted columns.