# static
- static members belong to the class and are shared across all instances.
👉 Belongs to the class, not objects

# Key points:
- Shared among all objects
- Memory allocated once in Method Area
<!-- - Can access only static members directly

```
class Demo {
    int x = 10;           // instance variable
    static int y = 20;    // static variable

    static void show() {
        System.out.println(y); // ✅ allowed
        // System.out.println(x); ❌ not allowed, Because x needs an object
    }
}
``` -->


# instance variable
- An instance variable is a variable that belongs to an object (instance) of a class, not to the class itself.

static = shared (class level)
instance = personal (object level)