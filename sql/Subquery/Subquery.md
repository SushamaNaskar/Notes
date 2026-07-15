# subquery
A subquery is a query inside another query.

It allows you to use the result of one query as input to another query.

```
SELECT column_name
FROM table_name
WHERE column_name OPERATOR (
    SELECT column_name
    FROM table_name
);
```

# Types of Subqueries
A subquery can be classified based on how many rows/columns it returns and whether it depends on the outer query.

1. Single-Row Subquery

Returns exactly one row.

2. Multi-Row Subquery

Returns multiple rows.

3. Multi-Column Subquery

Returns multiple columns.

4. Correlated Subquery

A subquery that depends on the outer query.

The inner query runs once for every row processed by the outer query.

# Common Operators Used with Subqueries

1. IN
2. EXISTS - Checks whether at least one row exists.
3. NOT EXISTS
4. ANY - True if condition matches at least one value.
5. ALL - True if condition matches all values.



# Key Interview Points
- Subquery = query inside another query.
- Single-row subquery → use =, >, <.
- Multi-row subquery → use IN, ANY, ALL.
- EXISTS checks existence of rows.
- NOT EXISTS finds missing relationships.
- Correlated subquery executes once per outer-row.
- Many correlated subqueries can be rewritten using JOINs or window functions for better performance.

# Classification by Location
Subqueries can appear in many clauses.

- WHERE
- SELECT
- FROM