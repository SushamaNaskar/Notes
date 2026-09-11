# final
👉 Used to restrict modification
- final is used to make variables constant, methods non-overridable, and classes non-inheritable.


# Can be applied to:

## 1. Variable → constant

```
final int x = 10;
// x = 20 ❌ (not allowed)
```

## 2. Method → cannot be overridden

```
class A {
    final void show() {}
}
```

## 3. Class → cannot be inherited

```
final class A {}
// class B extends A ❌
```

# Interface and final
Interface variables are automatically:
```
public static final
```


```
interface Test {

    int x = 10;

}

Equivalent to

public static final int x = 10;
```

# Key points:
- Final variable → Cannot be reassigned
- Blank final variable → Must be initialized exactly once

- Final reference → Reference cannot change; object state can
- Final array → array reference cannot change, Elements can change

- Final method → Cannot be overridden (can be overloaded)

- Final class → Cannot be inherited
- Constructors cannot be final

- abstract final class or method is illegal / abstract and final cannot be used together on the same method or class.
- Interface fields are implicitly public static final


# abstract and final cannot be used together on the same method or class.
They represent opposite ideas:
abstract → "This must be implemented/overridden by a subclass."
final → "This cannot be overridden."