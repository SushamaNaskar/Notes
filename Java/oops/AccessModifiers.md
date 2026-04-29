# 🔐 Access Modifiers in Java
- Access modifiers control who can access variables, methods, and classes.

```
private < default < protected < public
(most restricted → least restricted)
```

# 1️⃣ private

👉 Accessible only inside the same class \

Example:
```
class A {
    private int x = 10;

    void show() {
        System.out.println(x); // ✅ allowed
    }
}
```

❌ Not accessible:

 * Outside class 
 * Even in subclass
 * not even it's object can access it directly

# 2️⃣ default (no keyword)
👉 Accessible only within the same package

Example:
```
class A {
    int x = 10; // default
}
```

✅ Accessible:

 * Same package classes

❌ Not accessible:

 * Outside package 

 # 3️⃣ protected

👉 Accessible:
 * Same package ✅
 * Subclasses (even in different package) ✅

 Example:
 ```
 class A {
    protected int x = 10;
}
```

# 4️⃣ public

👉 Accessible from anywhere

Example:
```
class A {
    public int x = 10;
}
```

# 🧠 Memory-Level Understanding (Interview Gold)

Think like this:

private → Locked inside class 🔒 \
default → Package-level sharing 📦 \
protected → Package + inheritance bridge 🌉 \
public → Open to world 🌍

# Quick Comparison Table
| Modifier  | Same Class | Same Package | Subclass (diff pkg) | Outside |
| --------- | ---------- | ------------ | ------------------- | ------- |
| private   | ✅          | ❌            | ❌                   | ❌       |
| default   | ✅          | ✅            | ❌                   | ❌       |
| protected | ✅          | ✅            | ✅                   | ❌       |
| public    | ✅          | ✅            | ✅                   | ✅       |
