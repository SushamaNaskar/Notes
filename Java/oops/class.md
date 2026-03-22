# class
- A class is a user-defined blueprint or template used to create objects.
- It defines the properties (variables) and behaviors (methods) that the objects created from it will have.
- Classes behave like custom data types, similar to built-in types like int, double, or String.


```
class Car {

    String brand;
    int speed;

    void drive() {
        System.out.println("Car is driving");
    }

}

public class Main {

    public static void main(String[] args) {

        Car car1 = new Car();
        car1.drive()

    }

}
```

# Object
Objects are variables of the type class.

```
ClassName objectName = new ClassName();
```