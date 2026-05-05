# string
-> String is an object that represents sequence of characters.

# Key Characteristics
## 1. Strings are objects
In Java, String is a class:

```
String str = new String("Hello");
```
## 2. Strings are immutable
Once created, a string cannot be changed

👉 Immutable means:
- Original string NEVER changes
- Operations return new string


```
String str = "Hello";
str.concat(" World");

System.out.println(str); // Output: Hello
```



# Creating String object in Java
1) By string literal.
2) By new keyword.
3) By converting character arrays into strings

# Working with String literal
```
String str = "hello";
```

# By new keyword.

```
String str = new String("hello");
```


# 🧵 String Literal vs String Object in Java

## 🔹 1. String Literal (Stored in String Pool)
-> In Java, the String Constant Pool (SCP) is a special memory area inside the heap used to store string literals.
-> Whenever a string literal is created, the JVM first checks the pool.
-> If the string already exists, the existing reference is reused.
-> Otherwise, a new string object is created in the pool.

## example one

```
String s1 = "Java";
String s2 = "Java";
```

## ✅ What happens?
- Stored in String Constant Pool
- JVM checks: “Already exists?”
  * YES → reuse same object

👉 So:

```
s1 == s2   // true ✅ (same reference)
```

## example 2
```
String str = "Hello";
str += "world";         // DOES change reference
```
- "hello" will be stored in string constant pool
- for str+="world":
      1. a new string  "hello world" is also added in string pool
      2. and now str contains the new reference of "hello world"
      3. but both "hello" and "hello world" are present inside string pool

```
String Pool           
------------          
"Hello"      (still exists)

"Helloworld" <-------- str

```

```
String Pool contains:
- "Hello"
- "Helloworld"

str → "Helloworld"
```

## 🔹 2. String Object (Using new keyword)
- When we create a string using new, JVM creates a new object in the heap.
- Additionally, the string literal is stored in the String Pool only if it is not already present.

```
String s = new String("Hello");
```

```
String Pool        Heap
------------       ------------------
"Hello"        <--  new String("Hello")
                     ↑
                     s
```

# Interview tricky questions

## question 1
```
String s1 = "Java";
String s2 = "Java";
String s3 = new String("Java");

System.out.println(s1 == s2); // true
System.out.println(s1 == s3); // false
System.out.println(s1.equals(s3)); // true
```