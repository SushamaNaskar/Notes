# Execution Context
- JavaScript Execution Context is the environment in which JavaScript code is executed. 
- There are two types of execution contexts: global and function. The global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. A function execution context is created whenever a function is called, representing the function's local scope.

# Global execution context
- In web browsers, the global context is said to be that of the window object, so all global variables and functions defined with var are created as properties and methods on the window object. 
- Declarations using let and const at the top level are not defined in the global context, but they are resolved identically on the scope chain. 

# Components of Execution Context
- execution context is divided into two components: memory and code.

# Phases of the JavaScript Execution Context
- There are two phases of JavaScript execution context: creation phase and execution phase

# Creation phase /Memory Allocation Phase:
## Creation of the Variable Object (VO)
 all the functions and variables of the JavaScript code get stored as a key-value pair inside the memory component of the execution context. In case of a function, The entire function code is stored into the memory block but in the case of variables, it assigns undefined as a placeholder.


# Hoisting
The process of storing variables and function declaration in memory prior to the execution of the code is known as Hoisting. 

Function Declarations: Fully hoisted; can be called before their declaration.
var Declarations: Hoisted and initialized to undefined. Can be accessed before the declaration but will return undefined.
let and const Declarations: Hoisted but not initialized. Accessing them before the declaration results in a ReferenceError.
Arrow function :  They are treated like variables declared with let or const. This means that they are not accessible before they are defined in the code.

# Temporal Dead Zone
The Temporal Dead Zone is a concept in JavaScript that prevents access to variables  before they are declared and initialized. During this time, the variable cannot be accessed, and attempting to do so will result in a ReferenceError. It occurs for block-scoped variables declared using let and const.


## creation of the Scope Chain
- Creates lexical enviorment, enabling scope chaining.

# Scope 
Scope means where we can access a specific variable or a function in our code.
1. Global Scope: Variables declared outside any function are in the global scope and can be accessed from anywhere in the code.
2. Local Scope: Variables declared within a function are in the local scope and can only be accessed within that function.
3. Block Scope: Variables declared using let and const has block scope and can only be accssed within the block in which they are declared.
<!-- and its nested functions -->

# Lexical Enviorment
- A Lexical Environment is a data structure that holds identifier-variable mappings.
- Each function invocation creates a new lexical environment, which contains:

Environment Record: An object that stores local variables and function declarations within the current function.
Outer Lexical Environment Reference: A reference to the lexical environment of the parent function (the function within which the current function is defined)

Mapping:
When we talk about identifier-variable mappings, we are referring to the association between a name (the identifier) and the actual value or reference (the variable)

# Scope Chaining
- scope chaining is like a linked chain of lexical environments where each environment has access to its own variables and the variables of its parent environments.

- When code is executed in a context, a scope chain of variable objects is created. The purpose of the scope chain is to provide ordered access to all variables and functions that an execution context has access to. 


<!-- # Lexical Scoping
lexical scoping ensures that a function's scope includes its own local variables and the variables of all its enclosing functions, determined by where it is defined in the source code.

# summary
Lexical Scoping means that the scope of variables is determined by their placement in the code, creating a series of nested lexical environments. These environments form a scope chain that JavaScript uses to resolve variable references. So, lexical scoping inherently involves the creation of lexical environments, which are crucial for managing variable visibility and accessibility in JavaScript. -->

<!-- that lexical scoping creates these nested scopes and scope chaining is the process of resolving variable references through these nested scopes, you see that lexical chaining and scope chaining essentially describe the same process.

To summarize, scope chaining is the term more commonly used to describe the process by which JavaScript resolves variable references through nested lexical environments. Lexical chaining would be an appropriate term as well, but it is less frequently used in discussions of JavaScript scoping. -->

<!-- Each Function Execution Context creates its scope: the space/environment where the variables and functions it defined can be accessed via a process called Scoping.

When a function is defined in another function, the inner function has access to the code defined in that of the outer function, and that of its parents. This behavior is called lexical scoping.

However, the outer function does not have access to the code within the inner function.

the golbal execution context has null  -->

## Creation of global object and "this" keyword
- Creates the global object i.e., window in the web browser or global in Node.js. 
- Variables and functions declared globally (outside of any function) become properties and methods of the window object.
- Creates the "this" object and binds it to the global object.

<!-- # window object
- The window object is a global object in the browser environment. It represents the window or tab in which the script is running.
- The window object is created by the browser when it loads a new document into a window or tab.
- Global Scope: Variables and functions declared globally become properties and methods of the window object.
- Browser API: The window object provides access to the browser's APIs, such as alert, console, setTimeout, document, and many more.-->


# this keyword
- Its value depends on how the function is called.
- Global Context: In the global context (outside of any function), this refers to the window object in the browser.

console.log(this); // Output: window object

- Object Method: When a function is called as a method of an object, this refers to the object itself.

const obj = {
  name: "John",
  greet: function() {
    console.log(this.name); // Output: "John"
  }
};
obj.greet();


- Constructor Function: When a function is used as a constructor with the new keyword, this refers to the newly created instance.

function Person(name) {
  this.name = name;
}
const person = new Person("Jane");
console.log(person.name); // Output: "Jane"

- Arrow Functions: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context.

const obj = {
  name: "Alice",
  greet: function() {
    const arrowFunc = () => {
      console.log(this.name); // Output: "Alice"
    };
    arrowFunc();
  }
};
obj.greet();

- Event Handlers: In event handlers, this usually refers to the element that received the event.

const button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log(this); // Output: button element
});

- Explicit Binding: You can explicitly set the value of this using call, apply, or bind.

function greet() {
  console.log(this.name);
}
const person = { name: "Bob" };
greet.call(person); // Output: "Bob" 


# Execution phase:
- During the execution phase, the JavaScript engine executes the code line by line, assigns the values to variables, and executes the function calls.
- For each function call, the JavaScript engine creates a new function execution context.

# Call Stack/ Execution Context Stack / Runtime Stack / Machine Stack
- To keep track of all the execution contexts, including global and function, the JavaScript engine uses a call stack.
- It uses the LIFO principle (Last-In-First-Out). 
- When a JavaScript program starts executing, the JavaScript engine first creates the global execution context and pushes it on the stack. 
- Whenever a function is invoked, similarly, the JS engine creates a function execution context for the function and pushes it to the top of the call stack and starts executing it.
- When execution of the current function is completed, then the JavaScript engine removes the context from the call stack and the control goes back to its parent.