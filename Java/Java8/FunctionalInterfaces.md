# Functional Interfaces
- A Functional Interface is an interface that contains exactly one abstract method.
- also called Single Abstract Method interfaces (SAM Interfaces).

## Apart from one abstract method, a functional interface can also have the following methods
that do not count for defining it as a functional interface.
* Default methods
* Static methods
* Public methods inherited from the Object class/ Object class methods


# ✅ Why Functional Interfaces?
- They are mainly used for:
  * Lambda expressions
  * Method references
  * Functional programming in Java (Stream API, etc.)

# 🔹 Important Rules (Interview Focus)
- Only one abstract method allowed
- Can have:
    * default methods
    * static methods
- Can override methods from Object class
(like toString(), equals() — doesn't count)

# 🔹 Basic Example
  ```
  @FunctionalInterface
interface MyFunctionalInterface {
    void sayHello();  // Only ONE abstract method
}
```

Using Lambda:
```
MyFunctionalInterface obj = () -> {
    System.out.println("Hello!");
};

obj.sayHello();
```

# 🔹 Example With Parameters
```
@FunctionalInterface
interface Add {
    int sum(int a, int b);
}
```
Lambda:
```
Add add = (a, b) -> a + b;
System.out.println(add.sum(5, 3));  // 8
```

# 🔹 Example with Default Method

```
@FunctionalInterface
interface Demo {
    void show();  // abstract

    default void display() {
        System.out.println("Default method");
    }
}
```

# 🔹 @FunctionalInterface Annotation
- Optional but recommended
- Gives compile-time error if rules are broken


# 🔹 Built-in Functional Interfaces (VERY IMPORTANT)

- Consumer, Supplier, Function, and Predicate are built-in functional interfaces in Java used to represent behavior for lambda expressions.

- They are part of: 
 ```
 java.util.function package
 ```

 - Java provides many in java.util.function package:

| Interface        | Method              | Use                 |
| ---------------- | ------------------- | ------------------- |
| `Predicate<T>`   | `boolean test(T t)` | Condition check     |
| `Function<T, R>` | `R apply(T t)`      | Transform value     |
| `Consumer<T>`    | `void accept(T t)`  | Consume (print/log) |
| `Supplier<T>`    | `T get()`           | Provide value       |


| Functional Interface | Method Reference Example |
| -------------------- | ------------------------ |
| Consumer             | `System.out::println`    |
| Supplier             | `ArrayList::new`         |
| Function             | `String::toUpperCase`    |
| Predicate            | `String::isEmpty`        |



| Interface | Takes Input | Returns Output | Purpose         |
| --------- | ----------- | -------------- | --------------- |
| Consumer  | ✅ Yes       | ❌ No (void)    | Perform action  |
| Supplier  | ❌ No        | ✅ Yes          | Provide value   |
| Function  | ✅ Yes       | ✅ Yes          | Transform value |
| Predicate | ✅ Yes       | ✅ Boolean      | Test condition  |


| Interface | Role                      |
| --------- | ------------------------- |
| Consumer  | “Do something with input” |
| Supplier  | “Give me something”       |
| Function  | “Convert this to that”    |
| Predicate | “Check a condition”       |



# 🧠 Easy Memory Trick
- Consumer → Consume (eat, no return)
- Supplier → Supply (no input, returns a value)
- Function → Transform (input, return new value)
- Predicate → Check (true/false)


# 🔹 1. Consumer<T>
👉 "I take something and do something, but return nothing"

## ⚠️ Key Point
No return value → void \
Used for side effects (printing, saving, updating)

```
@FunctionalInterface
public interface Consumer<T> {
    void accept(T t);
}
```

✅ Example
```
import java.util.function.Consumer;

public class Test {
    public static void main(String[] args) {
        Consumer<String> c = s -> System.out.println(s);

        c.accept("Hello");
    }
}
```

Output:
```
Hello
```

## 🔥 Real Use (Streams)
```
list.forEach(System.out::println);
```

# 🔹 2. Supplier<T>

👉 "I give you something, but I don’t take anything"

## ⚠️ Key Point
* No input 
* Returns value
* Used for lazy generation

```
@FunctionalInterface
public interface Supplier<T> {
    T get();
}
```

✅ Example
```
import java.util.function.Supplier;

public class Test {
    public static void main(String[] args) {
        Supplier<Double> s = () -> Math.random();

        System.out.println(s.get());
    }
}
```

## 🔥 Real Use
```
Supplier<String> s = String::new;
```
👉 Creates a new empty string

# 🔹 3. Function<T, R>
👉 "I take something and return something else"

## ⚠️ Key Point
* Input → Output transformation
* Most commonly used interface

```
@FunctionalInterface
public interface Function<T, R> {
    R apply(T t);
}
```
## ✅ Example
```
import java.util.function.Function;

public class Test {
    public static void main(String[] args) {
        Function<String, Integer> f = s -> s.length();

        System.out.println(f.apply("Java"));
    }
}
```
## output
```
4
```

## 🔥 Real Use (Streams)
```
list.stream()
    .map(String::length)
    .forEach(System.out::println);
```
👉 map uses Function

## 🔹 4. Predicate<T>
👉 "I take something and return true/false"

## ⚠️ Key Point
* Always returns boolean
* Used for conditions

```
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);
}
```

## ✅ Example
```
import java.util.function.Predicate;

public class Test {
    public static void main(String[] args) {
        Predicate<Integer> p = n -> n > 10;

        System.out.println(p.test(15));
    }
}
```

## Output:
```
true
```

## 🔥 Real Use (Streams)
```
list.stream()
    .filter(s -> s.isEmpty());
```
👉 filter uses Predicate


# 🎯 One-line answer (interview ready)

👉 “Lambda expressions in Java can only be used where a functional interface is expected, because they provide implementation for its single abstract method.”