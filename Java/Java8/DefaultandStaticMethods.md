# Default and Static Methods in Interfaces
Default and static methods in Java interfaces were introduced in Java 8 to make interfaces more powerful and flexible—especially for backward compatibility and utility behavior.


# Default Methods in Interfaces
A default method is a method inside an interface that has a body (implementation).

# Why it was introduced?
Before Java 8, if you added a new method to an interface, all implementing classes would break.

Default methods solve this by giving a default implementation.


## Syntax
```
interface Animal {
    default void sound() {
        System.out.println("Animal makes sound");
    }
}
```

## Example
```
interface Animal {
    default void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog implements Animal {
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound(); // uses default method
    }
}
```

## 🔑 Key Points
- Has method body
- Uses default keyword
- Can be overridden by implementing class
- Helps in backward compatibility

## Override Example
```
class Dog implements Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}
```


# Static Methods in Interfaces
A static method in an interface belongs to the interface itself, not objects.

## syntax
```
interface Animal {
    static void info() {
        System.out.println("Animals are living beings");
    }
}
```

## Example
```
interface Animal {
    static void info() {
        System.out.println("Animals are living beings");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal.info(); // called using interface name
    }
}
```
## 🔑 Key Points
- Belongs to interface, not class object
- Cannot be overridden
- Must be called using:
```
InterfaceName.methodName();
```


# When to Use What?

## Use default method when:

You want to add new behavior without breaking old code

## Use static method when:

You need utility/helper methods related to interface