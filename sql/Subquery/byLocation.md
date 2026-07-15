# Classification by Location

Subqueries can appear in many clauses.

## In WHERE
```
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
);
```

## In SELECT
```
SELECT
    emp_name,
    (
        SELECT dept_name
        FROM departments d
        WHERE d.dept_id = e.dept_id
    ) AS dept_name
FROM employees e;
```

## In FROM

Called a derived table.
```
SELECT *
FROM (
    SELECT dept_id,
           AVG(salary) avg_sal
    FROM employees
    GROUP BY dept_id
) t;
```