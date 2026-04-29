# this
- this is a reference variable that points to the current object.
👉 Refers to the current object (instance)

# 🔹 Use cases:
## Access instance variables (when shadowed by parameters)

```
class Student {
    int id;

    Student(int id) {
        this.id = id; // refers to current object variable
    }

    void show() {
        System.out.println(this.id);
    }
}
```
## Call current class methods

```
class Student {
    int id;

    Student(int id) {
        this.id = id; // refers to current object variable
    }

    void getId(){
        return id;
     }

    void show() {
        System.out.println(this.getId());
    }
}
```
## Call another constructor (constructor chaining)
- this() → calls constructor in the SAME class

```
class Student {
    String name;
    int age;

    Student() {
        this("Unknown", 0); // calls another constructor
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

## How it works
- Student() constructor calls Student(String name, int age)
- This avoids duplicate code
