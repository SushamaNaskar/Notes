# 🎯 Final Pattern You Must Remember
- Static → Reference type → Compile time
- Instance → Object type → Runtime
- Constructor → Parent first
- Private → No overriding
- Final → Cannot override

# 🔥 Q1: Static vs Instance
```
class A {
    static void show() { System.out.println("A static"); }
    void display() { System.out.println("A display"); }
}

class B extends A {
    static void show() { System.out.println("B static"); }
    void display() { System.out.println("B display"); }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
        obj.display();
    }
}
```

## ✅ Output

```
A static
B display
```

## 🧠 Explanation
- show() → static → resolved using reference type (A) → method hiding
- display() → instance → resolved using object type (B) → overriding

# 🔥 Q2: Constructor + Overriding
```
class A {
    A() {
        System.out.println("A constructor");
        show();
    }

    void show() {
        System.out.println("A show");
    }
}

class B extends A {
    B() {
        System.out.println("B constructor");
    }

    void show() {
        System.out.println("B show");
    }
}

public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```

## ✅ Output
```
A constructor
B show
B constructor
```

# 🧠 Explanation (VERY IMPORTANT)
- Parent constructor runs first
- Inside A() → show() is called
- Due to runtime polymorphism, B.show() runs
- Even before B constructor executes

👉 This is a classic constructor + overriding trap

# 🔥 Q3: Static inside Constructor
```
class A {
    A() {
        show();
    }

    static void show() {
        System.out.println("A static");
    }
}

class B extends A {
    static void show() {
        System.out.println("B static");
    }
}

public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```

## ✅ Output

```
A static
```

## 🧠 Explanation
- Static methods are resolved at compile time
- A() calls show() → compiler binds to A.show()
- No runtime polymorphism for static methods

# Q4: Private Method Trap

```
class A {
    A() {
        show();
    }

    private void show() {
        System.out.println("A private");
    }
}

class B extends A {
    void show() {
        System.out.println("B show");
    }
}

public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```

## ✅ Output
```
A private
```

## 🧠 Explanation
- private methods are not inherited
- So no overriding happens
- A() calls its own show() only

# Q5: Final Method Trap
```
class A {
    final void show() {
        System.out.println("A final");
    }
}

class B extends A {
    void show() {
        System.out.println("B show");
    }
}
```

## ❌ Output
```
Compilation Error
```

## 🧠 Explanation
- final methods cannot be overridden
- Compiler blocks it immediately

# Q6: Constructor + Static + Instance
```
class A {
    A() {
        staticMethod();
        instanceMethod();
    }

    static void staticMethod() {
        System.out.println("A static");
    }

    void instanceMethod() {
        System.out.println("A instance");
    }
}

class B extends A {
    static void staticMethod() {
        System.out.println("B static");
    }

    void instanceMethod() {
        System.out.println("B instance");
    }
}

public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```

## ✅ Output
```
A static
B instance
```

## 🧠 Explanation
- staticMethod() → compile-time → A version
- instanceMethod() → runtime → B version

# Q7: Multi-level Inheritance
```
class A {
    void show() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("B");
    }
}

class C extends B {
    void show() {
        System.out.println("C");
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new C();
        obj.show();
    }
}
```

## ✅ Output
```
C
```

## 🧠 Explanation
- Runtime polymorphism
- Actual object = C → method from C runs

## Q8: Static Reference Confusion
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

public class Test {
    public static void main(String[] args) {
        B obj = null;
        obj.show();
    }
}
```

## ✅ Output
```
B
```
## 🧠 Explanation
- No object needed for static methods
- Resolved using reference type (B)
- null does NOT matter


# 🔥 Q1: Access + Overriding
```
class A {
    protected void show() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("B");
    }
}
```

## ✅ Output
```
compilation error
```

## 🧠 Explanation
- protected → default = reduced access
- Overriding cannot reduce visibility

# Q2: Private + Return Type
```
class A {
    private Number getValue() {
        return 10;
    }
}

class B extends A {
    public Integer getValue() {
        return 20;
    }
}
```
## ✅ Output
```
valid
```
## 🧠 Explanation
- private method is not inherited
- So B creates a new method
- Covariant return type is irrelevant here

# Q3: Static + Return Type
```
class A {
    static Number getValue() {
        return 10;
    }
}

class B extends A {
    static Integer getValue() {
        return 20;
    }
}
```

## ✅ Output
```
valid (Method Hiding, NOT overriding)
```

## 🧠 Explanation
- Static methods → method hiding
- Covariant return type is allowed

# Q4: Final + Access Modifier
```
class A {
    public final void show() {
        System.out.println("A");
    }
}

class B extends A {
    protected void show() {
        System.out.println("B");
    }
}
```

## ✅ Output
```
compile error
```

## 🧠 Explanation
- final method → cannot be overridden at all
- Access modifier doesn’t even matter here

# Q5: Static + Access + Runtime
```
class A {
    public static void show() {
        System.out.println("A static");
    }
}

class B extends A {
    public static void show() {
        System.out.println("B static");
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
    }
}
```

## ✅ Output
```
A static
```

## 🧠 Explanation
- show() → static → resolved using reference type (A) → method hiding

# Q6: Return Type + Access Modifier
```
class A {
    protected Number getValue() {
        return 10;
    }
}

class B extends A {
    public Integer getValue() {
        return 20;
    }
}
```

## ✅ Output
```
VALID
```

## 🧠 Explanation
- acess level has been increaced from protected -> public
- Integer in a subclass of Number , so covariant return type rule is also valid

# Q7: Static + Instance Mix
```
class A {
    static void show() {
        System.out.println("A static");
    }
}

class B extends A {
    void show() {
        System.out.println("B instance");
    }
}
```

## ✅ Output
```
Compilation Error
```

## 🧠 Explanation
- You cannot override static with instance
- Method signature conflict

# Q8: Private + Constructor + Overriding
```
class A {
    A() {
        show();
    }

    private void show() {
        System.out.println("A private");
    }
}

class B extends A {
    public void show() {
        System.out.println("B public");
    }
}

public class Test {
    public static void main(String[] args) {
        new B();
    }
}
```

## ✅ Output
```
A private
```

## 🧠 Explanation
- private methods are not inherited
- So no overriding happens
- A() calls its own show() only

# Q9: Final + Static
```
class A {
    final static void show() {
        System.out.println("A");
    }
}

class B extends A {
    static void show() {
        System.out.println("B");
    }
}
```

## ✅ Output
```
error
```

## 🧠 Explanation
- final + static → method cannot be hidden or overridden

# Q10: Covariant + Static
```
class A {
    static Object getData() {
        return "A";
    }
}

class B extends A {
    static String getData() {
        return "B";
    }
}
```

## ✅ Output
```
valid
```

## 🧠 Explanation
- String is a subclass of object

# Q11: Access Modifier Edge Case
```
class A {
    void show() {
        System.out.println("A");
    }
}

class B extends A {
    private void show() {
        System.out.println("B");
    }
}
```
## ✅ Output
```
error
```

## 🧠 Explanation
- access level cannot be reduced

## Q12: Everything Mixed (🔥🔥🔥)
```
class A {
    public Number getValue() {
        return 10;
    }
}

class B extends A {
    private Integer getValue() {
        return 20;
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        System.out.println(obj.getValue());
    }
}
```
## ✅ Output
```
error
```

## 🧠 Explanation
- access level cannot be reduced