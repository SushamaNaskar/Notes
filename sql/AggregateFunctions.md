# Aggregate Functions

Aggregate functions operate on multiple rows and return a single value.

It works on number,string and date.

# COUNT()

Counts rows.

## Count All Rows

```
SELECT COUNT(*)
FROM employees;
```

Result:
```
4
```

## Count Non-NULL Values
```
SELECT COUNT(salary)
FROM employees;
```

# SUM()
Adds values.

```
SELECT SUM(salary)
FROM employees;
```

Result:
```
260000
```

# AVG()
Average value.

```
SELECT AVG(salary)
FROM employees;
```

Result:
```
65000
```

# MAX()
Highest value.

```
SELECT MAX(salary)
FROM employees;
```

Result:
```
80000
```

# MIN()
Lowest value.

```
SELECT MIN(salary)
FROM employees;
```

Result:
```
50000
```