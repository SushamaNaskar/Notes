# final
- final is used to make variables constant, methods non-overridable, and classes non-inheritable.
👉 Used to restrict modification

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