# Singleton class
- A Singleton class in Java is a class that allows only one object (instance) to be created for the entire application.
- A Singleton ensures only one instance exists and provides a global access point to it.

# 🔑 Key Characteristics
- Constructor is private → prevents object creation using new
- A static variable that stores the single object (instance) of the class.
- Provides a public static method to access the instance

“Private constructor + Static instance + One access method = Singleton”

# ✅ Basic Example (Lazy Initialization)
```
class Singleton {


    private static Singleton instance;

   
    private Singleton() {}

   
    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton(); // created only once
        }
        return instance;
    }
}
```

# 🧪 Usage
```
public class Main {
    public static void main(String[] args) {
        Singleton obj1 = Singleton.getInstance();
        Singleton obj2 = Singleton.getInstance();

        System.out.println(obj1 == obj2); // true (same object)
    }
}
```

# 🎯 Real-World Examples
- Logger class
- Database connection pool
- Configuration manager
