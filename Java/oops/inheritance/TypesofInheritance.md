# Types of Inheritance

## 1. Single Inheritance
➡ One child inherits from one parent
```
A → B
```

## 2. Multilevel Inheritance
➡ Chain of inheritance (grandparent → parent → child)
```
A → B → C
```

## 3. Hierarchical Inheritance
➡ Multiple children inherit from the same parent
```
    A
   / \
  B   C
```

## 4. Multiple Inheritance (via Interfaces only in Java)
➡ One class inherits from multiple sources
```
A   B
 \ /
  C
```

## 5.Hybrid Inheritance (Combination)
➡ Mix of two or more types (not directly supported with classes in Java)
```
    A
   / \
  B   C
       \
        D
```
# 👉 Java supports Multiple & Hybrid inheritance only through interfaces, not classes.


## ❌ Why NOT with Classes?
👉 Because of ambiguity (Diamond Problem)

## 🔹 Problem Diagram
```
    A
   / \
  B   C
   \ /
    D
```
👉 If both B and C have show() → \
D.show() becomes confusing ❌ \
➡ Java doesn’t know which one to call

# ✅ Solution in Java → Interfaces
👉 Java allows multiple inheritance safely using interfaces


## 🔹 Example
```
interface A {
    void show();
}

interface B {
    void display();
}

class C implements A, B {
    public void show() {}
    public void display() {}
}
```

## 🔹 Structure
```
A     B
 \   /
   C
```


# 🔥 One-Line Answer

“Java avoids multiple inheritance with classes due to the diamond problem, but allows it using interfaces where the implementing class resolves ambiguity.”



# 🔥 Hybrid Inheritance (Mix)
👉 Combination of class + interface inheritance

## 🔹 Example Structure
```
A (interface)
     |
     C (class)
     |
     D (class)
    /
B (interface)
```
👉 Uses:

* extends → class inheritance
* implements → multiple interfaces