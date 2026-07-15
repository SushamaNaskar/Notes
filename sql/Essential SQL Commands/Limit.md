# LIMIT
- The LIMIT clause is used to restrict the number of rows returned by a query.

It is commonly used with ORDER BY to get the top N records.

## Syntax
```
SELECT column1, column2
FROM table_name
LIMIT number;
```

## Example Table
employees

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 70000  | 20      |
| 3      | Bob   | 60000  | 10      |
| 4      | David | 45000  | 30      |
| 5      | Emma  | 80000  | 20      |


# Get First 3 Rows
```
SELECT *
FROM employees
LIMIT 3;
```

| emp_id | name  | salary |
| ------ | ----- | ------ |
| 1      | John  | 50000  |
| 2      | Alice | 70000  |
| 3      | Bob   | 60000  |


# Get Highest Paid Employee
```
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;
```

| emp_id | name | salary |
| ------ | ---- | ------ |
| 5      | Emma | 80000  |

# Get Top 3 Highest Salaries
```
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 3;
```

| name  | salary |
| ----- | ------ |
| Emma  | 80000  |
| Alice | 70000  |
| Bob   | 60000  |


# Get Lowest Paid Employee
```
SELECT *
FROM employees
ORDER BY salary ASC
LIMIT 1;
```

| name  | salary |
| ----- | ------ |
| David | 45000  |


# LIMIT with OFFSET
Used for pagination.

```
SELECT *
FROM employees
LIMIT row_count OFFSET start_row;
```

or (MySQL)

```
SELECT *
FROM employees
LIMIT start_row, row_count;
```

## Example: Skip First 2 Rows and Get Next 2
```
SELECT *
FROM employees
ORDER BY emp_id
LIMIT 2 OFFSET 2;
```

or

```
SELECT *
FROM employees
ORDER BY emp_id
LIMIT 2,2;
```

| emp_id | name  |
| ------ | ----- |
| 3      | Bob   |
| 4      | David |


# Pagination Example
Page Size = 2

## Page 1
```
SELECT *
FROM employees
ORDER BY emp_id
LIMIT 2 OFFSET 0;
```
Rows 1–2

## Page 2

```
SELECT *
FROM employees
ORDER BY emp_id
LIMIT 2 OFFSET 2;
```
Rows 3–4

# Page 3
```
SELECT *
FROM employees
ORDER BY emp_id
LIMIT 2 OFFSET 4;
```
Rows 5–6

# SQL Server Equivalent
SQL Server does not use LIMIT.

```
SELECT TOP 3 *
FROM employees;
```

For pagination:
```
SELECT *
FROM employees
ORDER BY emp_id
OFFSET 2 ROWS
FETCH NEXT 2 ROWS ONLY;
```

# PostgreSQL / MySQL Interview Questions
Second Highest Salary
```
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;
```

Third Highest Salary
```
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;
```

Top 5 Highest Paid Employees
```
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 5;
```

# Logical Execution Order
```
SELECT *
FROM employees
WHERE dept_id = 10
ORDER BY salary DESC
LIMIT 2;
```

SQL processes logically as:
```
FROM
↓
WHERE
↓
SELECT
↓
ORDER BY
↓
LIMIT
```
Result:

- Filter department 10 employees
- Sort by salary descending
- Return only top 2 rows

# Important Interview Points
| Clause             | Purpose                      |
| ------------------ | ---------------------------- |
| `LIMIT n`          | Return first n rows          |
| `LIMIT n OFFSET m` | Skip m rows, return next n   |
| Usually used with  | `ORDER BY`                   |
| MySQL/PostgreSQL   | Supports `LIMIT`             |
| SQL Server         | Uses `TOP` or `OFFSET FETCH` |


# Common Interview Tasks
1. Highest salary employee → ORDER BY DESC LIMIT 1
2. Top N employees → LIMIT N
3. Pagination → LIMIT + OFFSET
4. Second/Third highest salary → LIMIT 1 OFFSET n
5. Latest record → ORDER BY created_at DESC LIMIT 1