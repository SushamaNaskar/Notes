# What is JPA?
- Java Persistence API is a Java specification used to manage data between Java applications and relational databases.

## JPA itself is only a specification (rules/interfaces).

Popular implementations:
- Hibernate
- EclipseLink

In Spring Boot, most developers use:
- Spring Data JPA + Hibernate

# Key Features of JPA (Java Persistence API)

# Simple Interview Summary
What are the key features of JPA?
## 1. Entity Management
Maps Java objects to database tables using annotations like @Entity.
## 2. JPQL
Object-oriented query language used to query entities instead of tables.
## 3.Transaction Management
Uses @Transactional to ensure database consistency.
## 4.Entity Relationships
Supports One-to-One, One-to-Many, Many-to-One, and Many-to-Many mappings.
## 5.Automatic SQL Generation
JPA generates SQL queries automatically.
## 6.Database Independence
Same code works with MySQL, PostgreSQL, Oracle, etc.



# Transactions
A Transaction is a group of database operations executed as a single unit.

JPA helps:
- Begin transaction
- Commit transaction
- Rollback if error occurs

# Why Transactions Matter
Suppose:
- 1. Money deducted from Account A
- 2. Money added to Account B

If step 2 fails:
- Step 1 should also rollback

Otherwise data becomes inconsistent.

# @Transactional

Used to manage transactions automatically.

```
import org.springframework.transaction.annotation.Transactional;

@Service
public class BankService {

    @Transactional
    public void transferMoney() {

        // deduct from account A

        // add to account B
    }
}
```

# Internal Working

Without @Transactional:

- Partial updates may happen

With @Transactional:

- All operations succeed
OR
- Everything rolls back

# Transaction Lifecycle
```
Transaction Starts
       ↓
Execute Queries
       ↓
Success → Commit
Failure → Rollback
```


# Entity Relationships
JPA supports relationships between entities just like relational databases.

# Main Relationship Types
```
| Relationship | Meaning                         |
| ------------ | ------------------------------- |
| One-to-One   | One record linked to one record |
| One-to-Many  | One record linked to many       |
| Many-to-One  | Many records linked to one      |
| Many-to-Many | Many linked to many             |

```