# What is a Prototype?
- Every object in JavaScript has a built-in property, which is called its prototype.
- It acts as a template from which the object can inherit methods or properties.
- The prototype is itself an object, so the prototype will have its own prototype making what's called a prototype chain.
- The chain ends when we reach a prototype that has null for its own prototype.
- The benefit of using the prototype is that all of its properties and methods are shared among object instances. 

# Note: 
- The property of an object that points to its prototype is not called prototype. 
- There is no standard way to access [[Prototype]], but in practice all browsers use __proto__. 
- The standard way to access an object's prototype is the Object.getPrototypeOf() method.

const obj={};
console.log(Object.getPrototypeOf(obj));
![alt text](<Screenshot 2025-03-26 at 2.39.57 PM.png>)

- When you try to access a property or method on an object:
     1. JS first looks for it on the object itself.
     2. If it’s not found, it looks at the object’s prototype.
     3. Then it looks at prototype of prototype.
     4. This continues up the prototype chain until it reaches null (the top of the chain).


# Native Object Prototypes
- In JavaScript, built-in types like Object, Array, String, Number are just constructor functions with prototypes.
- For instance, the sort() method can be found on Array.prototype, and substring() can be found on String.prototype,
as shown here:

console.log(typeof Array.prototype.sort); // "function"
console.log(typeof String.prototype.substring); // "function"

![alt text](<Screenshot 2025-03-26 at 3.04.15 PM.png>)

# Primitive type
- Javascript has a property called coercion when it comes to primitives; it silently converts the primitive to any object and then accesses the prototype method of the newly constructed number object.

const str="";
console.log(Object.getPrototypeOf(str));

![alt text](<Screenshot 2025-03-26 at 3.04.15 PM.png>)

# Prototype
- In JavaScript, a prototype is a built-in mechanism that enables objects to inherit properties and methods from one another.
- Each function is created with a prototype property. which is an object containing properties and methods that should be available to instances of a particular reference type.

- This object is literally a prototype for the object to be created once the constructor is called.

## Function Constructor
- When we create an object using a constructor function or class, that object gets linked to the constructor's prototype.

