# class
- A class is a user-defined data type
- It acts as a blueprint/template for objects
- It contains:
 * Variables (state/properties)
 * Methods (behavior)
- Memory is not allocated when a class is created
- Memory is allocated when an object is created


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
