# Class
- A class is a blueprint for something like a player or a book in the real world. It helps you group related variables in one place.
- Fields are variables inside a class.
- Each object has its own copy of those fields.
- You can store objects in arrays or lists later.

```
public class Player {
    String name;
    int score;
}
```

```
public class Main {
    public static class Player {
        String name;
        int score;
    }
    public static void main(String[] args) {
        Player p = new Player();
        p.name = "Zara";
        p.score = 42;

        System.out.println(p.name + " scored " + p.score);
    }
}
```

```
public class Book {
    String title;
    String author;
    int pages;

    public static void main(String[] args) {
        // Create a Book object
        Book myBook = new Book();

        // Assign values to the fields
        myBook.title = "The Great Gatsby";
        myBook.author = "F. Scott Fitzgerald";
        myBook.pages = 180;

        // Print the values
        System.out.println("Title: " + myBook.title);
        System.out.println("Author: " + myBook.author);
        System.out.println("Pages: " + myBook.pages);
    }
}
```

# Constructor
- A constructor is a special method that is called automatically when a new object is created. It usually accepts parameters that are used to initialize the object’s fields.
- Fields store data
- Constructor sets up the object
- this refers to the current object’s fields

```
public class Player {
    String name;
    int score;

    public Player(String name, int score) {
        this.name = name;
        this.score = score;
    }
}
```