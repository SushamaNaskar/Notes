- We want class to behave more like a in built type,<br>
For example: int m=20; <br>
are valid initialization statements for basic data types.
- Similarly when a variable of built-in type goes out of scope, the compiler automatically destroys the variable.

But it does not happened with the objects we have so far studied.

# Constructor and Destructor
Cpp provides a special member function called the constructor which enables an object to initialize itself when it is created. This is known as automatic initialization of objects.

It also provides another member function called the destructor that destroys the objects when they are no longer required.

# Constructor
- A constructor is a special member function whose task is to initialize the object of its class.
- Its name is same as the class name.
- The constructor is invoked whenever an object of its associated class is created.
- There is no need to write any statement to invoke the constructor function.
- Constructor functions have some special characteristics:
1. They should be declared in the public section.
2. They are invoked automatically when the objects are created.
3. They do not have return type, not even void and therefore, they cannot return values.
4. They cannot be inherited, though a derived class can call the base class constructor.
5. Constructor cannot be virtual
6. We cannot refer to their addresses.
7. They make implicit calls to the operators new and delete when memory allocation is required. 
- A constructor is declared and defined as follows
```
class integer{
    int m;
    public:
    integer(){
        m=0;
    };
}
```
## note:
When a class contains a constructor, it guaranteed that an object created by the class will be initialized automatically. For example, the declaration
```
integer int1();
```
not only created the object int1 of type integer but also initializes its data member m to zero.

# Default constructor
- A constuctor that accepts no parameters is called the default constructor.
```
class integer{
    int m;
    public:
    integer(){
        m=0;
    }
}

integer a;
```
- 
```
integer int1;
```
  invokes the default constructor of the compiler to create the object int1

# Parameterized constructors
- The constructor that can take arguments are called parameterized constructors
```
ex:
class integer{
    int m;
    public:
    integer(int x){
        m=x;
    }
}
```
## note
when a constructor has been parameterized, the object declaration statement such as
```
integer int1;
```
may not work. We must pass the initial values as arguments to the constructor function when an object is declared. This can be done in two ways.
1. By calling the constructor explicitly
2. By calling the constructor implicitly

# explicit constructor call
```
integer int1 = integer(4);
integer int1 = 4;
```
# implicit constructor call
- This method, sometimes called the shorthand method.
```
integer int1(4);
```
# Constructor with default arguments
```
class integer{
    int m;
    public:
    integer(int x=0){
        m=x;
    }

}

```
- The default argument constructor can be called with either one arguments or no arguments.
- When called with no arguments, it becomes a default constructor.
- When both these forms are used in a class it causes ambiguity for a statement such as
```
integer int1;
```
 the ambiguity is whether to call integer() or integer(int x=0)


# Copy constructor
- A copy constructor takes a reference to an object of the same class as itself as an argument.
- We cannot pass the argument by value to a copy constructor.
```
class integer{
    int m;
    public:
    integer(integer &i){
       m=i.m;
    };
};

```


```
integer I2(I1);
integer I3=I1;
``` 
would define the object I2 and I3 and at the same time initialize it to the values of I1

# note
```
I2=I1
```

 will not invoke the copy constructor. However, if I1 and I2 are objects, this statement is legal and simply assings the values of I1 to I2, member-by-member. This is the task of the overloaded assignment operator(=).

 # Dynamic Constructor
 - Allocating of memory to objects at the time of their construction is known as dynamic constuction of objects. The memory is allocated with the help of new operator.

 ```
 class string{
    char *name;
    public:
    string(){
        name=new char[1];
    }
 }
 ```

 # Multiple constructors in a class
 - When more than one constructor function is defined in a class, we say that the constructor is overloaded.
 ```
 class integer{
    int m,n;
    public:
    integer(){
        m=0;
        n=0;
    }
    integer(int a , int b){
        m=a;
        n=b;
    }
    integer(integer & i){
        m=i.m;
        n=i.n;
    }
 }
 ```

 # const objects
- we may create and use constant objects using const keyword.
```
class integer{
    int m
    public:
    integer(int x){
        m=x;
    }
}
const I(5);
```

# note
- Any attempt to modify the value of m will generate compile-time error.
- A constant object can call only const member functions.

# Destructors

- A destructor is used to destroy the objects that have been created by the constuctor.
- The destructor is a member function whose name is the same as the class name but is prceded by a tilde.
```
class integer{
public:
~integer(){}
}

```
- A destructor never takes any argument nor does it return any value.
- It will be invoked implicitly by the compiler upon exit from the program( or block or function) to clean up storage that is no longer accessible.
-  Whenever new is used to allocate memory in the constructor, we should use delete to free that memory
```
 class string{
    char *name;
    public:
    string(){
        name=new char[1];
    }
    ~string(){
      delete name;
    }
 }
 
```
# Note
A class constructor is called everytime an object is created. Similarly, as the program control leaves the current block the objects in the block start getting destroyed and destructors are called for each one of them. The objects are destroyed in reverse order of their creation. Finally when the main block is exited, destuctors ae called corresponding to the remaining objects present inside main.
```
#include <iostream>
using namespace std;

class test{
    int m;
    public:
    test(int x){
        m=x;
        cout<<"constructor called for T"<<m<<endl;
    }

    ~test(){
        cout<<"destuctor called for T"<<m<<endl;
    }
    void display(){
        cout<<"display is called for T"<<m<<endl;
    }
};

int main() {
  cout<<"start main"<<endl;

  cout<<"creating T1 and T2"<<endl;
  test T1(1),T2(2);
 
 { 
     cout<<"creating T3"<<endl;
     test T3(3);
     
 }
  T1.display();

  cout<<"end"<<endl;

    return 0;
}
```
## Output
```
start main
creating T1 and T2
constructor called for T1
constructor called for T2
creating T3
constructor called for T3
destuctor called for T3
display is called for T1
end
destuctor called for T2
destuctor called for T1
```