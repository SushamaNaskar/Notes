# WHERE
Filters rows.


# Table

employees

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 70000  | 20      |
| 3      | Bob   | 60000  | 10      |


```
SELECT *
FROM employees
WHERE salary > 60000;
```

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 2      | Alice | 70000  | 20      |


```
SELECT *
FROM employees
WHERE dept_id = 10;
```

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 3      | Bob   | 60000  | 10      |

# These operators cover about 90% of SQL filtering questions asked in interviews and used in day-to-day querying.

```
=      Equal
<>     Not Equal
!=     Not Equal
>      Greater Than
<      Less Than
>=     Greater Than Equal
<=     Less Than Equal
BETWEEN
IN
NOT IN
LIKE
IS NULL
IS NOT NULL
AND
OR
NOT
REGEXP
```


# BETWEEN
```
SELECT *
FROM employees
WHERE salary BETWEEN 50000 AND 60000;
```

Equivalent to:
```
WHERE salary >= 50000
AND salary <= 60000;
```

# IN
Checks whether a value exists in a list.
```
SELECT *
FROM employees
WHERE dept_id IN (10, 20);
```

Equivalent to:
```
WHERE dept_id = 10
OR dept_id = 20;
```

# NOT IN
```
SELECT *
FROM employees
WHERE dept_id NOT IN (10);
```

Result:

Alice

# LIKE

Pattern matching.
```
SELECT *
FROM employees
WHERE name LIKE 'J%';
```
Starts with J.

Result:

John

## Common Wildcards
| Pattern  | Meaning                            |
| -------- | ---------------------------------- |
| `'J%'`   | Starts with J                      |
| `'%n'`   | Ends with n                        |
| `'%oh%'` | Contains oh                        |
| `'J___'` | J followed by exactly 3 characters |


# IS NULL
```
SELECT *
FROM employees
WHERE manager_id IS NULL;
```
Finds rows where the value is NULL.

# IS NOT NULL
```
SELECT *
FROM employees
WHERE manager_id IS NOT NULL;
```
Finds rows having a value.

# Combining Conditions

## AND

Both conditions must be true.
```
SELECT *
FROM employees
WHERE dept_id = 10
  AND salary > 55000;
```

Result: Bob

## OR

At least one condition must be true.
```
SELECT *
FROM employees
WHERE dept_id = 20
   OR salary < 55000;
```
Result: John, Alice   


## NOT
Negates a condition.
```
SELECT *
FROM employees
WHERE NOT dept_id = 10;
```
Result: Alice


# REGEXP

Names starting with J

```
SELECT *
FROM employees
WHERE name REGEXP '^J';
```


| Regex      | Meaning                       | Matches                        |            |
| ---------- | ----------------------------- | ------------------------------ | ---------- |
| `^J`       | Starts with J                 | John, Jack                     |            |
| `n$`       | Ends with n                   | John, Ben                      |            |
| `^J.*n$`   | Starts with J and ends with n | John, Jason                    |            |
| `[a-z]`    | Any lowercase letter          | a, b, z                        |            |
| `[A-Z]`    | Any uppercase letter          | A, B, Z                        |            |
| `[0-9]`    | Any digit                     | 0-9                            |            |
| `[abcd]`   | One of a,b,c,d                | a, b, c, d                     |            |
| `[^abcd]`  | Anything except a,b,c,d       | e, x, 1                        |            |
| `^[abcd]`  | Starts with a,b,c,or d        | apple, cat                     |            |
| `[abcd]$`  | Ends with a,b,c,or d          | India                          |            |
| `^J        | ^L`                           | Starts with J OR L             | John, Lucy |
| `^(J       | L)`                           | Starts with J OR L (preferred) | John, Lucy |
| `(cat      | dog)`                         | cat OR dog                     | cat, dog   |
| `[JL]`     | J or L                        | J, L                           |            |
| `^[JL]`    | Starts with J or L            | John, Lucy                     |            |
| `[aeiou]`  | Any vowel                     | a,e,i,o,u                      |            |
| `[^aeiou]` | Any non-vowel                 | b,c,d                          |            |
