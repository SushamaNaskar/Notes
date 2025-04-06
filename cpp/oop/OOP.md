# Basic concepts of OOP

1. Class
2. object
3. Encapsulation
4. Data abstraction
5. Inheritance
6. Polymorphism
7. Dynamic binding
8. Message Passing

# Class
Classes are user-defined data types and behave like the bulit-in types of programming languge.

# Object
Objects are variables of the type class.

## ex:
class Tree{
    data;
    functions;
}

Tree t; // t is an object of Tree type class;

# Encapsulation
The wrapping up of data and functions into a single unit or class is known as encapsulation.

# Data Abstraction
Abstraction refers to the act of representing essestial features without including the backgroud details or explanations.

Since the classes use the concept of data absturaction, they are known as Abstract Data Types (ADT).

# Inheritance
The mechanisim of deriving a new class from an old class is called inheritance(or derivation).
The old class is called base class and new one is called derived/ sub class.


Inheritance is the process by which objects of one class acquire the properties of another class.
This means that we can add additional features to an existing class without modifying it.

 The objects of derived/sub class will have the combined features of both the classes.

## ex:
```
#include <iostream>
using namespace std;
class B{
    int a;
    public:
    int b;
    void set_ab(int vala, int valb){
        a=vala;
        b=valb;
    }
    int get_a(){
        return a;
    }
};
class D: public B{
    int c;
    public:
    void update_c(){
        c=b* get_a();
    }
    void display_c(){
        <!-- cout<<c<<endl; -->
    }
};
int main() {
     D d;
     d.set_ab(2,3);
     d.update_c();
     d.display_c();
    return 0;
}
```
# Polymprphism
'one name, multiple forms'.
Polymorphism, a greek term, means the ability to take more than one form. An operation may exhibit different behaviors in different instances. The behaviour depends upon the types of data used in the operation.

 Polymorphism is extensively used in implementing inheritance.

## Types of polymorphism

### Operator overloading
Making an operator to exhibit different behaviors based on data type.

 int a=3;
 int b=2;
 int c=a+b; //5

 string a="a"; 
 string b="b";
 string c=a+b; //ab

### function overloading
Using a single function name to perform different types of tasks based on data type.


```
#include <bits/stdc++.h>
using namespace std;

class Geeks {
public:
	void func(int x)
	{
		cout << "value of x is " << x << endl;
	}

	void func(double x)
	{
		cout << "value of x is " << x << endl;
	}

	void func(int x, int y)
	{
		cout << "value of x and y is " << x << ", " << y
			<< endl;
	}
};


int main()
{
	Geeks obj1;

	obj1.func(7);
	obj1.func(9.132);
	obj1.func(85, 64);
	return 0;
}
```

# Dynamic Binding
Binding refers to the linking of a procedure call to the code to be executed in response to the call.

Binding refers to the process of converting identifiers (such as variable and performance names) into addresses. Binding is done for each variable and functions. For functions, it means that matching the call with the right function definition by the compiler/ linking of a function definition and a function call. It takes place either at compile time or at runtime.

# Message Passing
Object communicates with one another by sending and receiving information.
A message for an object is a request for execution of a procedure, therefore will invoke a function in the receiving object.

## ex:
employee.salary(name)

employee: object </br>
salary: message  </br>
name: information </br>

# Applications of OOP
- Real-time systems
- Simulation and modeling
- Object-oriented databases
- Hypertext, Hypermedia and expertext
- AI and expert systems
- Neural networks and parallel programming
- Decision support and office automation systems
- CIM/CAM/CAD systems