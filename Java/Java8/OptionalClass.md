# Optional Class
- The Optional class is a container object 
- used to avoid NullPointerException by representing a value that may or may not be present.

# 🔹 What is Optional?

Think of it like a box:

📦 Box has value → Optional.of(value)
📦 Box empty → Optional.empty()

Instead of returning null, methods return Optional.

# 🔹 Why use Optional?
Before Java 8:
```
String name = getName();
if (name != null) {
    System.out.println(name.length());
}
```
Problem:

- Easy to forget null check → ❌ NullPointerException

With Optional:
```
Optional<String> name = getName();
name.ifPresent(n -> System.out.println(n.length()));
```
- ✔ Safer
- ✔ More readable
- ✔ Forces you to think about absence of value

# 🔹 How to Create Optional

## 1. of() → value must NOT be null
```
Optional<String> opt = Optional.of("Java");
```
👉 If null → ❌ Exception

## 2. ofNullable() → can be null
```
Optional<String> opt = Optional.ofNullable(null);
```
👉 Safe → returns empty Optional

## 3. empty()
```
Optional<String> opt = Optional.empty();
```

# 🔹 Checking Value

❌ Avoid this (old style thinking)
```
if (opt.isPresent()) {
    System.out.println(opt.get());
}
```
👉 This defeats the purpose


## 🔹 Better Ways (Functional Style)

### 1. ifPresent()
```
opt.ifPresent(value -> System.out.println(value));
```

### 2. orElse()
```
String value = opt.orElse("Default");
```

👉 If empty → returns "Default"

### 3. orElseGet()
```
String value = opt.orElseGet(() -> "Generated Default");
```

👉 Lazy (better performance)

### 4. orElseThrow()
```
String value = opt.orElseThrow(() -> new RuntimeException("No value"));
```

# 🔹 Transforming Data

## map() → transform value

```
Optional<String> name = Optional.of("Java");

Optional<Integer> length = name.map(String::length);
```

👉 Output → Optional[4]

## flatMap() → avoid nested Optional
```
Optional<Optional<String>> nested = Optional.of(Optional.of("Java"));

Optional<String> flat = nested.flatMap(x -> x);
```

# 🔹 Real Example

```
class User {
    String name;
}

Optional<User> user = Optional.of(new User());

String name = user
    .map(u -> u.name)
    .orElse("No Name");
```
👉 No null checks needed ✅


# 🔹 Memory Trick (5-sec recall)

👉 Optional = Safe Box
- of() → must have item
- ofNullable() → maybe empty
- map() → transform
- orElse() → fallback
- ifPresent() → use if exists


# 🔹 When to Use

✔ Return value may be missing \
✔ Avoid null checks \
✔ Functional-style code \
 To avoid abnormal termination,So, our program can execute without crashing