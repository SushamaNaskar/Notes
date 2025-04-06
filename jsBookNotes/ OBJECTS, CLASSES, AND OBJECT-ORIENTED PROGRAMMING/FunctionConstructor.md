# Creating new objects 

## Constructor / The Function Constructor Pattern
- constructors in ECMAScript are used to create specific types of objects. 
-  There are native constructors, such as Object and Array, which are available automatically in the execution environment at runtime.
- It is also possible to define custom constructors, in the form of a function, that define properties and methods for your own type of object.

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = function() {
console.log(this.name);
};
}

let person1 = new Person("Nicholas", 29, "Software Engineer");
person1.sayName(); // Nicholas

let person2 = new Person("Greg", 27, "Doctor")
person2.sayName(); // Greg

## note:
1. There is no object being created explicitly.
2. The properties and method are assigned directly onto the this object.
3. There is no return statement.
4. By convention, constructor functions always begin with an uppercase letter, whereas nonconstructor functions begin with a lowercase
letter. This convention is borrowed from other OO languages and helps to distinguish function use in ECMAScript because constructors are simply functions that create objects. note the name of the function is Person with an uppercase P.

## To create a new instance of Person, use the new operator. Calling a constructor in this manner will do the following:
1. A new object is created in memory.
2. The new object’s internal [[Prototype]] pointer is assigned to the constructor’s prototype property.
3. The this value of the constructor is assigned to the new object (so this points to the new object).
4. The code inside the constructor is executed (adds properties to the new object).
5. If the constructor function returns a non-null value, that object is returned. Otherwise, the new object that was just created is returned.

## advantages
- The constructor property was originally intended for use in identifying the object type. However,
the instanceof operator is considered to be a safer way of determining type.
-  Each of the objects in this example is considered to be both an instance of Object and an instance of Person,

console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true

- Defining your own constructors ensures that instances can be identified as a particular type later on, which is a great advantage over the factory pattern.

# Constructor functions do not have to be expressed as a function declaration. A function expression assigned to a variable behaves identically:

let Person = function(name, age, job) {
this.name = name;
this.age = age;
this.job = job;
this.sayName = function() {
console.log(this.name);
};
}
let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");

person1.sayName(); // Nicholas
person2.sayName(); // Greg

console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true

# When instantiating, the parentheses after the constructor function are optional if you do not wish to pass any arguments—the new operator will invoke the constructor function no matter what

function Person() {
this.name = "Jake";
this.sayName = function() {
console.log(this.name);
};
}
let person1 = new Person();
let person2 = new Person;
person1.sayName(); // Jake
person2.sayName(); // Jake


# Constructors as Functions
- Constructors are, after all, just functions; there’s no special syntax to define a constructor that automatically makes it behave as such. 
- Any function that is called with the new operator acts as a constructor, whereas any function called without it acts just as you would expect a normal function call to act. 

## ex1: use as a constructor

let person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); // "Nicholas"

## ex2: call as a function
Person("Greg", 27, "Doctor"); // adds to window
window.sayName(); // "Greg"

- when the Person() function is called without the new operator: The properties and methods get added to the window object. 
- this object always points to the Global object (window in web browsers), when a function is called without an explicitly set this value (by being an object method or through call()/apply()).
-  the sayName() method can be called on the window object, and it will return "Greg".

## ex3: call in the scope of another object

let o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); // "Kristen"

# Problems with Constructors
- The major downside to constructors is that methods are created once for each instance.
- So, in the previous example, both person1 and person2 have a method called sayName(), but those methods are not the same instance of
Function. 
- Remember that functions are objects in ECMAScript, so every time a function is defined, it’s actually an object being instantiated. 
- So, functions of the same name on different instances are not equivalent, as the following code proves:
console.log(person1.sayName == person2.sayName); // false

Logically, the constructor actually looks like this:

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = new Function("console.log(this.name)"); // logical equivalent
}


It’s possible to work around this limitation by moving the function definition outside of the constructor, as follows:

function Person(name, age, job){
this.name = name;
this.age = age;
this.job = job;
this.sayName = sayName;
}

function sayName() {
console.log(this.name);
}

let person1 = new Person("Nicholas", 29, "Software Engineer");
let person2 = new Person("Greg", 27, "Doctor");
person1.sayName(); // Nicholas
person2.sayName(); // Greg

- In this example, the sayName() function is defined outside the constructor. 
- Inside the constructor, the sayName property is set equal to the global sayName() function.
- Because the sayName property now contains just a pointer to a function, both person1 and person2 end up sharing the sayName()
function that is defined in the global scope.
## note
 If the object needed multiple methods, that would mean multiple global functions, and all of a sudden the custom reference type definition is no longer nicely grouped in the code. These problems are addressed by using the prototype pattern.