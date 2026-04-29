# JVM Internal Memory Structure

```
JVM MEMORY
│
├── Method Area (Class Area)
├── Heap Memory
└── Stack Memory
```

# 📊 FULL MEMORY DIAGRAM

```
                JVM MEMORY
--------------------------------------------------

        METHOD AREA (Class Level Data)
        --------------------------------
        - Class metadata
        - Static variables
        - Method bytecode
        - Runtime constant pool

--------------------------------------------------

        HEAP MEMORY (Objects Area)
        --------------------------------
        [ Object 1 ]
        [ Object 2 ]
        [ Object 3 ]

--------------------------------------------------

        STACK MEMORY (Thread-wise)
        --------------------------------
        Thread 1 Stack:
            - Method calls
            - Local variables
            - References

        Thread 2 Stack:
            - Separate execution
```

# 🔹 1. Method Area
👉 Stores class-level information

## Contains:
 * Class structure (fields, methods) 
 * Static variables
 * Method code (bytecode)


 📌 Example:

 ```
 class Car {
    static int wheels = 4;
}
```

✔️ wheels is stored in Method Area \
✔️ Only one copy shared across all objects


## Class structure  =  Metadata of the class
👉 Class structure is the metadata of a class stored in the Method Area, including fields, methods, static variables, and constant pool.

```
class Student {
    int id;
    String name;

    void study() {
        System.out.println("Studying...");
    }
}
```
JVM does NOT store this as-is. \
It converts it into a .class file (bytecode) with a fixed structure.

It includes:
```
Class: Student
│
├── Class Name
├── Superclass (Object)
├── Fields (Variables)
│     ├── id : int
│     └── name : String
│
├── Methods
│     └── study()
│
├── Method Code (Bytecode)
│
├── Static Variables
│
└── Runtime Constant Pool
```

## Method Code:
👉 Method code is the bytecode instructions of a method that the JVM executes at runtime.

This is the actual compiled instructions of your method.

When you write:
```
void study() {
    System.out.println("Studying...");
}
```

👉 It becomes bytecode instructions like:
```
getstatic java/lang/System.out
ldc "Studying..."
invokevirtual println
return
```

## note
👉 If a class has a method like study():

✔ Method Area will store:

- 1. Method Definition (Metadata)
    * Method name → study
    * Return type → void
    * Parameters → none
    * Access modifier → default/public

* 2.Method Code (Bytecode)
 * Already compiled instructions from .class file


👉 “Yes, the Method Area stores both the method metadata (definition) and the already compiled bytecode of that method.”

# 🔹 2. Heap Memory
👉 Stores all objects

📌 Example:

```
Car c1 = new Car();
Car c2 = new Car();
```

✔️ Two separate objects created in heap \
✔️ Each object has its own instance variables

```
HEAP:
[Car Object - c1]
[Car Object - c2]
```

# 🔹 3. Stack Memory (🔥 Execution Area)
👉 Each thread has its own stack

## Contains:
 * Method calls
 * Local variables
 * Reference variables

 📌 Example:
 ```
 Car c1 = new Car();
 ```

 ✔️ c1 is stored in stack \
✔️ It holds address of object in heap


# 🧠 COMPLETE FLOW (Step-by-Step)

```
class Car {
    static int wheels = 4;
    int speed = 100;
}

public class Main {
    public static void main(String[] args) {
        Car c1 = new Car();
    }
}
```

# 🔁 What happens internally:

## ✅ Method Area
Car class loaded \
wheels = 4 stored

## ✅ Heap Memory 
Object created:
```
[ speed = 100 ]
```


## ✅ Stack Memory
```
main() frame:
c1 ─────▶ (address of object in heap)
```


#  Key Differences
| Feature      | Stack              | Heap     | Method Area        |
| ------------ | ------------------ | -------- | ------------------ |
| Stores       | References, locals | Objects  | Class-level data   |
| Scope        | Thread-specific    | Shared   | Shared             |
| Memory Speed | Fast ⚡             | Slower   | Medium             |
| Lifetime     | Method execution   | Until GC | Until class unload |


🧠 One-line Summary (Perfect Answer)

👉
Stack stores execution and references, Heap stores objects, and Method Area stores class-level data like static variables and bytecode.



# 🧠 What actually happens when a program starts?

```
1. JVM starts
2. Class is loaded → Method Area
3. main() is found
4. Stack is created → main() frame is pushed
```


# 🔹 Step-by-step (Crystal Clear)
✅ 1. JVM starts execution \
JVM loads your class (Main.class) \
This goes into Method Area

✅ 2. main() method is identified
```
public static void main(String[] args)
```

✅ 3. Stack is created \
✔️ A new stack (for main thread) is created \
✔️ A stack frame for main() is pushed

```
STACK MEMORY:

main() frame  ← first frame created
```


# 🔁 Example Flow

```
public static void main(String[] args) {
    test();
}

static void test() {}
```

Stack flow:

```
Step 1:
main()

Step 2:
test()
main()

Step 3 (test ends):
main()

Step 4 (program ends):
Stack empty
```