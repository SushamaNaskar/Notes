string : 194
171 213

# A reference value (object) 
<!-- - A reference value (object) is an instance of a specific reference type. -->
- In ECMAScript, reference types are structures used to group data and functionality together.
- Reference types are also sometimes called object definitions because they describe the properties and methods that objects should have.
- objects are considered to be instances of a particular reference type.
-  New objects are created by using the new operator followed by a constructor. A constructor is simply a function whose purpose is to create a new object. Consider the following line of code:
let now = new Date();

This code creates a new instance of the Date reference type and stores it in the variable now. The
constructor being used is Date(), which creates a simple object with only the default properties and
methods. ECMAScript provides a number of native reference types, such as Date, to help developers
with common computing tasks.

# Basic reference type
In JavaScript, reference types are a category of data types that store references to memory locations where the actual data is stored, rather than holding the actual data itself. These types are objects, arrays, functions, and certain built-in objects like Date and RegExp.

# Key Characteristics of Reference Types:
Stored by reference: When a reference type is assigned to another variable, both variables will refer to the same object in memory. This means changes made to one variable will also affect the other variable.
Mutable: The values of reference types can be changed. For example, properties of an object or elements of an array can be modified.
No direct comparison: When comparing reference types, JavaScript compares the references (i.e., memory locations), not the actual content of the objects.

# Comparison of Primitive vs. Reference Types
Primitive types (like numbers, strings, booleans, null, undefined, and symbols) store their actual values directly in variables.
Reference types store references (or memory addresses) pointing to the actual data. When copied or assigned, only the reference is copied, not the actual data.

Example of comparison:
// Primitive type comparison
let a = 10;
let b = a;
b = 20;
console.log(a);  // 10 (no change, because `a` is a primitive type)

// Reference type comparison
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name);  // "Bob" (changes to `obj2` affect `obj1`)

In the first example with primitive types, modifying b does not affect a because they hold copies of the values. In the second example, modifying obj2 affects obj1 because they are references to the same object.

# Other Important Notes:
Copying objects: To avoid modifying the same reference, you can create a shallow copy or a deep copy of an object. For example:
Shallow copy: Use Object.assign() or spread syntax.
Deep copy: Use JSON.parse() and JSON.stringify() (note that this has limitations, such as not copying functions or special objects like Date).
javascript
Copy
// Shallow copy
let original = { name: "Alice", age: 25 };
let shallowCopy = { ...original };
shallowCopy.age = 30;

console.log(original.age);  // 25
console.log(shallowCopy.age);  // 30

// Deep copy
let deepCopy = JSON.parse(JSON.stringify(original));
Null: null is a primitive type and is a special value representing the absence of any object.


# Common Reference Types in JavaScript:

1. Objects
Objects are collections of key-value pairs. They are the most common reference type and can hold any data type, including other objects or arrays.

javascript
Copy
let person = {
  name: "John",
  age: 30
};

let anotherPerson = person;  // Reference assignment
anotherPerson.age = 31;  // Modifying the value of the `age` property

console.log(person.age);  // 31 (the original object is also modified)
console.log(anotherPerson.age);  // 31
Here, both person and anotherPerson refer to the same object, so changes to one affect the other.

2. Arrays
Arrays are ordered collections of values. They are also reference types in JavaScript, so assigning one array to another does not create a copy but rather a reference to the original array.

javascript
Copy
let numbers = [1, 2, 3];
let moreNumbers = numbers;  // Reference assignment

moreNumbers.push(4);  // Modify the array

console.log(numbers);  // [1, 2, 3, 4] (numbers is also modified)
console.log(moreNumbers);  // [1, 2, 3, 4]
Both numbers and moreNumbers refer to the same array in memory, so changes to one array will reflect in the other.

3. Functions
Functions are also reference types. A function in JavaScript is essentially an object, and when you assign one function variable to another, both variables point to the same function in memory.

javascript
Copy
function greet() {
  console.log("Hello!");
}

let greetCopy = greet;  // Reference assignment
greetCopy();  // "Hello!" (both variables refer to the same function)
Here, greet and greetCopy refer to the same function, so calling greetCopy() results in the same behavior as calling greet().

4. Date
The Date object represents dates and times in JavaScript. It is a reference type, so assigning one Date object to another creates a reference to the same date object in memory.

javascript
Copy
let today = new Date();
let anotherDay = today;  // Reference assignment

anotherDay.setFullYear(2025);  // Modify the year of the date

console.log(today.getFullYear());  // 2025 (the original date is modified)
console.log(anotherDay.getFullYear());  // 2025
Both today and anotherDay refer to the same Date object in memory, so modifying one affects the other.

5. RegExp
Regular expressions (RegExp) are also objects and are reference types in JavaScript.

javascript
Copy
let pattern = /abc/;
let anotherPattern = pattern;  // Reference assignment

console.log(pattern === anotherPattern);  // true (both refer to the same object)