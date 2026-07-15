# ORDERBY
Sorts the result
sort the result set based on one or more columns.

```
SELECT column1, column2
FROM table_name
ORDER BY column_name [ASC | DESC];
```
- ASC → Ascending order (default)
- DESC → Descending order

## Example Table

employees

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 70000  | 20      |
| 3      | Bob   | 60000  | 10      |
| 4      | David | 45000  | 30      |


# 1. Sort by Salary (Ascending)
```
SELECT *
FROM employees
ORDER BY salary;
```

| emp_id | name  | salary |
| ------ | ----- | ------ |
| 4      | David | 45000  |
| 1      | John  | 50000  |
| 3      | Bob   | 60000  |
| 2      | Alice | 70000  |


# 2. Sort by Salary (Descending)
```
SELECT *
FROM employees
ORDER BY salary DESC;
```

| emp_id | name  | salary |
| ------ | ----- | ------ |
| 2      | Alice | 70000  |
| 3      | Bob   | 60000  |
| 1      | John  | 50000  |
| 4      | David | 45000  |


# Sort by Multiple Columns
First sort by department, then by salary within each department.

```
SELECT *
FROM employees
ORDER BY dept_id ASC, salary DESC;
```

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 3      | Bob   | 60000  | 10      |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 70000  | 20      |
| 4      | David | 45000  | 30      |


# Order By Alias
```
SELECT
    name,
    salary * 12 AS annual_salary
FROM employees
ORDER BY annual_salary DESC;
```

| name  | annual_salary |
| ----- | ------------- |
| Alice | 840000        |
| Bob   | 720000        |
| John  | 600000        |
| David | 540000        |

# Order By Column Position
```
SELECT name, salary
FROM employees
ORDER BY 2 DESC;
```

2 refers to the second selected column (salary).

## Equivalent to:
```
SELECT name, salary
FROM employees
ORDER BY salary DESC;
```

# Execution Order of a Query
```
SELECT name, salary
FROM employees
WHERE salary > 50000
ORDER BY salary DESC;
```

SQL logically executes as:
```
FROM
↓
WHERE
↓
SELECT
↓
ORDER BY
```

# ORDER BY with LIMIT
Get the highest-paid employee:
```
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 1;
```

Get the top 3 highest-paid employees:
```
SELECT *
FROM employees
ORDER BY salary DESC
LIMIT 3;
```

# Difference Between WHERE and ORDER BY
| WHERE                  | ORDER BY              |
| ---------------------- | --------------------- |
| Filters rows           | Sorts rows            |
| Reduces result set     | Changes display order |
| Executed before SELECT | Executed after SELECT |


# Common Interview Questions
1. Find the highest-paid employee.
2. Find the top 3 salaries.
3. Sort employees by department and then salary.
4. Can ORDER BY use a column not present in SELECT? 
- Yes.
```
SELECT name
FROM employees
ORDER BY salary DESC;
```
5. What is the default sort order? 
ASC (Ascending).