<style>
    .add_border{
        border:1px solid white;
        width: 100px;
        text-align:center;
        margin-right:10px;
    }
    .text_center{
         text-align:center;
    }
    .padding_left{
         padding-left:190px;
    }
     .padding_right{
         padding-right:90px;
    }
    .width_100{
        width:100px;
    }
    .flex_row{
        display: flex;
        flex-direction: row;
    }
    .margin_50{
        margin-left:50px;
    }
  .margin_100{
        margin-left:70px;
    }
    .width_400{
        width:400px;
    }
    .width_200{
        width:200px;
    }

</style>
# Indroduction
- Reusability is another importance feature of OOP.
- it is always nice if we could reuse something that already exists rather than trying to create the same all over agagin.It would not only save time and money but also reduce frustration and increase reliability.
- For instance, the reuse of class that has already been tested, debugged and used many times can save us the effort of developing and testing the same again.
- CPP strongly supports the concept of reusability.
- The cpp classes can be reused in several ways.
- Once a class has been written and tested. It can be adapted by other programmers to suit their requirements.
- This is basically done by creating a new class, reusing the properties of the existing ones.

# Inheritance
- The mechanism of deriving a new class from an old one is called inheritance (or derivation). The old class is referred as the base class and the new one is called the derived class or subclass.

- The derived class inherits some or all of the traits from the base class.

# Types of Inheritance

## Single Inheritance
- A derived class with only one base class is called single inheritance.
<div>
     <div class="add_border"> A </div>
      <div class="text_center width_100">&darr;</div> 
        <div class="add_border">B</div>
</div>

- the syntax of a derived class with multiple inheritance
```
class B : visibility A{

}
```

## Multiple Inheritance
- A derived class with multiple base classes is called multiple inheritance.


<div>
<div class="flex_row">
<div class="add_border"> A </div>
<div class="add_border"> c </div>
</div>

<div class="flex_row">
<div class="text_center width_100">&darr;</div> 
<div class="text_center width_100">&darr;</div> 
</div>

<div class="add_border width_200">B</div>
</div>

- the syntax of a derived class with multiple inheritance
```
class B : visibility A, visibility C{

}
```

## Hierachical Inheritance
- When the traits of one class in inherited by more than one class is called hierachical inheritance.

<div>
<div class="add_border width_400 margin_50"> A </div>

<div  class="flex_row">
<div class="text_center width_100 margin_50">&darr;</div> 
<div class="text_center width_100 margin_50">&darr;</div> 
<div class="text_center width_100 margin_50">&darr;</div> 
</div>

<div class="flex_row">
<div class="add_border margin_50">B</div>
<div class="add_border margin_50">c</div>
<div class="add_border margin_50">d</div>
</div>
</div>

## Multilevel Inheritance
- The mechanism of deriving a class from another derived class is known as multilevel inheritance.
<div>
<div class="add_border"> A </div>
<div class="text_center width_100">&darr;</div> 
<div class="add_border">B</div>
<div class="text_center width_100">&darr;</div> 
<div class="add_border">C</div>
</div>
- The class B is known as intermediate base class, since it provides a link for the inheritance between A and C.

## Hybrid Inheritance

<div>
<div class="add_border width_200 margin_100"> A </div>

<div  class="flex_row">
<div class="text_center width_100 margin_50">&darr;</div> 
<div class="text_center width_100 margin_50">&darr;</div> 
</div>

<div class="flex_row">
<div class="add_border margin_50">B</div>
<div class="add_border margin_50">c</div>
</div>

<div  class="flex_row">
<div class="text_center width_100 margin_50">&darr;</div> 
<div class="text_center width_100 margin_50">&darr;</div> 
</div>

<div class="add_border width_200 margin_100"> D </div>
</div>

# Defining Derived Classes

- A derived  class can be defined by specifying its relationship with the base class in addition to its own details.
```
class derived_class_name : visibilty_mode base_class_name{

    ... // member of derived class
};
```
- The colone indicates that the derived_class_name is derived from base_class_name.

# Visibility mode
- The visibility mode is optional, <b>the default visibility mode is private</b>.
- If present, may be private, protected or public.
- Visibility mode specifies whether the features of the base class are privately, protectedly or publicly derived.

# publicly inherited
- When a base class publicly inherited:
1. <b>public members</b> of the base class becomes <b>public members</b> of the derived class and therefore they are accessible to the objects of the derived class.
- the <b>private members</b> are not inherited and therefore, the private members of a base class will never become the members of its derived class.
```
class B{
    protected:
       int b_protected;
  
    public:
      int b_public;
};

class D:public B{
  
  protected:
    int b_protected;
    
  public:
    int b_public;
    
};
```
# privately inherited
- When a base class privately inherited:
1. <b>public members</b> of the base class becomes <b>private members</b> of the derived class and therefore the public members of the base class can only be  accessed by the member functions of the derived class. They are inaccessible to the objects of the derived class.
- the <b>private members</b> are not inherited and therefore, the private members of a base class will never become the members of its derived class.
```
class B{
 protected:
    int b_protected;
  
  public:
   int b_public;
};

class D:private B{
   private:
     int b_protected;
     int b_public;
    
};
```
## note
In both the cases, the private members are not inherited and therefore, the private members ofa base class will never become the members of its derived class.

# Making a Private member Inheritalble (Protected)

- CPP provides a third visibility modifier, <b>protected</b>
- A member declared as protected is accessible by the member functions within its class and any class immediately derived from it.
- When a protected member is inherited in <b>public mode</b>. it becomes <b>protected</b> in the derived class. It is also ready for further inheritance.
- When it in inherited in <b>private mode</b>, becomes <b>private</b> in the derived class, it is not available for further inheritance.

# protected inherited
- In <b>protected</b> derived both the protected and public members of the base class become <b>protected members</b> of the derived class.

```
class B{
 protected:
    int b_protected;
  
  public:
   int b_public;
};

class D:protected B{
   protected:
     int b_protected;
     int b_public;
    
};
```

<table>
  <tr>
    <th class="padding_left padding_right">Derived class visibility</th>
  </tr>
  <tr>
      <table>
          <tr>
             <th>Base class visibility</th>
             <th></th>
             <th>private derivation</th>
             <th>protected derivation</th>
             <th>public derivation</th>
            </tr>
            <tr>
              <td>Private</td>
              <td>&rarr;</td>
              <td>Not inherited</td>
              <td>Not inherited</td>
              <td>Not inherited</td>
            </tr>
            <tr>
              <td>Protected</td>
              <td>&rarr;</td>
              <td>private</td>
              <td>protected</td>
              <td>protected</td>
            </tr>
            <tr>
              <td>Public</td>
              <td>&rarr;</td>
              <td>private</td>
              <td>protected</td>
              <td>public</td>
            </tr>
         </table>
    </tr>
</table>

## note
- objects of derived class type can only access public data and public members of that class and publicly derived base class public data and member functions.
```
#include <iostream>
using namespace std;
class B{
    int b_private;
    void b_private_fun(){
        cout<<"Private Member Function of Base Class"<<endl;
    };
    
     protected:
    int b_protected;
     void b_protected_fun(){
        cout<<"Protected Member Function of Base Class"<<endl;
    };
    
    public:
    int b_public;
    void b_public_fun(){
        cout<<"Public Member Function of Base Class"<<endl;
    }
};

class D:public B{
    int d_private;
    void d_private_fun(){
        cout<<"Private Member Function of Derived Class"<<endl;
    }
     protected:
    int d_protected;
     void d_protected_fun(){
        cout<<"Protected Member Function of Derived Class"<<endl;
    };
    
    public:
    int d_public;
    void d_public_fun(){
        cout<<"Public Member Function of Derived Class"<<endl;
    }
};

int main() {
   D dobj;
   
   // accessing public members of derived class
   dobj.d_public=5;
   cout<<"Public data member of derived class "<<dobj.d_public<<endl;
   dobj.d_public_fun();
   
// accessing public members of base class
   dobj.b_public=6;
   cout<<"Public data member of base class "<<dobj.b_public<<endl;
   dobj.b_public_fun();
   
  // accessing protected members of derived class
  dobj.d_protected=1;     //error
  dobj.d_protected_fun(); //error
   
    // accessing protected members of base class
  dobj.b_protected=1;     //error
  dobj.b_protected_fun(); //error
   
     // accessing private members of derived class
  dobj.d_private=1;     //error
  dobj.d_private_fun(); //error
   
    // accessing private members of base class
  dobj.b_private=1;     //error
  dobj.b_private_fun(); //error
    return 0;
}
```
- The member functions of a derived class can directly access only the protected and public data.
```
// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
class B{
    void b_private_fun(){
        cout<<"Private Member Function of Base Class"<<endl;
    };

    protected:
    int b_protected;
    void b_protected_fun(){
        cout<<"Protected Member Function of Base Class"<<endl;
    };

    public:
    int b_public;
    void b_public_fun(){
        cout<<"Public Member Function of Base Class"<<endl;
    }
};

class D:public B{
    
    public:
    int d_public;
    void d_public_fun(){
        b_private_fun();  //error
        b_protected_fun();
       b_public_fun();
    }
   
};

int main() {
   D dobj;
   dobj.d_public_fun();
  
    return 0;
}
```
- The member functions of a derived class can access the private data through the member functions of the base class.

# Ambiguity resolution in Inheritance

## Ambiguity in Single inheritance 
- Ambiguity may also arise in single inheritance applications, if base and derived class has same function name
```
class M{
  public:
  void display(){
    cout<<"class M";
  }
};

class D : public M {
 public:
 void display(){
    cout<<"class D ";
 }
};

```
- We can solve this problem by using the scope resolution operator to specify the class
```
int main(){
  D dobj;

  dobj.M::display();  //calling base class function

  dobj.display();
  dobj.D.display();
}
```

## Ambiguity in Multiple inheritance 
- Occasionally we may face a problem using the multiple inheritance, when a funtion with the same name appears in more than one base class.
```
class M{
  public:
  void display(){
    cout<<"class M";
  }
};

class N{
  public:
  void display(){
    cout<<"class N";
  }
};

class D : public M, public N {

}
```
- We can resolve this problem by defining a name instance within the derived class, using the class resolution operator.
```
class D : public M, public N {
 public:
 void display(){
  M :: display();
 }
};
```
- We can now use the derived class as follows:
```
int main(){
  D dobj;
  dobj.display();
}
```

# Virtual Base classes

- In a situation which require the use of both the multiple and multilevel inheritance or a situation where all three kinds of inheritance namely, multilevel, multiple and hirarchical inheritance are involved.

<div>
<div class="add_border width_200 margin_100"> A </div>

<div  class="flex_row">
<div class="text_center width_100 margin_50">&darr;</div> 
<div class="text_center width_100 margin_50">&darr;</div> 
</div>

<div class="flex_row">
<div class="add_border margin_50">B1</div>
<div class="add_border margin_50">B2</div>
</div>

<div  class="flex_row">
<div class="text_center width_100 margin_50">&darr;</div> 
<div class="text_center width_100 margin_50">&darr;</div> 
</div>

<div class="add_border width_200 margin_100"> D </div>
</div>


- A is sometimes referred to as <b>indirect base class.</b>
- All the public and protected members of A are inherited into D twice, first via B1 and again via B2.
- This means D will have duplicate sets of the members inherited from A. Which produces an ambiguity.

```
class A{
 
  public:
  int a=5;
   void display(){
       cout<<"indirect base class"<<endl;
   }
};

class B1: public A{
 

    
};

class B2: public A{
  
    

};

class D:public B1, public B2{
    
};

int main() {
   D dobj;

   dobj.display(); //error: 

  cout<<dobj.a<<endl;  //error

    return 0;
}


Output:
error:request for member 'display' is ambiguous
error:request for member 'a' is ambiguous
```

- This can be resolve by making the common base class (B1 and B2) as virtual class while declaring the direct or intermediate base classes as shown below:
```
class A{
 
  public:

  int a=5;

   void display(){
       cout<<"indirect base class"<<endl;
   }
};

class B1: virtual public A{
 

    
};

class B2: public virtual A{
  
    

};

class D:public B1, public B2{
    
};

int main() {
   D dobj;
   dobj.display(); // indirect base class
   cout<<dobj.a<<endl;  //5
    return 0;
}
```
- The keywords virtual and public may be used in either order.
- another example, when all classes have same function name
```
class A{
 
  public:
  int b=12;
  int a=5;
   void display(){
       cout<<"indirect base class"<<endl;
   }
};

class B1: virtual public A{
 
 public:
 int a=4;
   void display(){
       cout<<"base class B1"<<endl;
   }
    
};

class B2: public virtual A{
  public:
  int a=3;
   void display(){
       cout<<"base class B2"<<endl;
   }
    

};

class D:public B1, public B2{

  public:
    int a=2;
    void display(){
       cout<<"derived class"<<endl;
   }
};

int main() {
   D dobj;

// calling derived class members

  cout<<dobj.a<<endl; //2
  dobj.display();

// calling base class members

  cout<<dobj.B1::a<<endl; //4
   dobj.B1::display(); 

// calling indirect base class

   cout<<dobj.A::a<<endl; //5
   cout<<dobj.b<<endl; //12
   dobj.A::display();
    return 0;
}
```
- When a class is made a virtual base class, C++ takes necessary care to see that only one copy of that class in inherited, regardless of how may inheritance paths exist between the virtual base class and a derived class.
- This ensures data integrity.

# Abstract Class
- A abstract class is ont that is not used to create objects.
- An abstract class is designed only to act as a base class (to be inherited by other class).
- A class can only be considered as an abstract class, if it has at <b>least one pure virtual function</b>.

The general form of using abstract class is shown below:
```
class A{
  public:
  virtual void spec()=0; //pure virtual function
};

class B : public A{
  public:
  void spec(){
    ...        // B definition of spec function
  }

};

class C : public A{
  public:
  void spec(){
    ...        // C definition of spec function
  }

};
```

# Constructor in derived class
- If any base class constructor takes any arguments, then it is mandatory for the derived class to have a constructor and pass the arguments to the base class constructors.
- When both the base class and derived class contain constructors, the base constuctors is executed first and then the constructor in the derived class is executed.
- The header line of derived-constructor contains two parts, seperated by a colon(:).
1. The first part provides the declaration of the arguments that are passed to the derived-constuctor.
2. And the second part lists the function calls to the base constructors.
```
derived-class-constructor(arglist):
base-class-constuctor-initialization-section
{
  derived-class-constructor-assignment-section
}
```
```
class A{
  public:
   A(int a){
    ...
   }
};

class B{
  public:
   B(int b1, int b2){
    ...
   }
};

class C: public A, public B{
  int c;

 public:
  C(int a, int b1, int b2, int c1) :
  A(a),
  B(b1,b2)
 {
   c=c1;
 }

};

int main(){
  C objc(1,2,3,4);
}
```
These values are assigned to various parameters by the constuctor C as follows:
```
1 -> a
2 -> b1
3 -> b2
4 -> c1
```
- <b>The constructor will be called based on derived class header line, not by derived constructor initialization</b>
```
class A{
  public:
   A(int a){
    ...
   }
};

class B{
  public:
   B(int b1, int b2){
    ...
   }
};

class C: public B, public A{
  int c;
 public:
 C(int a, int b1, int b2, int c1) :
  A(a)
  B(b1,b2),
  {
   c=c1;
  }

};

int main(){
  C objc(1,2,3,4);
}
```
These values are assigned to various parameters by the constuctor C as follows:
```
2 -> b1
3 -> b2
1 -> a
4 -> c1
```
- In case of multiple inheritance, the base classes are constructed in the order in which they appear in the declaration of the derived class.
- In multilevel inheritance, the constructor will be executed in the order of inheritance.

- The constructors for virtual classes are invoked before any nonvirtual base classes. If there are multiple virtual base classes. they are invoked in the order in which they are declared. Any non-virtual bases are then constructed before the derived class constuctor.
<table>
  <tr>
    <th>Method of inheritance</th>
    <th>Order of execution</th>
  </tr>
   <tr>
    <td>
      class B : public A{};
    </td>
     <td>
     A(): base constructor</br>
     B():derived constructor
     </td>
  </tr>
   <tr>
    <td> class C : public A, public B{}; </td>
    <td>
     A(): base (first)</br>
     B(): base (second)</br>
     C():derived constructor
    </td>
  </tr>
   <tr>
    <td>class C : public A, virtual public B{};</td>
    <td>
     B(): virtual base (first)</br>
     A(): base (second)</br>
     C():derived constructor
    </td>
  </tr>
</table>

## Initialize Data Members
- the data members are initialized in the order of declaration, independent of the order in the initialization list.
```
class X{
  int a;
  int b;
  public:
  X(int i,int j) : a(i), b(2*j){}

};

void main(){
  
  X xobj(2,3);
}
```
This program initialize a to 2 and b to 6.

```
class X{
  int a;
  int b;
  public:
  X(int i,int j) : a(i+j), b(i){}

};

void main(){
  
  X xobj(2,3);
}
```
This program initialize a to 5 and b to 2.

- the following are also valid
```
X(int i, int j) : a(i), {b=j;}
X(int i,int j) { a=i; b=j;}
```

- Since initialization is based on order of declaration, this enable use to have statements such as:

```
class X{
  int a;
  int b;
  public:
  X(int i,int j) : a(i), b(a*j){}

};

void main(){
  
  X xobj(2,3);
}
```
This is initialize a to 2 and b to 6.



## note
- However the following will not work because the value of b is not available to a which is to be initialize first.
```
X(int i, int j) : b(i), a(b*j) //error
```

# Member classes: Nesting of Classes

```
class A{}
class B{}
class C{
  A a; // object of A class
  B b; //object of B class
}
```
- All objects of C class will contain the objects a and b.
- This kind of relationship is called <b>containership</b> or <b>nesting</b>

# creating an Independent object Vs creating a nested object
- An independent object is created by its consturctor when it is declared with arguments.
```
class A{
  public:
  A(){}
}
```

- A nested object is created in two stages:
1. the member objects are created with their respective constuctors.
2. The the other members are created.
- This means constructors of all the member objects should be called before its own constructor body is executed.

- This is accomplished using an initialization list in the constructor of the nested class.

```
class D{
 public:
  D(int d){

  }
};

class B{
  public:
  B(int b){

  }
};

class A{
  B bobj;
  D dobj;
  int a;
  public:
  A(int b, int d1, int a1) : bobj(b), dobj(d1){
       a=a1;
  }
}
```
- The constructors of the member objects are called in the order in which they are declared in the nested class.

# class with base class and object of another class
1. First base class constructors will be executed based on order of declaration of the derived class.
2. Then the data objects class constructor will be called.
3. Derived class / nested class constructor body will be executed.
```
class A{
  public:
   A(int a){
    cout<<"constructor A = "<<a<<endl;
   }
};

class B{
  public:
   B(int b1, int b2){
    cout<<"constructor B = "<<b1<<" "<<b2<<endl;
   }
};

class D{
  public:
  D(int d){
     cout<<"constructor D = "<<d<<endl;
  }
};

class C: public A, public B{
  int c;
  D dobj;
 public:
 C(int a, int b1, int b2, int d, int c1) :
  A(a),
  B(b1,b2),
  dobj(d)
  {
   c=c1;
   cout<<"constructor C = "<<c<<endl;
  }

};

int main(){
  C objc(1,2,3,4,5);
  return 0;
}

Output:
constructor A = 1
constructor B = 2 3
constructor D = 4
constructor C = 5
```