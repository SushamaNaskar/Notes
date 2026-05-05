# Lambda Expressions
- A lambda expression is an anonymous function, that can be passed as an argument.
- Lambda works only with Functional Interfaces
- Java is an object-oriented language. 
- By introducing lambdas in Java 8, the authors of Java tried to add elements of functional programming in Java.
-  We can pass it to other methods as parameters, therefore, using the power of functional programming in Java.

```
(parameters) -> expression
or
(parameters) -> { statements }
```

# Example
```
import java.util.Arrays;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

        // Using Lambda Expression
        names.forEach(name -> System.out.println(name));

        Runnable r = () -> System.out.println("Running...");

        //Examples
        () -> System.out.println("Hello");

        (a, b) -> a + b;

        (int a, int b) -> {
             return a + b;
        };
    }
}
```

# 🚀 Real Use Case (Collections)
```
List<Integer> list = Arrays.asList(5, 2, 8, 1);

list.forEach(n -> System.out.println(n));
```

# Why to use Lambda expressions?
- To write functional programming in java
- To enable parallel processing
- To write more readable, maintainable and concise code
