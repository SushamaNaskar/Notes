# Having
Filters groups.

# Difference Between WHERE and HAVING
| WHERE                                 | HAVING                                    |
| ------------------------------------- | ----------------------------------------- |
| Filters rows                          | Filters groups                            |
| Executes before GROUP BY              | Executes after GROUP BY                   |
| Cannot use aggregate functions        | Can use aggregate functions               |
| Faster because fewer rows are grouped | Used specifically for aggregate filtering |

order:

```
FROM
↓
WHERE
↓
GROUP BY
↓
Aggregate Functions
↓
SELECT
↓
ORDER BY
```

## Example:
```
SELECT dept_id, AVG(salary)
FROM employees
WHERE salary > 50000
GROUP BY dept_id
HAVING AVG(salary) > 65000;
```

- WHERE salary > 50000 → filters rows first
- GROUP BY dept_id → creates groups
- HAVING AVG(salary) > 65000 → filters grouped results

This GROUP BY + HAVING combination is one of the most frequently asked SQL interview topics.