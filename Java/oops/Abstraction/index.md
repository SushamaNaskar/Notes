# Abstraction (Core Idea)
Abstraction = Hiding implementation details and showing only essential features

👉 Real-world example: \
You use a switch → you don’t know internal wiring → only ON/OFF matters.

# 🔹 Two Ways to Achieve Abstraction in Java
1. Abstract Class
2. Interface

# Abstract Class
- A class that can have both abstract and non-abstract methods

## ✔️ Key Points:
- Declared using abstract keyword
- Can have:
  * Abstract methods (no body)
  * Concrete methods (with body)
- Can have constructors
- Can have instance variables
- Supports single inheritance only

## ✔️ Example:
```
abstract class Vehicle {

    // ✔ Instance variable
    String brand;

    // ✔ Constructor
    Vehicle(String brand) {
        this.brand = brand;
        System.out.println("Vehicle constructor called");
    }

    // ✔ Abstract method (no body)
    abstract void start();

    // ✔ Concrete method (with body)
    void displayBrand() {
        System.out.println("Brand: " + brand);
    }
}

// ✔ Single inheritance (only one parent allowed)
class Car extends Vehicle {

    Car(String brand) {
        super(brand);
    }

    // Implementing abstract method
    void start() {
        System.out.println("Car starts with key");
    }
}

// Main class to test
public class Main {
    public static void main(String[] args) {
        Car c = new Car("Toyota");
        c.displayBrand();
        c.start();
    }
}
```

# Interface
- A completely abstract blueprint (until Java 7), now slightly flexible

## ✔️ Key Points:
- Methods are public & abstract by default
- Variables are public static final (constants)
- Supports multiple inheritance
- From Java 8:
  * default methods
  * static methods
- From Java 9:
  * private methods (inside interface)

## ✔️ Example:

```
interface Animal {
    void sound();   // abstract by default
}

class Dog implements Animal {
    public void sound() {
        System.out.println("Barks");
    }
}
```