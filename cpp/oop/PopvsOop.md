# Procedure-Oriented Programming

Procedure-oriented programming basically consists of writing a list of instuctions(or actions) for the computer to follow, and organizing these instructions into groups known as functions. The primary focus is on functions.

While we cocentrate on the development of functions, very little attention is given to the data that are being used by various functions.

In a multi-function program, many data items are placed as global so that they may be accessed by all the functions. Each function may have its own local data.

## Disadvantages
- Global data are more vulnerable to an inadvertent change by a function.
- In a large program it is very difficult to identify What data is used by which function.
- In case we need to revise an external data structure, we also need to revise all functions that access the data. This provides an opportunity for bugs to creep in.
- It does not model real workd problems very well. This is because functions are action-oriented and do not really correspond to the elements of the problems.

## Characteristics
- Emphasis is on doing things(algorithms).
- Large programs are divided into smaller programs known as functions.
- Most of the functions share global data.
- Data move openly around the system from function to functions.
- Functions transform data from one from to another.

# Object-Oriented Programming

OOP treats data as a critical element in the program development and does not allow it to flow freely around the system. It ties data more closly to the functions that operate on it and protests it from accidental modification from outside functions.

OOP allows decompositio of a problem into a number of entities called objects and then builds data and functions around these objects.