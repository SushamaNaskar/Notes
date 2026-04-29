# Object-Oriented Programming
- OOP treats data as a critical element.
- It does not allow data to flow freely around the system.
- It ties data more closly to the functions that operate on it and protests it from accidental modification from outside functions.

# OOPS Principles
1) Encapsulation
2) Abstraction
3) Polymorphism
4) Inheritance

# Encapsulation
-> Encapsulation is the process of wrapping data and methods into a single unit (class).
- and restricting direct access to the data by declaring variables as private and providing public getter and setter methods to acess these variables.
-> Encapsulation provides data hiding

# Abstraction
- Hiding implementation details and showing only essential features
- Abstraction is the process of hiding internal implementation details and exposing only essential functionality to the user.
-> We can achieve Abstraction using interfaces & abstract classes
Ex : we will not bother about how laptop working internally
We will not bother about how car engine starting internally

# Polymorphism
-> Polymorphism is the ability of a method or object to take multiple forms.
-> Types of Polymorphism in Java
  * 1️⃣ Compile-Time Polymorphism (achieved through method overloading)

    Same method name, but different parameters (type, number, or order)

    ✔ Decided at compile time

  * 2️⃣ Runtime Polymorphism (achieved through method overriding using inheritance.)
 
    Same method name + same parameters, but different implementation in child class

    ✔ Achieved using inheritance
    ✔ Decided at runtime (dynamic binding)


# Inheritance
<!-- -> Inheritance is an OOP concept where one class acquires the properties and methods of another class using the extends keyword. -->
-> Inheritance provides a way to create a new class from an existing class. 
-> A child class inherits (or extends) the properties and methods of a parent class.
Ex: child will inherit the properties from parent

-> The main aim of inheritance is code re-usability
Note: In java, one child can't inherit properties from two parents at a time