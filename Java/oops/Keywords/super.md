# super
super is a keyword used in a subclass to access the immediate parent class's methods, variables, and constructors.

# 🔹 Use cases:
Access parent class variables
Call parent class methods
Call parent constructor


# Example
```
class Parent {

    int x = 10;

    Parent() {
        System.out.println("Parent Constructor");
    }

    void show() {
        System.out.println("Parent Method");
    }
}

class Child extends Parent {

    Child() {
        super(); // Calls parent constructor
    }

    void display() {
        System.out.println(super.x); // Access parent variable
        super.show();                // Call parent method
    }

    public static void main(String[] args) {
        Child obj = new Child();
        obj.display();
    }
}
```

- Access parent variable: super.x
- Call parent method: super.show();
- Call parent constructor: super();