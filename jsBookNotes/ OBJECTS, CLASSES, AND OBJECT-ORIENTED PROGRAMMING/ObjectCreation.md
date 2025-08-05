# OBJECT CREATION

# Object literals
When we create objects using object literals ({}) or the Object constructor, each object is independent. This means if we need multiple objects with the same properties and methods, we must duplicate code.

Imagine we need multiple person objects:
```
const person1 = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

const person2 = {
  name: "Bob",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person1.greet(); // "Hello, my name is Alice"
person2.greet(); // "Hello, my name is Bob"
```

# The Factory Pattern
function createPerson(name, age, job) {

    let o = new Object();
     o.name = name;  
     o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
   return o;
}

let person1 = createPerson("Nicholas", 29, "Software Engineer");
let person2 = createPerson("Greg", 27, "Doctor");

# Problem of using  Object literals and The Factory Pattern to create an object
1. the factory pattern didn’t address the issue of object identification (what type of object an object is). 
- we use Function Constructor to resolve this issue


2. The greet function is duplicated in both objects,  wasting memory.
2. There’s no easy way to update the greet function for all objects. (In programming, we often want to take something and extend it/inheritance)

- we use prototypes to resolve this issue


# Solution: Use prototype (via Constructor Functions or Classes)
1. Before ES6 → Developers manually used constructor functions and prototypes for inheritance.
2. ES6 and later → class syntax makes this easier, but it still works the same way internally.


# Constructor Function and Prototypes
- Instead of defining methods inside each object, we define them once on the prototype so all objects share the same method.

successfully.
```
function Person(name) {
  this.name = name; // Unique property for each instance
}

// Define methods once on the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person5 = new Person("Emma");
const person6 = new Person("Frank");

person5.greet(); // "Hello, my name is Emma"
person6.greet(); // "Hello, my name is Frank"
```

- The greet function is shared between all Person objects.
- Less memory usage, more efficient!

# Problems with Prototypes
- it negates the ability to pass initialization arguments into the constructor, meaning that all instances get the same property values by default.
- All properties on the prototype are shared among instances, which is ideal for functions. Properties that contain primitive values also tend to work well, The real problem occurs when a property contains a reference value, since  prototype properties containing reference values are shared with all instances.
-  the syntax becomes excessively verbose and messy while implementing inheritance using constructor function and prototypes.

# Class
With ES6, JavaScript introduced class syntax, making object-oriented programming easier and more readable. But under the hood, ES6 classes still use prototypes—they’re just a cleaner way to write constructor functions and inheritance.