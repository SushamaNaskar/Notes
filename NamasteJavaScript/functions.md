# Javascript functions
- In JavaScript, functions can be categorized broadly into two types based on their syntax: function declarations (or statements) and function expressions

# function statement / function declaration
<!-- A function declaration defines a function with the specified parameters. It is hoisted to the top of its scope, which means it can be called before it is defined in the code.

A function declaration also known as a function statement declares a function with a function keyword. The function declaration must have a function name. -->

A function statement (also known as a function declaration) defines a named function and allows it to be called anywhere in the code because it's hoisted.

function functionName(parameters) {
  // function body
}

# function expression
A function expression defines a function as part of an expression. It can be named or anonymous and is not hoisted, so it can only be called after it's defined.

const functionName = function(parameters) {
  // function body
};

Function expressions can also be anonymous (without a name).

const add = function(a, b) {
  return a + b;
};


# difference between function statement and function expression
- The main differences between function statements (declarations) and function expressions in JavaScript revolve around their syntax, hoisting behavior, and when they are defined and available for use.

syntax
- Function declarations must have a name.
- A function expression defines a function as part of an expression. It can be named or anonymous

Hoisting
- Function declarations are hoisted.
- Function expressions are not hoisted.

Usage Context
- Function Statement (Declaration): Function declarations are typically used when you need to define a function that can be called anywhere in its scope.
- Function Expression: Function expressions are useful when you need to create a function dynamically or pass a function as an argument to another function.

<!-- ## Syntax
- Function Statement (Declaration): A function statement defines a function with a specified name and is declared using the function keyword.
- Function Expression: A function expression defines a function as part of an expression. It can be named or anonymous and is often assigned to a variable.

## Hoisting
- Function Statement (Declaration): Function declarations are hoisted. This means you can call the function before its actual declaration in the code.

- Function Expression: Function expressions are not hoisted. This means you cannot call the function before the line where it is defined.

## Usage Context
- Function Statement (Declaration): Function declarations are typically used when you need to define a function that can be called anywhere in its scope.
- Function Expression: Function expressions are useful when you need to create a function dynamically or pass a function as an argument to another function. -->

<!-- ## Named vs. Anonymous
- Function Statement (Declaration): Function declarations must have a name.
- Function Expression: Function expressions can be named or anonymous. Named function expressions can be useful for recursion or for more descriptive stack traces.

## Context and Scope
- Both function declarations and function expressions are scoped to the context in which they are defined. However, function expressions can be used in more flexible contexts, such as immediately invoked function expressions (IIFEs). -->

# Types of Functions in JavaScript

1. Named Functions: Defined with a name and can be called by that name.

function namedFunction() {
  console.log('This is a named function');
}

2. Anonymous Functions: Functions without a name, often used in function expressions and as arguments to other functions.

const anonFunction = function() {
  console.log('This is an anonymous function');
};

(function() {
  console.log('IIFE executed');
})();

4. IIFE (Immediately Invoked Function Expression): An IIFE is a function expression that is immediately executed after it is defined.

(function() {
  console.log('IIFE executed');
})();

var result = (function() {
	var x = 10;
	var y = 20;
	return x + y;
})();

console.log(result); // Output: 30


3. Arrow Functions: Arrow functions are a shorter syntax for writing function expressions and do not have their own "this" context. They are always anonymous.

const arrowFunction = () => {
  console.log('This is an arrow function');
};

<!-- 5. Generator Functions: Functions that can be paused and resumed, producing a sequence of results.

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3; 
} -->

6. Constructor Functions: Functions used to create objects using the new keyword.

function Person(name) {
  this.name = name;
}

const person1 = new Person('John');


# Callback functions
- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. This is a common pattern in JavaScript for handling asynchronous operations, such as reading files, making network requests, or responding to user events without blocking the main thread.

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
<!-- They enable asynchronous programming, allowing the code to perform tasks without blocking the main thread. -->

 

1. Basic Example:

 function greet(name, callback) {
  console.log('Hello, ' + name + '!');
  callback();
}



function afterGreet() {
  console.log('This is the callback function.');
}

greet('Alice', afterGreet);

2. Asynchronous Example: They enable asynchronous programming, allowing the code to perform tasks without blocking the main thread.
- Callback functions are often used in asynchronous operations like reading a file or making an HTTP request. 

function doTask(callback) {
  console.log('Starting task...');
  setTimeout(() => {
    console.log('Task completed.');
    callback();
  }, 2000);
}

function afterTask() {
  console.log('This runs after the task is complete.');
}

doTask(afterTask);

3. Event Handling: They are essential for handling events in JavaScript, such as user interactions.

- document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button clicked!');
});


# First-Class Functions
- functions are considered first-class citizens, which means they are treated as first-class functions. 

# First class citizens
- functions are considered first-class citizens, which means they are treated as first-class functions.
- When we say functions are first-class citizens, we mean that functions in JavaScript are treated like any other variable. They can be:
1. Assigned to a variable

 const sayHello = function() {
  console.log('Hello!');
};

2. Passed as an argument to another function

function greet(callback) {
  callback();
}

greet(sayHello);

3. Returned from another function

function createGreeter() {
  return function() {
    console.log('Hello!');
  };
}

const greeter = createGreeter();
greeter(); // Outputs: Hello!

4. Stored in data structures : 

const functions = [sayHello, greeter];
functions.forEach(func => func());