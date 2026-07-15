# Level 1: CREATE, INSERT, SELECT (Basics)

## Q1. Create the departments table
Columns:
- dept_id
- dept_name

```
CREATE TABLE departments(
   dept_id INT PRIMARY KEY,
 dept_name VARCHAR(50)
); 
```

## Q2. Create the employees table
Columns:
- emp_id
- emp_name
- salary
- age
- city
- dept_id
- manager_id

```
CREATE TABLE employees(
  emp_id INT PRIMARY KEY,
  emp_name VARCHAR(50),
  sal INT,
  age INT,
  city VARCHAR(50),
  manager_id INT,
  dept_id INT,
  FOREIGN KEY(dept_id) REFERENCES departments(dept_id)
  ); 
  ```

## Q3. Insert the following departments

| dept_id | dept_name |
| ------- | --------- |
| 10      | HR        |
| 20      | IT        |
| 30      | Finance   |
| 40      | Marketing |


```
INSERT INTO departments(dept_id,dept_name)
VALUES
  (10,'HR'),
  (20,'IT'),
  (30,'FINANCE'),
  (40,'MARKETING');

INSERT INTO departments(dept_id,dept_name)
VALUES (50,'SCRUM');
```

## Q4. Insert these employees
| emp_id | emp_name | salary | age | city      | dept_id | manager_id |
| ------ | -------- | ------ | --- | --------- | ------- | ---------- |
| 1      | John     | 50000  | 28  | Kolkata   | 20      | 5          |
| 2      | Alice    | 70000  | 32  | Delhi     | 20      | 5          |
| 3      | Bob      | 60000  | 30  | Mumbai    | 10      | 6          |
| 4      | Carol    | 80000  | 35  | Kolkata   | 30      | 7          |
| 5      | David    | 100000 | 40  | Bangalore | 20      | NULL       |
| 6      | Emma     | 90000  | 42  | Delhi     | 10      | NULL       |
| 7      | Frank    | 120000 | 45  | Mumbai    | 30      | NULL       |
| 8      | Grace    | 55000  | 26  | Kolkata   | 40      | 9          |
| 9      | Henry    | 95000  | 41  | Bangalore | 40      | NULL       |
| 10     | Ivy      | 65000  | 29  | Chennai   | 20      | 5          |


```
INSERT INTO employees(emp_id,emp_name,sal,age,city,manager_id,dept_id)
VALUES
(1, 'John', 50000, 28, 'Kolkata', 5, 20),
(2, 'Alice', 70000, 32, 'Delhi', 5, 20),
(3, 'Bob', 60000, 30,'Mumbai', 6, 10),
(4, 'Carol', 80000, 35, 'Kolkata', 7, 30),
(5, 'David', 100000, 40, 'Bangalore', NULL, 20),
(6, 'Emma', 90000, 42, 'Delhi', NULL, 10),
(7, 'Frank', 120000, 45, 'Mumbai', NULL, 30),
(8, 'Grace', 55000, 26, 'Kolkata', 9, 40),
(9, 'Henry', 95000, 41, 'Bangalore', NULL, 40),
(10, 'Ivy', 65000, 29, 'Chennai', 5, 20);

INSERT INTO employees(emp_id,emp_name,sal,age,city,manager_id,dept_id)
VALUES
(11, 'Anne', 75000, 29, 'Goa', 5, NULL);
```

## Q5. Display all employee records.
```
SELECT * FROM employees;
```

# Level 2: WHERE Clause

## Q6. Show employees whose salary is greater than 70000.

```
SELECT * 
FROM employees
WHERE sal>70000;
```

## Q7. Show employees who belong to Kolkata.
```
SELECT *
FROM employees
WHERE city='Kolkata';
```

## Q8. Show employees whose age is between 25 and 35.

```
SELECT *
FROM employees
WHERE age BETWEEN 25 AND 35;
```

## Q9. Show employees working in departments 10 and 20.

```
SELECT *
FROM employees
WHERE dept_id IN (10,20);
```

## Q10. Show employees whose names start with 'A'.

```
SELECT *
FROM employees
WHERE emp_name LIKE 'A%';
```

# Level 3: ORDER BY and LIMIT

## Q11. Display all employees sorted by salary ascending.

```
SELECT *
FROM employees
ORDER BY sal; 
```

## Q12. Display all employees sorted by salary descending.
```
SELECT *
FROM employees
ORDER BY sal DESC; 
```

## Q13. Show the highest-paid employee.

```
 SELECT *
FROM employees
ORDER BY sal DESC
LIMIT 1; 
```

## Q14. Show the top 3 highest-paid employees.

```
SELECT *
FROM employees
ORDER BY sal DESC
LIMIT 3; 
```

## Q15. Show the youngest employee.

```
 SELECT *
FROM employees
ORDER BY age
LIMIT 1; 
```

# Level 4: Aggregate Functions

## Q16. Find:
- Total employees
- Average salary
- Highest salary
- Lowest salary

```
SELECT 
COUNT(*)
FROM employees; 

SELECT 
AVG(sal)
FROM employees;

SELECT 
MAX(sal)
FROM employees;

SELECT 
MIN(sal)
FROM employees;
```

or 
```
SELECT
COUNT(*) AS total_employees,
AVG(sal) AS avg_salary,
MAX(sal) AS max_salary,
MIN(sal) AS min_salary
FROM employees;
```

## Q17. Count how many employees belong to Kolkata.
```
SELECT
COUNT(*)
FROM employees
WHERE city='Kolkata';
```

# Level 5: GROUP BY

## Q18. Count employees in each department.
```
SELECT dept_id, COUNT(*)
FROM employees
GROUP BY dept_id;
```

## Q19. Find average salary of each department.

```
SELECT dept_id, AVG(sal)
FROM employees
GROUP BY dept_id;
```

## Q20. Find departments having more than 2 employees.

```
SELECT dept_id, COUNT(emp_id) AS empNumber
FROM employees
GROUP BY dept_id
HAVING COUNT(emp_id) > 2;
```

# Level 6: JOINS

## Q21. Display employee name and department name.

```
SELECT e.emp_name, d.dept_name
FROM employees as e
INNER JOIN departments as d
ON e.dept_id=d.dept_id;
```

# Q22. Show all employees working in the IT department.

```
SELECT e.emp_id,e.emp_name,d.dept_id, d.dept_name
FROM employees as e
INNER JOIN departments as d
USING (dept_id)
WHERE dept_name="IT";
```
## Q23. Show employee name, department name, and salary.

```
SELECT e.emp_name, d.dept_name, e.sal
FROM employees as e
INNER JOIN departments as d
USING(dept_id);
```

## Q24. Count employees in each department and show department names instead of department IDs.
```
SELECT d.dept_name, COUNT(e.emp_id) as empNumber
 FROM employees as e
 INNER JOIN departments as d
 USING (dept_id)
GROUP BY dept_id,dept_name;
```

## Q25. Show departments that have no employees.

```
SELECT d.dept_id,
       d.dept_name
FROM departments d
LEFT JOIN employees e
USING (dept_id)
WHERE e.emp_id IS NULL;
```

OR

```
SELECT d.dept_id,
       d.dept_name
FROM departments d
LEFT JOIN employees e
USING (dept_id)
GROUP BY d.dept_id, d.dept_name
HAVING COUNT(e.emp_id)=0;
```

# Level 7: Self Join

## Q26. Show employee names along with their manager names.
```
SELECT e.emp_name, e.manager_id, m.emp_name as managerName
FROM employees as e
LEFT JOIN employees m
ON e.manager_id=m.emp_id;
```

## Q27. Show all employees who report to David.
```
SELECT *
FROM employees e
INNER JOIN employees m
ON e.manager_id=m.emp_id
WHERE m.emp_name='David';
```

## Q28. Count how many employees each manager supervises.
```
SELECT m.emp_name, COUNT(e.emp_id)
FROM employees e
INNER JOIN employees m
ON e.manager_id=m.emp_id
GROUP BY e.manager_id, m.emp_name;
```

# Level 8: Mixed Practice


## Q29. Show top 2 highest-paid employees from the IT department.

Concepts:
- JOIN
- WHERE
- ORDER BY
- LIMIT

```
SELECT *
FROM employees e
JOIN departments d
USING(dept_id)
WHERE dept_name='IT'
ORDER BY sal DESC
LIMIT 2;
```

## Q30. Show departments whose average salary is greater than 75000.

Concepts:
- JOIN
- GROUP BY
- AVG
- HAVING

```
SELECT 
    d.dept_id,
    d.dept_name,
    AVG(e.sal) AS avg_salary
FROM employees e
JOIN departments d
USING(dept_id)
GROUP BY dept_id, d.dept_name
HAVING AVG(e.sal) >75000;
```