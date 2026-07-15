# Find employees earning more than average salary

```
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

# Find highest-paid employee
```
SELECT *
FROM employees
WHERE salary = (
    SELECT MAX(salary)
    FROM employees
);
```

# Find second-highest salary
```
SELECT MAX(salary)
FROM employees
WHERE salary < (
    SELECT MAX(salary)
    FROM employees
);
```

# Find employees in departments with more than 5 employees
```
SELECT *
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM employees
    GROUP BY dept_id
    HAVING COUNT(*) > 5
);
```

# Find departments with no employees
```
SELECT *
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.dept_id = d.dept_id
);
```