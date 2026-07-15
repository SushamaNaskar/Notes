# SELECT
Primary data retrieval; supports Common Table Expressions (CTEs) and window functions (OVER, PARTITION BY).

# Table

employees

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 70000  | 20      |
| 3      | Bob   | 60000  | 10      |


# SELECT
Choose columns.

```
SELECT name,salary
FROM employees;
```

| name  | salary |
| ----- | ------ |
| John  | 50000  |
| Alice | 70000  |
| Bob   | 60000  |

# SELECT DISTINCT
The SELECT DISTINCT statement is used to return only distinct (unique) values.

```
SELECT DISTINCT dept_id
FROM employees;
```
## Output
| dept_id |
| ------- |
| 10      |
| 20      |


# Changing the Order of Columns
The order of columns in the output depends on the order you write them in the SELECT statement.

## Example
```
SELECT dept_id, name, salary
FROM employees;
```
## Output
```
| dept_id | name  | salary |
| ------- | ----- | ------ |
| 10      | John  | 50000  |
| 20      | Alice | 70000  |
| 10      | Bob   | 60000  |

```
# SELECT with Column Alias (AS)
The AS keyword is used to give a column a temporary name (alias) in the result.

## Example
```
SELECT name AS employee_name,
       salary AS monthly_salary
FROM employees;
```

## Output
| employee_name | monthly_salary |
| ------------- | -------------- |
| John          | 50000          |
| Alice         | 70000          |
| Bob           | 60000          |


# SELECT with Arithmetic Operations
You can perform calculations directly inside the SELECT statement.

## Example: Add Bonus
```
SELECT name,
       salary,
       salary + 5000 AS salary_with_bonus
FROM employees;
```

## Output
| name  | salary | salary_with_bonus |
| ----- | ------ | ----------------- |
| John  | 50000  | 55000             |
| Alice | 70000  | 75000             |
| Bob   | 60000  | 65000             |
