# main

```
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
        System.out.println("Let’s learn Java.");
        System.out.println("Line by line.");
    }
}
```


- public class Main – defines the class named Main.

- public static void main(String[] args) – main method where program execution starts.

- System.out.println() – prints text to the screen and moves to a new line.

# Variable types 
int → whole numbers

double → decimals

boolean → true or false

String → text 


# static typing.

- In Java, you must always tell the computer what type of value a variable will store. This is called static typing.


```
public class Main {
    public static void main(String[] args) {
        System.out.println(5 + 7 + 3);
        System.out.println(6 * 8);
        System.out.println(20 / 2.0);
    }
}
```


# Escape sequences
- Escape sequences are special characters that allow you to include things like newlines or quotes in a string.
Use \" to include quotes and \n to start a new line.

```
public class Main {
    public static void main(String[] args) {
        System.out.println("She said \"Hello\" to everyone.");
        System.out.println("Line 1\nLine 2");
    }
}

Output: She said "Hello" to everyone.
Line 1
Line 2
```

#  Scanner 
- get input from the user. use Scanner to read what someone types.
- With nextLine(), you captured a whole line of input and responded with a message.
- If you want to read numbers, use nextInt() for whole numbers and nextDouble() for decimals.

```
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);
        System.out.print("Name: ");
        String name = input.next();
        System.out.print("Fav number: ");
        int number = input.nextInt();
        System.out.println("Cool, " + name + " - " + number + " is lucky!");
        input.close(); // closes the Scanner to free resources.
    }
}
```
- import java.util.Scanner; – allows the program to use the Scanner class for user input.
- public class Main – defines the class Main.
- public static void main(String[] args) – main method where the program starts.
- Scanner input = new Scanner(System.in); – creates a Scanner object to read input from the keyboard.
- System.out.print("Name: "); – displays a prompt asking for the user’s name.
- String name = input.next(); – reads one word as the user’s name.
- System.out.print("Fav number: "); – prompts the user to enter a number.
- int number = input.nextInt(); – reads an integer input.
- System.out.println("Cool, " + name + " - " + number + " is lucky!"); – prints a combined message.
- input.close() - closes the Scanner to free resources.

# Use try-catch

```
public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Oops! You can’t divide by zero.");
        }
    }
}
```

# Exception types
- ArithmeticException
- InputMismatchException
- NullPointerException

# Switch
import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // Write your code here
        Scanner input=new Scanner(System.in);
         System.out.println("choose between 1-3");
        int option=input.nextInt();
      
        switch(option){
            case 1:System.out.println("Berlin");
                   break;
            case 2: System.out.println("Madrid");
                   break;
            case 3: System.out.println("Paris");
                   break;
            default: System.out.println("invalid");
                   break;
                   
        }
        
        input.close();
    }
}