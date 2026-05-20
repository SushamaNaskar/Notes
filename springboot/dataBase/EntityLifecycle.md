```
@Service
@RequiredArgsConstructor
public class PatientServices {

    @Autowired
    private final PatientRepository patientRepository;

    @Transactional
    public void deletePatient(Long id){

        patientRepository.findById(id).orElseThrow();

        patientRepository.deleteById(id);
    }
}
```

# Step-by-Step Internal Flow

## Step 1 — Method Starts

```
@Transactional
public void deletePatient(Long id)
```

Because of @Transactional:

Spring starts a database transaction.


Internally:
```
Transaction starts
        ↓
EntityManager created
        ↓
Persistence Context created
```

## Step 2 — findById(id)
```
patientRepository.findById(id)
```

Internally Spring Data JPA uses:

```
entityManager.find(Patient.class, id)
```

Hibernate now:
1. Fetches entity from database
2. Stores entity inside Persistence Context
3. Starts managing the entity

Entity State Now

The entity becomes:

### → PERSISTENT STATE
Meaning:
```
Managed by EntityManager
Inside Persistence Context
Dirty checking active
```

## Step 3 — deleteById(id)
```
patientRepository.deleteById(id);
```

Internally Hibernate eventually uses:
```
entityManager.remove(entity)
```

Now entity state becomes:

### → REMOVED STATE

Meaning:
```
Marked for deletion
Still inside Persistence Context
```
Hibernate schedules DELETE query.

## Step 4 — Transaction Commit
At end of method:

```
Transaction commits
```
Hibernate performs:

### → FLUSH

Meaning:
```
Persistence Context synchronized with database
```
Now SQL executes:

```
DELETE FROM patient WHERE id = ?;
```

# Final Flow

```
@Transactional starts
        ↓
Persistence Context created
        ↓
findById()
        ↓
Entity becomes Persistent
        ↓
deleteById()
        ↓
Entity becomes Removed
        ↓
Flush
        ↓
DELETE SQL executed
        ↓
Commit
```

# Transaction Management
A transaction is a unit of work.

Either:
```
ALL succeed
```

OR
```
ALL rollback
```

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
@Transactional starts
        ↓
EntityManager created
        ↓
Persistence Context created
        ↓
Entities managed
        ↓
Dirty checking active
        ↓
Flush happens
        ↓
SQL generated
        ↓
Commit
        ↓
Persistence Context closed
```

# SUPER IMPORTANT CONCEPT
- Hibernate does NOT immediately hit database
- Hibernate may delay SQL until: transaction commit

# Persistence Context
- Persistence Context is a memory area where Hibernate stores and manages entities during a session/transaction.

- It is also called: First-level cache

 * Stores managed entities
 * Performs dirty checking


Internal Working
```
Database ↔ Persistence Context ↔ Application
```

## Why Important?

Persistence Context:
- Tracks object changes
- Prevents duplicate queries
- Manages entity lifecycle
- Performs dirty checking

Example
```
Employee emp1 = entityManager.find(Employee.class, 1L);

Employee emp2 = entityManager.find(Employee.class, 1L);
```
Second query does NOT hit DB again.

Why?
Because object already exists in Persistence Context.

# Example Flow
```
Patient p = entityManager.find(Patient.class, 1L);
```

Hibernate:

## Step 1
Checks Persistence Context first.

```
Already loaded?
```

If YES:
```
Return same object
NO SQL query
```

If NO:
```
SELECT from database
Store in Persistence Context
Return object
```

## Why Persistence Context is Important
| Feature                   | Meaning                         |
| ------------------------- | ------------------------------- |
| First-level cache         | Avoid repeated SELECT           |
| Dirty checking            | Auto detect changes             |
| Identity management       | One entity instance per ID      |
| Automatic synchronization | DB updates happen automatically |

# Dirty Checking (Very Important)
Hibernate automatically detects changes in persistent entities and updates database during flush/commit.

Once entity is Persistent:

Hibernate monitors changes automatically.

Example:
```
@Transactional
public void updatePatient() {

    Patient p = entityManager.find(Patient.class, 1L);

    p.setName("Amit");
}
```

You did NOT call:
```
save()
```
Still database updates automatically.

### why?
- Because entity is Persistent.
- Hibernate compares old vs new values.
- This is called:

→ Dirty Checking

# Flush Operation
Before commit:

Hibernate synchronizes Persistence Context with DB.

This is called:

→ FLUSH

Flow
```
Persistent Entity
      ↓
Changes tracked
      ↓
Flush occurs
      ↓
INSERT/UPDATE/DELETE SQL generated
      ↓
Commit
```

# Flush vs Commit

| Flush                                 | Commit                        |
| ------------------------------------- | ----------------------------- |
| Synchronizes Persistence Context → DB | Permanently saves transaction |
| SQL executed                          | Transaction finalized         |
| Can still rollback                    | Cannot rollback after commit  |




# EntityManager
- EntityManager is the API used to interact with Persistence Context.

Main JPA interface used for:

| Method    | Behavior                                     |
| --------- | -------------------------------------------- |
| persist() | Makes Transient → Persistent                 |
| save()    | Hibernate-specific version of persist        |
| find()    | Fetches entity and returns Persistent entity |
| getById() | Returns managed entity (usually proxy/lazy)  |

# Relationship Between EntityManager and Persistence Context
- EntityManager controls Persistence Context

When you call:
```
entityManager.persist(p);
```
Actually:
```
EntityManager adds entity into Persistence Context
```

When transaction commits:
```
Persistence Context syncs with DB
```

# Hibernate Entity Lifecycle
In Hibernate, every entity object goes through different states during its lifetime.

Transient → New object
Persistent → Managed by Hibernate
Detached → Not tracked anymore
Removed → Deleted entity

# 1. Transient State (New State)
Object is created using new keyword but:

- The object exists only in Java memory.
- Hibernate does NOT track it.
- Database has no record of it.

Example
```
Employee emp = new Employee();

emp.setName("Rahul");
```

At this stage:

- Object only exists in JVM memory
- Hibernate does not track it

# 2. Persistent State (Managed State)
- The object is now managed by Hibernate.
- Persistent entities always live inside Persistence Context.
- Any changes are automatically tracked.

When:
- save()
- persist()
- find()
- getById()
is called.

Example
```
entityManager.persist(emp);
```

Now:
- Hibernate tracks object changes
- Any modification automatically updates DB

Example
```
emp.setSalary(50000);
```

Hibernate automatically generates:

```
UPDATE employee SET salary=50000;
```
This feature is called:

Dirty Checking


# 3. Detached State
- Object exists but is no longer managed by Hibernate.
- Now changes are NOT tracked.

Occurs when:
- Transaction/session closes.
- EntityManager closes
- detach() called
- clear() called

Example
```
entityManager.detach(emp);
```

Now:

- Changes are NOT tracked
- Updates are NOT saved automatically

Example
```
emp.setName("Amit");
```
No SQL update occurs.

# 4. Merge Detached Entity
To reattach:
```
entityManager.merge(p);
```
Now Hibernate tracks again.

# 5. Removed State
Entity marked for deletion.

Example
```
entityManager.remove(emp);
```

Hibernate generates:
```
DELETE FROM employee WHERE id = ?;
```

# Quick Interview Summary
| State      | Meaning                       |
| ---------- | ----------------------------- |
| Transient  | Object not managed            |
| Persistent | Managed by Hibernate          |
| Detached   | Was managed, now disconnected |
| Removed    | Marked for deletion           |


# Complete Lifecycle Flow
```
new Object()
    ↓
Transient
    ↓ persist()
Persistent
    ↓ detach()
Detached
    ↓ merge()
Persistent
    ↓ remove()
Removed
```

# Spring Boot Integration

Usually you write:
```
@Service
@Transactional
public class PatientService {

    @Autowired
    private PatientRepository repository;

    public void updatePatient() {

        Patient p = repository.findById(1L).get();

        p.setName("New Name");
    }
}
```
Spring Boot internally handles:

- transaction
- entity manager
- persistence context
- flush
- commit
- rollback

Automatically.

# Simple Visual Understanding
```
new Patient()
      ↓
Transient

persist()
      ↓
Persistent
(inside Persistence Context)

change fields
      ↓
Dirty Checking

@Transactional commit
      ↓
Flush
      ↓
SQL execution

detach()
      ↓
Detached

remove()
      ↓
Removed
```

# Overall Understanding
```
Entity Object
    ↓ managed by
EntityManager
    ↓ uses
Persistence Context
    ↓ synchronized during
Transaction
    ↓ updates
Database
```

# Interview Summary

## EntityManager
- EntityManager is the main JPA API used to interact with entities.
- It manages entity lifecycle states.
- It works using the Persistence Context.

## Entity Lifecycle
- Hibernate entity lifecycle describes how an entity moves between Transient, Persistent, Detached, and Removed states.

```
Transient → Persistent → Detached → Removed
```

## Transaction Management
- Transaction management controls when Persistence Context is created, flushed, committed, or rolled back to ensure data consistency.

## Persistence Context
- Persistence Context is Hibernate’s first-level cache where Persistent entities are stored, tracked, and synchronized with the database.

## Dirty Checking
- Dirty checking is Hibernate’s mechanism that automatically detects changes in Persistent entities and generates UPDATE SQL during flush/commit.