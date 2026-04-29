# Dependency Injection
👉 Dependency Injection is a design pattern where a class receives its dependencies from outside instead of creating them itself, promoting loose coupling, flexibility, and easier testing.

<!-- - Dependency Injection is a design pattern
- It aims to decouple classes from their dependencies, making code more flexible, testable, and maintainable.
- that allows a class to receive its dependencies (objects it relies on) from an external source rather than creating them internally using the new keyword. -->
<!-- - Dependency Injection is a design pattern where an object’s dependencies are provided from outside rather than the object creating them itself. -->

# First Understand “Dependency”

A dependency is something a class needs to work. like objects it relies on.

## Example:

```
class Engine {
    void start() {
        System.out.println("Engine started");
    }
}

class Car {
    Engine engine = new Engine(); // dependency

    void drive() {
        engine.start();
        System.out.println("Car is moving");
    }
}
```

👉 Here:
Car depends on Engine \
Engine = dependency

# Problem WITHOUT Dependency Injection ❌

```
Engine engine = new Engine();
```

## Issues:
❌ Tight coupling (Car is tightly bound to Engine) \
❌ Hard to test (cannot replace Engine with mock) \
❌ Hard to change (what if you want ElectricEngine?)

# Solution: Dependency Injection ✅
- Instead of creating the object, we inject it from outside

```
class Car {
    Engine engine;

    Car(Engine engine) {
        this.engine = engine;
    }

    void drive() {
        engine.start();
        System.out.println("Car is moving");
    }
}
```

Now:

```
Engine engine = new Engine();
Car car = new Car(engine);
```
👉 This is Dependency Injection

# Why DI is important:
- Loose coupling
- Easy testing
- Replace components easily

# Types of Dependency Injection

## 1. Constructor Injection ⭐ (Most important)
```
class Car {
    private Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }
}
```


✔ Best for:

Mandatory dependencies \
Immutable objects

## 2. Setter Injection

```
class Car {
    private Engine engine;

    public void setEngine(Engine engine) {
        this.engine = engine;
    }
}
```

✔ Best for:

Optional dependencies

## 3. Field Injection (used in Spring)
```
@Autowired
private Engine engine;
```
❗ Not recommended in interviews:

Hard to test \
Breaks encapsulation