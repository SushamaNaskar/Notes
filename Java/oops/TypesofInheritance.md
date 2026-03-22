# Types of Inheritance

- Based upon superclasses and subclasses, there are the following five types of inheritance in general:

Single Inheritance → One child, one parent
Multilevel Inheritance → A → B → C chain
Hierarchical Inheritance → One parent, multiple children
Multiple Inheritance → One child, multiple parents
Hybrid Inheritance → Combination of multiple types

# Single Inheritance
- In single inheritance, there is only a single class extending from another class. We can take the example of the Vehicle class (Super class) and the Car class (Sub class).


```
class Vehicle {          //Base Vehicle class  

  private int topSpeed;
  public void setTopSpeed(int speed) {
    this.topSpeed=speed;
    System.out.println("The top speed is set to: "+ topSpeed);
  }

} 

class Car extends Vehicle { // sub class Car extending from Vehicle

  public void openTrunk() {  
    System.out.println("The Car trunk is Open Now"); 
  } 
  
} 

class Main {

  public static void main(String[] args) {  
    Car corolla = new Car(); 
    corolla.setTopSpeed(220);
    corolla.openTrunk();
  } 
  
}
```


# Multi-level Inheritance

When a class is derived from such a class which itself is derived from another class, this type of inheritance is called Multilevel Inheritance. Classes can be extended to any further levels as per the requirement of the model.

Let’s implement the three classes illustrated above:

A Car IS A Vehicle
A Prius IS A Car

```
class Vehicle {          //Base Vehicle class  

  private int topSpeed;

  public void setTopSpeed(int speed) {
    this.topSpeed=speed;
    System.out.println("The top speed is set to: "+ topSpeed);
  }
  
}

class Car extends Vehicle { // Derived from Vehicle Base for Prius

  public void openTrunk() {
    System.out.println("The Car trunk is Open Now!"); 
  } 

} 

class Prius extends Car {// Derived from Prius & can be base to any further class

  public void turnOnHybrid() {
    System.out.println("The Hybrid mode is turned on!"); 
  } 

} 

class Main {

  public static void main(String[] args) {
    Prius priusPrime = new Prius(); 
    priusPrime.setTopSpeed(220);
    priusPrime.openTrunk();
    priusPrime.turnOnHybrid();
  }

}
```

# Hierarchical Inheritance
- When more than one classes inherit from the same class, it is referred to as hierarchical inheritance. In hierarchical inheritance, more than one classes extend, as per the requirement of the design, from the same base class. The common attributes of these child classes are implemented inside the base class.

Example:

A Car IS A Vehicle
A Truck IS A Vehicle

```
class Vehicle {          //Base Vehicle class  

  private int topSpeed;

  public void setTopSpeed(int speed) {
    this.topSpeed=speed;
    System.out.println("The top speed of "+getClass().getSimpleName()+" is set to: "+ topSpeed);
  }

} 

class Car extends Vehicle { // Derived from Vehicle Base for Prius

  //implementation of Car class
} 

class Truck extends Vehicle {// Derived from Prius can be base to any further class

  //implementation of Truck class
} 

class Main {

  public static void main(String[] args) {
    Car corolla = new Car(); 
    corolla.setTopSpeed(220);

    Truck volvo = new Truck();
    volvo.setTopSpeed(120);
  } 

}
```

# Multiple Inheritance
- When a class is derived from more than one base class, i.e. when a class has more than one immediate parent classes, this type of inheritance is called Multiple Inheritance.
Example:

A Hyundai Elantra IS A Car.
A Hyundai Elantra IS A Sedan also.

# Hybrid Inheritance
- A type of inheritance which is a combination of Multiple and Multi-level inheritance is called hybrid inheritance.

A combustion engine is an engine
An electric motors engine is an engine
A Hybrid engine combines both combustion engine and electric motors.

# Note: In Java, Multiple and Hybrid inheritance are applicable using interfaces only.

# Multiple and Hybrid Inheritance in Java
- In Java, **Multiple and Hybrid inheritance are possible only using interfaces**, not classes.

# 2. Why Java Does NOT Support Multiple Inheritance with Classes

- Java does **not allow multiple inheritance using classes** to avoid ambiguity problems.

## Example (Not Allowed)

```java
class A {
    void show() {
        System.out.println("Class A");
    }
}

class B {
    void show() {
        System.out.println("Class B");
    }
}

// ❌ Not allowed in Java
class C extends A, B {
}
```
- This causes confusion because Java cannot determine which show() method should be executed.

# The Diamond Problem
- Multiple inheritance with classes can create the Diamond Problem.

     A
    / \
   B   C
    \ /
     D
If class D inherits from both B and C, and both inherit from A, calling a method from A becomes ambiguous.

Example:
```
d.show();
```
Java cannot determine whether the method should come from B or C.

To avoid this ambiguity, Java does not support multiple inheritance with classes.

# How Java Supports Multiple Inheritance Using Interfaces
- Java allows a class to implement multiple interfaces, enabling multiple inheritance safely.

Example
```
interface A {
    void show();
}

interface B {
    void display();
}

class C implements A, B {

    public void show() {
        System.out.println("Show from A");
    }

    public void display() {
        System.out.println("Display from B");
    }
}
```

Structure

```
A (interface)     B (interface)
        \         /
         \       /
           C

```
Class C inherits behavior from multiple interfaces.

# Hybrid Inheritance in Java
Hybrid inheritance is a combination of two or more inheritance types.

Example: Hierarchical + Multiple inheritance
Example
```
interface A {
    void methodA();
}

interface B {
    void methodB();
}

class C implements A {
    public void methodA() {
        System.out.println("Method A");
    }
}

class D extends C implements B {
    public void methodB() {
        System.out.println("Method B");
    }
}
```

structure
```
      A (interface)
          |
          C
          |
          D
        /
B (interface)
```

Here Java combines:

Class inheritance (extends)

Interface multiple inheritance (implements)

# Inheritance Support in Java
| Inheritance Type | Supported with Classes | Supported with Interfaces |
| ---------------- | ---------------------- | ------------------------- |
| Single           | Yes                    | Yes                       |
| Multilevel       | Yes                    | Yes                       |
| Hierarchical     | Yes                    | Yes                       |
| Multiple         | No                     | Yes                       |
| Hybrid           | No                     | Yes                       |
