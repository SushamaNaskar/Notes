# C structures

- Structure provides a method for packing together data of different data types.
- It is a tool for handling a group of logically related data items.
- It is a user-defined data type.

```
ex:
struct student{

   char name[20];
   int roll_number;
   float total_number;

}
```

## struct
The keyword struct declares student as a new data type that can hold three fields of different data types.
 
 Struct is a keyword, that helps to define a new data type.

## structure name/ structure tag
The identifier student is refered as structure name or structure tag. It is used to create variables of type student.
```
ex: struct student A;
```
## structure members
The three different fields or data types (chat name, int roll_number, float total_number) are known as structure members or elements.

Structures can have arrays, pointer or structres as members.

## Accessing stucture members

Member variables can be accessed using the dot operator.


```
struct student A;
A.roll_number=1;

```
# Limitations of C structure
- C does not allow the struct data type to be treated like built it types.

```
struct complex{
    float x;
    float y;
}
struct complex c1,c2,c3;
c3=c1+c2; // is illegal and generate error in c
```
- Struct in C do not permit data hiding. Structure members can be directly accessed by the dot operator by any function anywhere in their scope. In other words, the structure members are public members.
- We can't define or write functions inside structure in c.

# C structures Vs CPP structures

- In cpp structure can have both variables and fuctions as members.
- In c structure can only have variables
- In cpp structure names are stand-alone and can be used like any other type names. ex: student A.
- In c struct keyword should be used. ex: struct student A. This is an error in c.

# structures and class in CPP
- The only difference between a structure and class in C++, is that by default the members of a class are private while by default the members of structure are public.

# Class in CPP
- A class is a way to bind the data and its associated functions together. 
- These functions and variable are collectively called class members.
- It allows the data and functions to be hidden.
- When defining a class, we are creating a new abstract data type that can be treated like any other built-in type.

# Visibility labels
- The keywords Private and public are known as visibility labels.
- The class members that have been declared as private can be accessed only from within the class.
- Public members can be accessed from outside the class also.
- By default members of a class are private.

# Data Members and Member functions
- The variables declared inside the class are known as data members
- The functions are known as memeber functions.
- Only the member functions can have access to the private data members and private functions.

# A simple class example
```
class item
{
    int number;
    public:
    void getdata(int a);
};
```
- The name item now becomes a new type identifier that can be used to declare instances of that class type.

# Creating Object
```
item x; // memory for x is created
```
Creates a variable of type item. In cPP the class variable are known as objects.

```
class item{
    ...
    ...
}x,y,z;

```
Creates object x,y and z.

## Note

- When objects are declared, only memory space for member variables are allocated separately for each objects.
- The member functions are created and placed in the memory space only once when they are defined as a part of a class specification.

# Accessing Class members
The following is a format to call a member function

- A member function can be invoked only by using an object of the same class.
```
object-name.function-name(arguments)
```
- Private data memebers and member functions can be accessed only through a member function and not by the object directly.
```
class item{
    int value;
     void funPrivate(int data){
        value=data;
        cout<<"value= "<<value<<endl;
    }
    public:
    void funPublic(int data){
        funPrivate(data);
    }
};
void main(){
    item i;
    i.funPublic(5);
    return 0;
}
```
- A member function can be called by using its name inside another member function of the same class without the dot operator.
```
class item{
     void funPrivate(){
        cout<<"calling private member function"<<endl;
    }
    public:
    void funPublic(){
        funPrivate();
    }
};
```
# Defiing Member Functions

Member functions can be defined in two places:
- Outside the class definition
- Inside the class deinition

# Outside the class definition

```
return-type calss-name :: function-name(arguments){
    function body
}
```
- The symbol :: is called scope resolution operator.
- Several different class can use the same function name. The membership lable will resolve their scope
- A member function can call another member function directly, without using the dot operator.

# Inside the class definition
```
class item{
    int value;
    public:
    void funPublic(){
        cout<<"calling public member function"<<endl;
    }
}
```
- When a function declared inside a class, it is treated as an inline function. Therefore, all the restrictions and limitations that apply to an inline function are also applicable here.

## Note
- It is a good practice to define the member functions outside the class.
- We can define a memeber function as inline function outside the class definition, just using inline in the header line of function definition.
```
class item{
    public:
    void funPublic();
}
inline void item :: funPublic(){
    cout<<"calling public member function"<<endl;
}
```

# Static Data Members
- A static member variable are similar to static variables.
- A static member variable has certain special characteristies:
1. It is initialized to zero('\0 in char, '' in string) when the first object of its class is created.
2. Only one copy of that member is created for the entire class and is shared by all the objects of that class, no matter how many objects are created.
3. It is visiable only within the class, but it's lifetime is the entire program.

- Static variables are normally used to maintain values common to the entire class.
- The type and scope of each static member variable must be defied outside the class defination. It is necessary becuse the static data members are stored separately rather than as a part of an object.
```
class item{
    static int count;
}
int item :: count;
```
- They are also known as class variables.
```
ex:
#include <iostream>
using namespace std;

class item{
    static int count;
      
    public:
    void incrementCount(){
      count++;
    }
    void displayCount(){
        cout<<"count= "<<count<<endl;
    }
};

int item :: count;

int main() {
  item I,J,K;
  I.displayCount();
  I.incrementCount();
  J.incrementCount();
  K.incrementCount();
  I.displayCount();
    return 0;
}
```

# Static Member Functions
A static member functions properties:
- A static function can have access to only other static members(functions or variables) declared in the same class.
```
ex:
class item{
    static int count;
      int countV;
    public:
    void incrementCount(){
        countV++;
      count++;
    }
    static void displayCount(){ 
        incrementCount(); // error : incrementCount is not static
        cout<<"count= "<<countV<<endl; // error: countV is not static
        cout<<"count= "<<count<<endl;
    }
};
```
- A static member function can be called using the class name(instead of it's objects) as follows:
```
ex:
classname :: function-name;
```
# Object As Function Arguments

An object may be used as function arguments. This can be done in two ways:

1. A copy of the entire object is passed to the function
2. Only the address of the object is transferred to the function.

# Pass-by-value
- A copy of the entire object is passed to a function.
- Any changes made to the copy object inside the function do not affect the actual object.
```
ex:
class item{
    int count;
    public:
    void incrementCount(){
      count++;
    }
    void displayCount(){
        cout<<"count= "<<count<<endl;
    }
    void displayCountSum(item i1){
         i1.count=5;
        count=i1.count;
        cout<<"total count= "<<count<<endl;
       
    }
};

int main() {
 
  item item1,item2;
  item1.incrementCount();
  item1.displayCount(); 
  item2.displayCountSum(item1); //
  item1.displayCount();
  item2.displayCount();
    return 0;
}

Output:
count= 1
total count= 5
count= 1
count= 5
```
# Pass-by-referrence
- The address of the object is passed to a function
- Any changes made to the object inside the function will reflect in the actual object.

```
ex:
class item{
    int count;
    public:
    void incrementCount(){
      count++;
    }
    void displayCount(){
        cout<<"count= "<<count<<endl;
    }
    void displayCountSum(item & i1){
         i1.count=5;
        count=i1.count;
        cout<<"total count= "<<count<<endl;
       
    }
};

int main() {
 
  item item1,item2;
  item1.incrementCount();
  item1.displayCount(); 
  item2.displayCountSum(item1); 
  item1.displayCount();
  item2.displayCount();
    return 0;
}

Output:
count= 1
total count= 5
count= 5
count= 5
```

# Friendly Functions
- The functions that are declared with the keyword friend are known as friend functions. 
- A function can be declared as a friend in any number of classes.
- A friend function, although not a member function, has full access right to the private members of the class.

A friend function possesses certain special characteristics:
- It is not in the scope of the class to which it has been declared as friend.
- Since it is not in the scope of the class, it cannot be called using the object of that class.
- It can be invoked like a normal function without the help of any object.
- It cannot access the member names directly, it has to use an object name and dot membership operator.
- It can be declared either in the public or the private part of a class without affecting its meaning.
- Usually it has the objects as arguments.
```
ex:
class item{
    int count;
    public:
    friend void displayCountSum(item  i);
    void incrementCount(){
      count++;
    }
    void displayCount(){
        cout<<"count= "<<count<<endl;
    }
   
};
 void displayCountSum(item  i){
        int count=i.count+5;
        cout<<"total count= "<<count<<endl;
       
    }
int main() {
 
  item item1;
  item1.incrementCount();
  item1.displayCount();
  displayCountSum(item1);
    return 0;
}
```
- Member functions of one class can be friend functions of another class

```
ex:
class X{
    public:
    int fun1(){
        cout<<"member function of X"<<endl;
    }
}
class Y{
    public:
    friend int X :: fun1();
}
```
- We can also declare all member functions of one class as the friend functions of another class. In such cases, the class is called a friend class.
```
ex:
class Z{
    friend class X;
}
```
# Forword declaration
```
ex:
class ABC; //Forward declaration
class ABC{
    ...
}
```

# const member functions
- If a member function does not alter any data in the class, then we may declare it as a const member functions
```
ex:
void display() const;
```
- The compiler will generate an error message, if such functions try to alter the data values.


# Local classes
- Classes can be defined and used inside a function or a block, such classes are called local classes.
```
ex:
void fun(){
    ...
    class test(){
        ...
    }
}
```
- Local classes can use global variables( declared above the function) and static variable declared inside the function but cannot use automatic local variables.
```
ex:
void fun(){
    static int x=5;
    int y=5;
    
    class test{
    public:
    
    void display(){
        cout<<"x= "<<x<<endl;
        cout<<"y= "<<y<<endl; //error
    }
   };
   test t;
   t.display();
}


int main() {
   fun();
   return 0;
}
```
- The global variables should be used with the scope operator(::)
- Local classes cannot have static data members.
- Member functions must be defined inside the local classes.
- Enclosing function cannot access the private members of a local class. However we can acheive this by declaring the enclosing function as a friend.