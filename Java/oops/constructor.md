# Constructors
- A constructor is a special method used to initialize objects when they are created.

## Key Characteristics
- Same name as the class
- No return type (not even void)
- Automatically called when object is created
- Used to initialize variables

```
class Student {
    String name;
    int age;

    // Constructor
    Student(String n, int a) {
        name = n;
        age = a;
    }

    void display() {
        System.out.println(name + " " + age);
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Sushama", 22);
        s1.display();
    }
}
```

# Types of Constructors

## 1. Default Constructor
👉 Provided by Java automatically if you don’t create one.
👉 Initializes with default values (0, null, false)
```
class Test {
    int x;

    // Default constructor (given by Java)
}
```

## 2. No-Argument Constructor
👉 Created by programmer, but takes no parameters.
```
class Test {
    int x;

    Test() {
        x = 10;
    }
}
```

## 3. Parameterized Constructor
👉 Used to pass values while creating object.

```
Test(int x) {
    this.x = x;
}
```

## 4. Copy Constructor (Not built-in in Java, but can be created)
- A copy constructor creates a new object by copying the values of another object of the same class.
- Takes object of same class as parameter
- Used to clone/copy object data

```
class Test {
    int x;

    Test(Test t) {
        this.x = t.x;
    }
}
```

# 🔹 Constructor Chaining
👉 Calling one constructor from another using this()

```
class Test {
    int x, y;

    Test() {
        this(10, 20); // calls parameterized constructor
    }

    Test(int x, int y) {
        this.x = x;
        this.y = y;
    }
}
```

# 🔹 Important Interview Points
Constructor is not inherited
Can be overloaded
Used with new keyword
If you define any constructor → Java will NOT provide default one

# 🔹 Super Short Summary (Revise Fast)
Constructor = object initialization
Runs automatically when object is created
Same name as class
No return type
Types: Default, No-arg, Parameterized, Copy