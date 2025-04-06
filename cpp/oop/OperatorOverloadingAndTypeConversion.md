# Operator Overloaing
- Cpp permits us to add two variables of user-defined types with the same syntax that is applied to the basic types.
- This means that Cpp has the ability to provide the operators with a special meaning for a data type.
- This mechanism of giving such special meaning to an operator is known as operator overloading.

## note
We can overload all the cpp operators except the following:
- Class member access operators(. and .*)
- Scope resolution operator(::)
- Size operator(sizeof)
- Conditional operator(?:)

The reason why we cannot overload these operators may be attributed to the fact that these operators take name(ex class name) as their operand instead of values.
- When an operator is overloaded,its original meaning is not lost. For instance, the operator +, which has been overloaded to add two (objects of same class), can still be used to add two integers.

# Defining operator overloading

```
return-type classname :: operator op(arg){
...
}
```
- operator op is the function name
- operator is a keyword
- op is the operator beging overloaded, ex: +,-,* etc.

ex: we are overloading the + operator
```
return-type classname :: operator+(arg){
...
}
```
# Types of operator functions
- Operator functios must be either member functions(non static) or friend functions.

# The process of overloading a operator 
1. Create a class that defines the data type that is to be used in the overloading operation
2. Declare the operator function operator op() in the public part of the class. It may be either a member function or a friend function.
3. Define the operator function to implement the required operations.


# Difference between member and friend operator functions
- Member function will have no argument for unary operator and one for binary operators.

- friend function will have only one argument for unary operators and two for binary operators.

## note
This is because the object used to invoke the member function is passed implicitly and therefore is available for the member function.</br>
This is not the case with friend functions. Arguments may be passed either by value or by reference

# Overloading Unary Operators
Let us consider the unary operator minus '-'.
- A minus operator when used as a unary, takes just one operand and changes the sign of an operand when applies to a basic data item.
```
int main() {
    int n=5;
    int m=-n;
    cout<<m<<endl; //-5

    return 0;
}
```
The unary minus when applied to an object should change the sign of each of its data items.

# Overloading minus(-) operator using member function
```
#include <iostream>
using namespace std;
class space{
  int x;
  int y;
  public:
  space(){
      x=1;
      y=1;
  }
  void operator-(){
      x=-x;
      y=-y;
  }
  void display(){
      cout<<x<<y<<endl;
  }
};
int main() {
    space s1;
    -s1;
     s1.display();
    return 0;
}
```
- Since this function is a member function of the same class, it can directly access the members of the object which activated it.

# Overloading minus(-) operator using friend function
```
#include <iostream>
using namespace std;
class space{
  int x;
  int y;
  public:
  space(){
      x=1;
      y=1;
  }
 
  void display(){
      cout<<x<<y<<endl;
  }
  friend void operator-(space &s);
};

void operator-(space &s){
      s.x=-s.x;
      s.y=-s.y;
  }
  
int main() {
    space s1;
    -s1;
     s1.display();
    return 0;
}
```
# Overloading Binary Operator
Let us consider the unary operator plus '+'.
```
int main() {
int A=5,B=5;
int C=A+B;
cout<<C<<endl;
    return 0;
}
```
# Overloading plus(+) operator using member function
```
#include <iostream>
using namespace std;
class space{
  int x;
  int y;
  public:
  space(){
      x=1;
      y=1;
  }
 
  void display(){
      cout<<x<<y<<endl;
  }
   space operator+(space s){
       space temp;
       temp.x=x+s.x;
       temp.y=y+s.y;
       return temp;
   }
};

  
int main() {
 space A,B,C;
 C=A+B;
 C.display();
    return 0;
}
```
## note
- Here the object A takes the responsibility of invoking the function and B plays the role of an argument. The above invocation statement is equivalent to:
```
 C = A.operator+(B);
```
# Overloading plus(+) operator using friend function
```
#include <iostream>
using namespace std;
class space{
  int x;
  int y;
  public:
  space(){
      x=1;
      y=1;
  }
 
  void display(){
      cout<<x<<y<<endl;
  }
  friend space operator+(space s1,space s2);
};

    space operator+(space s1,space s2){
       space temp;
       temp.x=s1.x+s2.x;
       temp.y=s1.y+s2.y;
       return temp;
   }
int main() {
 space A,B,C;
 C=A+B;
 C.display();
    return 0;
}
```
# Situation where friend function is more efficient
```
A = B+2;
```
where A and B are objects of the same class. This will work for a member function but the statement
```
A = 2+B;
```
will not work. This is because <b>the left-hand operand which is responsible for invokint the member function should be and object of the same class.</b>

However, friend function allows both approaches
```
#include <iostream>
using namespace std;
class space{
  int x;
  int y;
  public:
  space(){
      x=1;
      y=1;
  }
 
  void display(){
      cout<<x<<y<<endl;
  }
  friend space operator+(int value, space s);
  friend space operator+(space s, int value );
};

    space operator+(int value, space s){
       space temp;
       temp.x=s.x+value;
       temp.y=s.y+value;
       return temp;
   }
    space operator+( space s,int value){
       space temp;
       temp.x=s.x+value;
       temp.y=s.y+value;
       return temp;
   }
int main() {
 space A,B,C,D;
 C=2+B;
 D=B+2;
 C.display();
 D.display();
    return 0;
}
```
# Rules for overloading operators
1. Only existing operators can be overloaded. New operators cannot be created.
2. The overloaded operator must have at least one user-defined type operand.
3. Overloaded operators follow the syntax rules of the original operators. They cannot be overridden.
4. There are some operators that cannot be overloaded.
- member operator: . (dot)
- Pointer-to-member operator: .*
- Scope resolution operator: ::
- Conditional operator: ?:
5. We cannot use friend functions to overload certain operators. However, member functions can be used to overload them.
- Assignment operator : =
- Function call operator: ()
- Subscripting operator: []
- class member access operator: ->
8. When using binary operators overloaded through a member function, the left-hand operand must be an object of the relevant class.
9. Binary arithmetic operators such as +, -, * and / must explicitly return a value. They must not attempt to change their own arguments.(much like a built-in type).

# Type Conversions
We that that when constants and varables of different types are mixed in an expression, C applies automatic type conversion. The type of data to the right of an assignment operator is automatically converted to the type of the vatiable on the left. For example, the statements
```
int m;
float x=3.14;
m=x;
```
convert x to an integer before its value is assigned to m. The type conversions are automatic as long as the data types involves are built-in types.

Since the user-defined data types are designed by us to suit our requirements, the compiler does not support automatic type conversions. We must therefore design the conversion routines by ourselvers. If such operations are required.

Three types of situations might arise in the data conversion between uncompatible types:
1. Conversion from basic type to class type.
2. Conversion from class type to basic type.
3. Conversion from one class type to another class type.

# Basic to class type
- We can create a constructors to convert basic type to the corresponding class type
- Constructors perform a defacto type conversion from the argument's type to the constructor's class type
- We can accomplish this conversion useing an overloaded = operator.
```
class string{
    int len;
    char* p;
    public:
    string(char *a){
        length=strlen(a);
        p=new char[length+1];
        strcpy(p,a);
    }
};
int main(){
    string s1,s2;
    char* name="ABC";
    s1=string(name);
    s2=name;
}
```
The statements:
```
 s1=string(name);
    s2=name;
```
first converts the name from char* type to string type and then assigns the string type values to the object s1, by invoking the constructor implicitly.

# Class to Basic type
- CPP allows us to define an overloaded casting operator that could be used to convert a class type data to basic type. The general form of an overloaded casting operator function, usually referred to as a conversion functions is:
```
operator typename(){
    ...
}
```
The function converts a class  type data to typename
```
class invent{
    int items;
    float price;
    public:
    invent(){
        items=5;
        price=10.5;
    }
    operator float(){        //conversion function
        return items*price;
    }
};
void main(){
    invent i;
    float total_value;    
    total_value=i;        //invent to float type
}
```

# One class to another class
```
x objx;
y objy;
objx = objy;
```
The class y type is converted to class x type data and the converted value is assigned to the objx. Since the conversion takes place from class y to class x, y is known as the source class and x is known as the destination class.

- Such conversions between two objects of different classes can be carried out by either a constructor or a conversion function.

# using casting operator function

```
operator typename();
```
- converts the class object of which it is a member to typename. 
- The typename may be a built-in type or user-defined one.
- in the case of conversions between two objects. the typename refers to the destination class.
- The conversion takes place in the source class and the result is given to the destination class object.
```
class y{
    public:
    operator x(){
        ...
    }
}
void main(){
    x objx;
    y objy;
    objx = objy;
}
```
# using constructor
- To perform the conversion from any other type/class a constuctor should be used in the destination class.
```
class x{
    public:
    x(y *objy){
        ...
    }
}
void main(){
    x objx;
    y objy;
    objx = objy;
}
```