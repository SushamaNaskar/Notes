# GARBAGE COLLECTION
- Garbage collection (GC) is a process performed by the JavaScript engine to automatically free up memory that is no longer being used by the program. This helps in managing memory allocation efficiently and prevents memory leaks.
- JavaScript is a garbage-collected language, meaning that the execution environment is responsible for managing the memory required during code execution.
- The strategy for identifying the unused variables may differ on an implementation basis, though two strategies have traditionally been used in browsers: mark-and-sweep, and reference counting.


# Mark-and-Sweep
 It is used to identify and clean up memory that is no longer being used by the program (i.e., unreachable objects), helping to prevent memory leaks.

# How Mark-and-Sweep Works:
   The Mark-and-Sweep algorithm works in two phases:
   1. Mark Phase
   2. Sweep Phase