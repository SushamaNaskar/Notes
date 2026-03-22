# Inheritance
- Inheritance provides a way to create a new class from an existing class. 
- The new class is a specialized version of the existing class such that it inherits all the non-private fields (variables) and methods of the existing class. 
- The existing class is used as a starting point or as a base to create the new class.

# Advantages of Inheritance

1. Re-usability: 
- we can implement inheritance which will result in avoiding redundant coding and will also save the programmer’s time and effort.
2. Avoiding Duplication of Code
3. Extensibility
- Using inheritance, one can extend the base class logic as per the business logic of the derived class. This is an easy way to upgrade or enhance specific parts of a product without changing the core attributes. An existing class can act as a base class to derive a new class having upgraded features.
4. Data Hiding
- The base class can decide to keep some data private so that it cannot be altered by the derived class. This concept is known as encapsulation.

# SuperClass (Parent Class or Base Class): 
- This class allows the re-use of its non-private members in another class.

# SubClass (Child Class or Derived Class): 
- This class is the one that inherits from the superclass.
- A child class has all non-private characteristics of the parent class.

# What does a child class have?
An object of the child class can use:

All non-private members defined in the child class.
All non-private members defined in the parent class.

# final
 Some classes cannot be inherited. Such classes are defined with the keyword, final. An example of such a class is the built-in Integer class - this class cannot have derived classes.


 # The extends Keyword
 - In Java, we have to use the keyword extends to implement inheritance:
 ```
 SubClass extends SuperClass{
//contents of SubClass
}
 ```
 -  In Java, a class can extend from only one other class at a time and a class cannot extend itself.

 # this
 - this keyword in Java is used to refer to the instance of the current class.

 # super
 - the super keyword in Java is used to refer to the SuperClass members from inside the immediate Subclass.
 -  The use of super comes into play when we implement inheritance.

 # Use cases of the super keyword

 1. Accessing parent class fields
 - Whenever a SuperClass and the immediate SubClass have any variables with the same name we use super to access the variables from the SuperClass inside the SubClass.

 2. Calling a parent class method
 - Whenever a SuperClass and the immediate SubClass have any methods with the same name we use super to access the methods from the SuperClass inside the SubClass.
 
 3. Using with constructors
 - Another very important use of the keyword super is to call the constructor of the SuperClass from inside of the constructor of the SubClass.

 ## Important Note: 
 - When you create an Object of a SubClass type at the same time, an Object of SuperClass type is created by calling implicitly the constructor of SuperClass.

 # The syntax of the constructor call is as follows:
 super();  //calls the (no argument) constructor if a no-argument constructor is defined in the SuperClass
 super(parameters); //calls the parameterized constructor of the SuperClass with matching parameters from the SubClass constructor


```
class Vehicle {              //base class of vehicle
  
    private String make;    //
    private String color;   // Vehicle Fields
    private int year;       //
    private String model;   //


    public Vehicle(String make, String color, int year, String model) {
        this.make = make;    //
        this.color = color;  // Constructor of Vehicle
        this.year = year;    //
        this.model = model;  //
    }

    public void printDetails() {  //public method to print details
        System.out.println("Manufacturer: " + make);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
        System.out.println("Model: " + model);
    }
  
}

class Car extends Vehicle {    //derived class of Car

    private String bodyStyle;  //Car field

    public Car(String make, String color, int year, String model, String bodyStyle) {
        super(make, color, year, model);  //parent class constructor
        this.bodyStyle = bodyStyle;       
    }

    public void carDetails() {  //details of car
        printDetails();         //calling method from parent class
        System.out.println("Body Style: " + bodyStyle);
    }
  
}
class Main {

    public static void main(String[] args) {
        Car elantraSedan = new Car("Hyundai", "Red", 2019, "Elantra", "Sedan"); //creation of car Object
        elantraSedan.carDetails(); //calling method to print details
    }
  
}

```

# this
-Call Another Constructor in the Same Class

Example
```
class Student {
    String name;
    int age;

    Student() {
        this("Unknown", 0); // calls another constructor
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

## How it works
- Student() constructor calls Student(String name, int age)
- This avoids duplicate code

So:
```
this() → calls constructor in the SAME class
```

# Why You Cannot Use Both Together this() and super()
- Java requires that constructor calls must be the first statement in a constructor.
- Example (❌ invalid):
```
class Dog extends Animal {
    Dog() {
        this();   // calls another constructor
        super();  // ❌ not allowed
    }
}
```

- Because:

* Both this() and super() must be first
* Only one first statement is possible
* So Java allows only one.

# Java Interview Questions: `this()` and `super()`

## 1. What Happens If `super()` Is Not Written?

### Question

```java
class Animal {
    Animal() {
        System.out.println("Animal constructor");
    }
}

class Dog extends Animal {
    Dog() {
        System.out.println("Dog constructor");
    }
}

public class Test {
    public static void main(String[] args) {
        Dog d = new Dog();
    }
}
```

### Answer

**Output**

```
Animal constructor
Dog constructor
```

### Explanation

Even if `super()` is not explicitly written, **Java automatically inserts `super()` as the first line** of the child constructor.

So the constructor behaves like this internally:

```java
Dog() {
    super();
    System.out.println("Dog constructor");
}
```

### Key Point

- If `super()` is not written, Java automatically calls the **parent class default constructor**.

---

# 2. What Happens If Parent Class Has No Default Constructor?

### Question

```java
class Animal {
    Animal(String name) {
        System.out.println(name);
    }
}

class Dog extends Animal {
    Dog() {
        System.out.println("Dog constructor");
    }
}
```

### Answer

❌ **Compilation Error**

### Explanation

Java automatically inserts:

```java
super();
```

But the parent class **does not have a no-argument constructor**, only:

```java
Animal(String name)
```

So Java cannot find `Animal()`.

### Correct Code

```java
class Dog extends Animal {
    Dog() {
        super("Tiger");
        System.out.println("Dog constructor");
    }
}
```

### Output

```
Tiger
Dog constructor
```

### Key Point

- If the parent class **does not have a default constructor**, the child class **must explicitly call `super(parameters)`**.

---

# 3. What Happens If `this()` Is Not the First Statement?

### Question

```java
class Student {

    Student() {
        System.out.println("Default constructor");
        this(10);
    }

    Student(int x) {
        System.out.println("Parameterized constructor");
    }
}
```

### Answer

❌ **Compilation Error**

### Explanation

Constructor calls must be **the first statement** in a constructor.

This is invalid:

```java
System.out.println("Default constructor");
this(10);   // ❌ not allowed
```

### Correct Code

```java
class Student {

    Student() {
        this(10);
        System.out.println("Default constructor");
    }

    Student(int x) {
        System.out.println("Parameterized constructor");
    }
}
```

### Output

```
Parameterized constructor
Default constructor
```

### Key Point

- `this()` must be **the first statement** in the constructor.

---

# Bonus Trick Question

### Question

```java
class A {
    A() {
        this();
    }
}
```

### Answer

❌ **Compilation Error: Recursive constructor invocation**

### Explanation

`A()` calls `A()` again:

```
A() → this() → A() → this() → infinite loop
```

Java detects this infinite recursion and throws a **compile-time error**.

---

# Quick Summary

| Concept | Description |
|------|-------------|
| `this()` | Calls another constructor in the same class |
| `super()` | Calls parent class constructor |
| Position | Must be the **first statement** |
| Usage | Only allowed inside constructors |
| Together | `this()` and `super()` **cannot be used together** in the same constructor |
