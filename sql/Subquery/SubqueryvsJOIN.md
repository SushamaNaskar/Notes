# Subquery vs JOIN
Subquery

```
SELECT *
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM departments
    WHERE dept_name='Sales'
);
```

JOIN
```
SELECT e.*
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id
WHERE d.dept_name='Sales';
```
Both produce the same result.

In modern databases, optimizers often convert many subqueries into joins internally.