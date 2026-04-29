# Method Overriding (Runtime Polymorphism)
<!-- - Method overriding is when a child class provides a specific implementation of a method already defined in its parent class. -->

- Same method name + same parameters, but different implementation in child class

# Example
```
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

# Rules of Method Overriding (Interview Gold)
- Same method name
- Same parameters
- Same or covariant return type
- Cannot reduce access level
- Cannot override final, static, or private methods


## 🔥 Runtime Behavior (VERY IMPORTANT)

```
class A {
    static void staticMethod() {
        System.out.println("Static A");
    }

    void instanceMethod() {
        System.out.println("Instance A");
    }
}

class B extends A {
    static void staticMethod() {
        System.out.println("Static B");
    }

    void instanceMethod() {
        System.out.println("Instance B");
    }
}


```

```
A obj = new B();

obj.staticMethod();
obj.instanceMethod();
```

👉 Output:

```
Static A
Instance B
```

🧠 Why? \
Because of: \
 👉 Runtime Polymorphism (Dynamic Method Dispatch) \
 👉 Static methods are resolved at compile time using the reference type,  \
 👉 while instance methods are resolved at runtime using the actual object type.

🧠 Memory Trick

👉 Static = Structure (class-level) \
👉 Instance = Behavior (object-level)

| Feature         | Static Method        | Non-Static Method (Instance Method) |
| --------------- | -------------------- | ----------------------------------- |
| Resolution Time | Compile-time         | Runtime                             |
| Based On        | **Reference Type**   | **Object Type**                     |
| Polymorphism    | ❌ No (No overriding) | ✔ Yes (Method overriding)           |
| Concept Used    | Method Hiding        | Dynamic Method Dispatch             |
| Memory Binding  | Early Binding        | Late Binding                        |
| Can Override?   | ❌ No                 | ✔ Yes                               |
| Keyword Used    | `static`             | No keyword needed                   |





# Covariant Return Type
- A method in the child class can return a subclass type of the parent method’s return type.
- For example:
  * Integer is a subclass of Number
  * String is a subclass of Object
- Covariance works only with objects
- Primitive types are not part of inheritance hierarchy


## valid Covariant Return Type
```
class A {
    Number getValue() {
        return 10;
    }
}

class B extends A {
    Integer getValue() {  // ✔ valid
        return 20;
    }
}
```

## valid object return type
```
class Animal {}

class Dog extends Animal {}

class A {
    Animal getAnimal() {
        return new Animal();
    }
}

class B extends A {
    Dog getAnimal() {  // ✔ valid
        return new Dog();
    }
}
```

## Invalid Covariant
❗ You cannot go upward in hierarchy
```
class A {
    Integer getValue() {
        return 10;
    }
}

class B extends A {
    Number getValue() {  // ❌ invalid
        return 20;
    }
}
```

## Primitive Return Type Trap
- Covariance works only with objects
- Primitive types are not part of inheritance hierarchy

```
class A {
    int getValue() {
        return 10;
    }
}

class B extends A {
    long getValue() {  // ❌ invalid
        return 20;
    }
}
```

## String vs Object
```
class A {
    Object getData() {
        return "Hello";
    }
}

class B extends A {
    String getData() {  // ✔ valid
        return "Hi";
    }
}
```

# Access Level Order (Important)
From most restrictive → least restrictive:
```
private < default < protected < public
```
👉 Child method must go same or more accessible, never less.

# allowed or valid access level order
## 1. Protected → Public
```
class A {
    protected void show() {}
}

class B extends A {
    public void show() {}  // ✔
}
```

## Default → Protected
```
class A {
    void show() {}  // default
}

class B extends A {
    protected void show() {}  // ✔
}
```

# Compilation erros
## 1. Public → Protected
```
class A {
    public void show() {}
}

class B extends A {
    protected void show() {}  // ❌
}
```

## 2. Protected → Default
```
class A {
    protected void show() {}
}

class B extends A {
    void show() {}  // ❌
}
```

# Cannot override final, static, or private methods
- private methods are NOT inherited, So this is not overriding, it's a new method
- final methods cannot be overridden at all -> Compilation error
- static method follows method hiding

## Private Method Trap (VERY IMPORTANT)
```
class A {
    private void show() {}
}

class B extends A {
    void show() {}  // ✔
}
```

✅ Answer:

Valid

👉 Why?
- private methods are NOT inherited
- So this is not overriding, it's a new method

## Final Trick
```
class A {
    public final void show() {}
}

class B extends A {
    public void show() {}  // ❌
}
```
❌ Answer:

Compilation error

👉 final methods cannot be overridden at all

# static Method → ❌ Not Overridden (Hidden)
```
class A {
    static void show() {
        System.out.println("A");
    }
}

class B extends A {
    static void show() {
        System.out.println("B");
    }
}
```

⚠️ Important:

✔ Compiles
❌ Not overriding → method hiding

🧠 Why?
- Static methods are resolved at compile time
- Based on reference type, not object


# Method Overriding VS Method Hiding

Method Overriding = runtime polymorphism (based on object)
Method Hiding = compile-time resolution (based on reference)

- Method overriding occurs when a subclass provides a new implementation of a parent class instance method and is resolved at runtime based on the object type.
- Method hiding occurs when a subclass defines a static method with the same signature as the parent, and it is resolved at compile time based on the reference type.