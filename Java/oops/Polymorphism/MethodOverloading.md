# Method overloading
-  Method overloading is when multiple methods in the same class have the same name but different parameters.
- Method overloading must exist within the same class (or same inheritance chain after compilation).

# ✅ Key Rules (5-sec recall trick)

👉 “Same name, different input”

- Method name → SAME 
- Parameters → DIFFERENT (type / number / order)
- Return type alone cannot differentiate methods
- Can overload:
  * Static methods ✅
  * Constructors ✅

# Example
```
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

# ⚡ How JVM Handles It
- Decided at compile time
- Based on method signature
- No runtime confusion → faster

# Return type alone cannot differentiate methods
```
int add(int a, int b)
double add(int a, int b) // ERROR
```

# Method overloading must exist within the same class (or same inheritance chain after compilation)
```
class A {
    void show(int a) {
        System.out.println("A");
    }
}

class B extends A {
    void show(double a) {
        System.out.println("B");
    }
}
```
👉 Now class B has both methods:

 * show(int) (inherited)
 * show(double) (its own)

✔️ This becomes overloading in class B only 