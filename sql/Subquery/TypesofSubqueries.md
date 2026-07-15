# Types of Subqueries
A subquery can be classified based on how many rows/columns it returns and whether it depends on the outer query.

# 1. Single-Row Subquery

Returns exactly one row.

Because only one value is returned, you can use:

- =
- >
- <
- >=
- <=
- <>

## Example: Employees earning above average salary

| emp_id | name  | salary |
| ------ | ----- | ------ |
| 1      | John  | 50000  |
| 2      | David | 70000  |
| 3      | Sarah | 90000  |


```
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

### Step 1
Subquery executes first:

```
SELECT AVG(salary)
FROM employees;
```
Result:

70000

### Step 2
Main query becomes:

```
SELECT *
FROM employees
WHERE salary > 70000;
```

Result:

| emp_id | name  | salary |
| ------ | ----- | ------ |
| 3      | Sarah | 90000  |


## Another Example
Highest-paid employee:

```
SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);
```

# 2. Multi-Row Subquery
Returns multiple rows.

Since multiple values are returned, using = causes an error.

Instead use:
- IN
- NOT IN
- ANY
- ALL

## Example

Departments

| dept_id | dept_name |
| ------- | --------- |
| 1       | Sales     |
| 2       | HR        |
| 3       | IT        |

```
SELECT *
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM departments
    WHERE dept_name IN ('Sales','HR')
);
```

Subquery result:
```
1
2
```

Main query becomes:
```
WHERE dept_id IN (1,2)
```

# 3. Multi-Column Subquery

Returns more than one column.


## Example
Find employees with highest salary in each department.

```
SELECT *
FROM employees
WHERE (dept_id, salary) IN (
    SELECT dept_id, MAX(salary)
    FROM employees
    GROUP BY dept_id
);
```

Subquery Result
| dept_id | max_salary |
| ------- | ---------- |
| 1       | 90000      |
| 2       | 70000      |
| 3       | 80000      |

Outer query checks:
```
(dept_id,salary)
```
against

```
(1,90000)
(2,70000)
(3,80000)
```

# 4. Correlated Subquery

A subquery that depends on the outer query.

The inner query runs once for every row processed by the outer query.

## Example: Employees earning more than their department average

```
SELECT *
FROM employees e1
WHERE salary > (
    SELECT AVG(salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);
```

### How it works

For each employee:
- Find average salary of that employee's department.
- Compare employee salary with department average.
- Return matching rows.


# 5. Scalar Subquery

A special type of single-row subquery.

Returns:

Exactly one row
Exactly one column

One value only.

## Example

```
SELECT
    emp_name,
    salary,
    (
        SELECT AVG(salary)
        FROM employees
    ) AS avg_salary
FROM employees;
```

| name  | salary | avg_salary |
| ----- | ------ | ---------- |
| John  | 50000  | 70000      |
| David | 70000  | 70000      |
| Sarah | 90000  | 70000      |

The subquery returns one value:
```
70000
```

which is displayed for every row.

# 6. Nested Subquery

A subquery inside another subquery.

## Example
```
SELECT *
FROM employees
WHERE dept_id = (
    SELECT dept_id
    FROM departments
    WHERE manager_id = (
        SELECT emp_id
        FROM employees
        WHERE emp_name = 'David'
    )
);
```

Execution order:
```
Innermost Query
↓
Middle Query
↓
Outer Query
```


# Interview Comparison
| Type         | Returns                  | Example Operator |
| ------------ | ------------------------ | ---------------- |
| Single-row   | 1 row                    | =, >, <          |
| Multi-row    | Many rows                | IN, ANY, ALL     |
| Multi-column | Multiple columns         | (col1,col2) IN   |
| Correlated   | Depends on outer query   | EXISTS           |
| Scalar       | 1 row + 1 column         | Used in SELECT   |
| Nested       | Subquery inside subquery | Multiple levels  |
