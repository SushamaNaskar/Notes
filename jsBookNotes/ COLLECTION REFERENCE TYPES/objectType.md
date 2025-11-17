# The Object type
Although instances of Object don’t have much functionality, they are ideally suited to storing and transmitting data around an
application.
There are two ways to explicitly create an instance of Object:
1. use the new operator with the Object constructor like this:

let person = new Object();

person.name = "Nicholas";
person.age = 29;

2. use object literal notation:

let person = {
  name: "Nicholas",
  age: 29,
  5:true
};

# Note 
- numeric property names are automatically converted to strings.

#  expression context 
An expression context in ECMAScript is a context in which a value (expression) is expected.
Assignment operators indicate that a value is expected next, so the left curly brace indicates the beginning of an expression. The same curly brace, when appearing in a statement context, such as follows an if statement condition, indicates the beginning of a block statement.

let person = {
name: "Nicholas",
age: 29
};

In this example, the left curly brace ({) signifies the beginning of an object literal because it occurs in an expression context. 

#  dot notation
 - object properties are typically accessed using dot notation.
 console.log(person.name);

#  bracket notation
 When you use bracket notation, a string containing the property name is placed between the brackets, as in
this example:
let propertyName = "name";
console.log(person[propertyName]); // "Nicholas"


