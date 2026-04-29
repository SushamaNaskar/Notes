# Define a method

[access-modifier] [type] returnType functionName(parameters)

- To define a method, you need to specify:

1. Access modifier (e.g., public, private): Determines the method’s visibility.

2. Return type (e.g., void, int, String): Defines what the method will return, if anything.

3. Method name: The name used to call the method.

4. Parameters (optional): Variables that allow you to pass information into the method.

5. Body: The block of code that gets executed when the method is called.

```
[modifier] [return type] [method name] ([parameters]) {
    // code
    return result; // if not void
}
```

```
public class Main {
    public static void greet() {
        System.out.println("Hello from a method!");
    }

    public static void main(String[] args) {
        greet();
        greet();
    }
}
```





| Feature             | Access Modifier            | Type                          |
| ------------------- | -------------------------- | ----------------------------- |
| Controls            | Visibility                 | Behavior                      |
| Question answered   | Who can access?            | How it works?                 |
| Examples            | public, private, protected | static, final, abstract       |
| Affects inheritance | Yes (visibility rules)     | Yes (overriding/hiding rules) |


| Feature      | `static`      | `final`       | `abstract`      |
| ------------ | ------------- | ------------- | --------------- |
| Belongs to   | Class         | Object/Class  | Object          |
| Override     | ❌ No (hiding) | ❌ Not allowed | ✅ Must override |
| Body         | ✅ Has body    | ✅ Has body    | ❌ No body       |
| Polymorphism | ❌ No          | ❌ No          | ✅ Yes           |
