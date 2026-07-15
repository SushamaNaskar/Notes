# Common Operators Used with Subqueries

## IN

```
SELECT *
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM departments
    WHERE location='Delhi'
);
```

## EXISTS

Checks whether at least one row exists.
```
SELECT *
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.dept_id = d.dept_id
);
```

Returns departments having employees.

## NOT EXISTS

```
SELECT *
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.dept_id = d.dept_id
);
```
Returns departments with no employees.

## ANY

True if condition matches at least one value.

```
SELECT *
FROM employees
WHERE salary > ANY (
    SELECT salary
    FROM employees
    WHERE dept_id = 10
);
```

Equivalent to:
```
salary > MIN(salary of dept 10)
```

## ALL

True if condition matches all values.
```
SELECT *
FROM employees
WHERE salary > ALL (
    SELECT salary
    FROM employees
    WHERE dept_id = 10
);
```

Equivalent to:
```
salary > MAX(salary of dept 10)
```