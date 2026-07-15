# Static
- static is a keyword used to declare class-level members such as 
   - variables, 
   - methods,
   - blocks/ initialization blocks and 
   - nested classes. 
- A static member belongs to the class, so only one copy exists and it is shared by all instances/objects of that class.

# Static Variable
- Belongs to the class.
- Shared by all objects.
- Memory is allocated only once when the class is loaded.

```
class Test {
    static int count = 0;

    Test() {
        count++;
    }
}

new Test();
new Test();
new Test();

System.out.println(Test.count);

```

## Output
  3


# Static Method
- Belongs to the class.
- Can be called without creating an object.
- Cannot directly access instance (non-static) members or methods.
- Static methods cannot be overridden. They are hidden.
- Static Method can be Overload

## Static Context Rules

✅ Allowed
Static method → Static variable
Static method → Static method
Instance method → Static members
Instance method → Instance members


❌ Not allowed directly
Static method → Instance variable
Static method → Instance method


## Static Method Hiding
```
class Parent {

    static void show() {
        System.out.println("Parent");
    }

}

class Child extends Parent {

    static void show() {
        System.out.println("Child");
    }

}
```

```
Parent obj = new Child();

obj.show();
```

### Output
```
Parent
```

### Reason:
Static methods use the reference type.


# Static Method Overloading

```
static void show() {}

static void show(int x) {}
```


# Static Block
- Used to initialize static data.
- Runs only once when the class is loaded.

```
class Test {

    static {
        System.out.println("Static Block");
    }

}
```

## Multiple Static Blocks
Executed in order.
```
static {
    System.out.println("First");
}

static {
    System.out.println("Second");
}
```

## Initialization Order
```
class Test {

    static {
        System.out.println("Static");
    }

    {
        System.out.println("Instance");
    }

    Test() {
        System.out.println("Constructor");
    }

    public static void main(String[] args) {
        new Test();
    }
}
```

Output
```
Static
Instance
Constructor
```

# Static Nested Class

Top-level class can not be static.

```
static class Test {}.  ❌ Not allowed
```

Nested class can be static.

```
✅ Allowed

class Outer {

    static class Inner {

    }

}

```

# Key points:
- Class-level member
- One copy shared by all objects
- Can be called without creating an object.
- Static methods cannot access instance members directly
- Static methods can be overloaded
- Static methods cannot be overridden (method hiding)
- Static block executes once when the class is loaded
- Constructors cannot be static
- Top-level classes cannot be static
- Nested classes can be static
<!-- - Memory allocated once in Method Area -->
<!-- - Can access only static members directly

```
class Demo {
    int x = 10;           // instance variable
    static int y = 20;    // static variable

    static void show() {
        System.out.println(y); // ✅ allowed
        // System.out.println(x); ❌ not allowed, Because x needs an object
    }
}
``` -->


# instance variable
- An instance variable is a variable that belongs to an object (instance) of a class, not to the class itself.

static = shared (class level)
instance = personal (object level)