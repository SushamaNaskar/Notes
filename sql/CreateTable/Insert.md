# Insert a single row

```
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```
## Example
```
INSERT INTO employees (emp_id, name, salary, dept_id)
VALUES (1, 'John', 50000, 101);
```

# Insert multiple rows
```
INSERT INTO employees (emp_id, name, salary, dept_id)
VALUES
    (2, 'Alice', 60000, 101),
    (3, 'Bob', 55000, 102),
    (4, 'Charlie', 70000, 103);
```

# Insert data from another table
```
INSERT INTO employee_backup (emp_id, name, salary)
SELECT emp_id, name, salary
FROM employees
WHERE salary > 60000;
```