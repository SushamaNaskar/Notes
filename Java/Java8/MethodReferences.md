# Method References :: Operator
- Method References (Java 8+) are a shorter, cleaner way to write lambda expressions when the lambda just calls an existing method.
- Instead of writing a full lambda, you can refer directly to an existing method.

# :: called as Reference Operator

# Syntax
```
ClassName::methodName
```

# 🔹 Where It Is Used
- Stream API
- Functional Interfaces
- Lambda simplification

# 🔹 Key Rules
✔ Works only when lambda just calls a method
✔ Improves readability
✔ No need to write parameters explicitly
✔ Type is inferred

# 🔹 Types of Method References (IMPORTANT for interviews)
1. Static Method Reference
2. Instance Method of a Particular Object
3. Instance Method of an Arbitrary Object
4. Constructor Reference


## 1️⃣ Static Method Reference

```
import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(1, 2, 3, 4);

        list.forEach(System.out::println);
    }
}
```

Lambda equivalent:

```
list.forEach(x -> System.out.println(x));
```

## 2️⃣ Instance Method of a Particular Object
```
public class Test {
    public void print(String msg) {
        System.out.println(msg);
    }

    public static void main(String[] args) {
        Test obj = new Test();

        list.forEach(obj::print);
    }
}
```

Lambda:
```
list.forEach(x -> obj.print(x));
```

## 3️⃣ Instance Method of an Arbitrary Object
```
import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("A", "B", "C");

        names.forEach(String::toLowerCase);
    }
}
```

Lambda:
```
names.forEach(x -> x.toLowerCase());
```

## 4️⃣ Constructor Reference
```
import java.util.function.Supplier;

public class Test {
    public static void main(String[] args) {
        Supplier<List<String>> supplier = ArrayList::new;

        List<String> list = supplier.get();
    }
}
```

Lambda:
```
Supplier<List<String>> supplier = () -> new ArrayList<>();
```


# 🔹 Interview Trap Questions