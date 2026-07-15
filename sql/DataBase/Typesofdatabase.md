# 1. Relational Database (SQL Database)
A relational database or relational database management system(RDMS), stores information in tables. Often, these tables have shared  information between them, causing a relationship to form bewteen tables.

Stores data in tables (rows and columns).

## Example

employees

| emp_id | name  | salary | dept_id |
| ------ | ----- | ------ | ------- |
| 1      | John  | 50000  | 10      |
| 2      | Alice | 60000  | 20      |

departments

| dept_id | dept_name |
| ------- | --------- |
| 10      | HR        |
| 20      | IT        |


## Characteristics

✅ Fixed schema (structure defined beforehand)

✅ Uses SQL to query these database

✅ Supports relationships using Primary Key and Foreign Key

✅ Strong consistency (ACID properties)

✅ Best for structured data

## Popular Relational Databases
MySQL
PostgreSQL
Oracle Database
Microsoft SQL Server

## Example Query
SELECT e.name, d.dept_name
FROM employees e
JOIN departments d
ON e.dept_id = d.dept_id;

## When to Use
Banking systems
E-commerce orders
Payroll systems
Inventory management
Applications requiring transactions

# 2. NoSQL Database
NoSQL means "Not Only SQL".

Designed for:

Huge scale
Flexible schema
High performance
Distributed systems

Instead of tables, data can be stored as:

Documents
Key-Value pairs
Columns
Graphs

## A. Document Database

Stores data as JSON-like documents.

### Example
```
{
  "id": 1,
  "name": "John",
  "salary": 50000,
  "skills": ["React", "Node.js"]
}
```
### Popular Examples
MongoDB
CouchDB

### Best For
User profiles
Product catalogs
Content management systems

## B. Key-Value Database
Stores data as:

Key -> Value

Example:

user:101 -> John
user:102 -> Alice

### Popular Examples
Redis
Amazon DynamoDB

### Best For
Caching
Sessions
Real-time applications

## C. Column-Family Database

Stores data by columns instead of rows.

### Popular Examples
Apache Cassandra
Apache HBase
### Best For
Big Data
Analytics
High write throughput

## D. Graph Database

Stores entities and their relationships as nodes and edges.

Example
John ---- Friend ---- Alice
  |
 WorksWith
  |
 Bob
Popular Examples
Neo4j
Amazon Neptune
Best For
Social networks
Recommendation engines
Fraud detection

# SQL vs NoSQL
| Feature           | SQL             | NoSQL                                |
| ----------------- | --------------- | ------------------------------------ |
| Data Structure    | Tables          | Documents, Key-Value, Graph, Columns |
| Schema            | Fixed           | Flexible                             |
| Query Language    | SQL             | Database-specific                    |
| Relationships     | Strong          | Usually limited                      |
| ACID Transactions | Strong          | Varies                               |
| Scalability       | Vertical        | Horizontal                           |
| Best For          | Structured Data | Large-scale, flexible data           |


# Interview Answer

## What are the main types of databases?

Databases are broadly classified into Relational (SQL) and Non-Relational (NoSQL) databases.

Relational databases store data in tables with predefined schemas and support SQL, joins, and ACID transactions. Examples include MySQL and PostgreSQL.

NoSQL databases provide flexible schemas and are designed for scalability. Common types are Document databases (MongoDB), Key-Value databases (Redis), Column-Family databases (Cassandra), and Graph databases (Neo4j).