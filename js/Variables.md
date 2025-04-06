# Variables
- ECMAScript variables are loosely typed, meaning that a variable can hold any type of data. 
- Every variable is simply a named placeholder for a value. 
- There are three keywords that can be used to declare a variable: 
1. var
2. const
3. let

# var
- variable created using var can hold any value
- Without initialization, it holds the special value undefined
```
var message="hi";
message=100;
```
- It is still possible to not only change the value stored in the variable but also change the type of value.

# var declaration scope
- Using the var operator to define a variable makes it local to the function scope in which it was defined.
- Defining a variable inside of a function using var means that the variable is destroyed as soon as the function exits.

```
function test() {
var message = "hi"; // local variable
}
test();
console.log(message); // error!
```
 The function test() is called , which creates the variable and assigns its value. Immediately after that, the variable is destroyed so the last line in this example causes an error.

 ## note
 - However, possible to define a variable globally by simply omitting the var operator as follows:
```
function test() {
message = "hi"; // global variable
}
test();
console.log(message); // "hi"
```
- By removing the var operator from the example, the message variable becomes global. As soon as the function test() is called, the variable is defined and becomes accessible outside of the function once it has been executed.
- This approach is not recommended. Global variables defined locally are hard to maintain and cause confusion because it’s not immediately apparent if the omission of var was intentional. <b>Strict mode throws a ReferenceError when an undeclared variable is assigned a value.</b>

# var Declaration Hoisting
- When using var, the following is possible because variables declared using var keyword are hoisted to the top of the function scope: 
```
function foo() { 
    console.log(age); // undefined
    var age = 26;
}
foo(); 
```
Does not throw any error,because the ECMAScript runtime technically treats it like this
```
function foo() {
    var age;
    console.log(age); // undefined
    age = 26; 
}
foo(); 
```
# Hoisting / 
- The interpreter pulls all variable declarations to the top of its scope.
```
function foo() { 
    console.log(age); //// undefined
    var age = 26;
}
foo(); 
```
Does not throw any error,because the ECMAScript runtime technically treats it like this
```
function foo() {
    var age;
    console.log(age); // undefined
    age = 26; 
}
foo(); 
```
-  It also allows you to use redundant var declarations without penalty:
```
function foo() { 
    var age = 16; 
    var age = 26; 
    var age = 36;
    console.log(age);  // 36
    }
foo();
```

# let Declarations VS var Declarations
- let is block scoped, but var is function scoped.

```
if (true) {
    var name = 'Matt'; 
    console.log(name); //Matt
} 
console.log(name); //Matt


if (true) {
    let age = 26; 
    console.log(age); //26
} 
console.log(age); //ReferenceError: age is not defined

```
- Block scope is strictly a subset of function scope, so any scope limitations that apply to var declarations will also apply to let declarations.

- A let declaration also does not allow for any redundant declarations within a block scope. Doing so will result in an error:
```
{
    var name; 
    var name;
}

{
    let age;
    let age; // SyntaxError; identifier 'age' has alread     been declared
}

```
- The JavaScript engine will keep track of identifiers used for variable declarations and the block scope they were declared inside, so nesting using identical identifiers behaves as you would expect with no errors because no redeclaration is occurring.


```
function test(){
    let age=30;
    let age=40; //error
   
    {
        let age=26;
        console.log(age); //26
    }
}
test();
```
# note
we can create let variables with same name as long as their scopes are different, (reffer above example).

- The different keywords do not declare different types of variables, they just specify how the variables exist inside the relevant scope
```
var name;
let name; // SyntaxError
let age;
var age; // SyntaxError
```
# Temporal Dead Zone
- The temporal dead zone (TDZ) is a specific period in the execution of JavaScript code where variables declared with let and const exist but cannot be accessed or assigned any value. During this phase, accessing or using the variable will result in a ReferenceError.
Let doesn't allow hoisting
```
// name is hoisted console.log(name); // undefined 
var name = 'Matt';

// age is not hoisted
console.log(age); // ReferenceError: age is not defined 
let age = 26;
```
- When parsing the code, JavaScript engines will still be aware of the let declarations that appear later in a block.
-  but these variables will be unable to be referenced before the actual declaration occurs. 
- The segment of execution that occurs before the declaration is referred to as the “temporal dead zone,” and any attempted references to these variables will throw a ReferenceError.

# Global Declarations

- Unlike the var keyword, when declaring variables using let in the global context, variables will not attach to the window object as they do with var.
```
var name = 'Matt'; console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined
```

## notes
```
for (var i = 0; i < 5; ++i) { 
    setTimeout(() => console.log(i), 0)
}
generates  5, 5, 5, 5, 5 output
```
- explanation
<ul>
<li>
<b>Loop and var Declaration:</b> 
 
 When you declare a variable with var, its scope is function-wide or global. Inside a loop, every iteration still refers to the same variable, so any changes made to it during the loop will affect all references to that variable.
</li>

<li>
<b>setTimeout and Asynchronous Execution:</b>

setTimeout does not execute immediately. It schedules the code inside its callback to run after a delay (in this case, 0 milliseconds). This delay means that the loop will likely complete its execution before any of the callbacks are executed.
</li>

<li>
<b>Closure and Loop Execution:</b>

- In the loop, every iteration schedules a setTimeout with a callback that logs the value of i. However, because setTimeout is asynchronous and the loop runs quickly, the loop completes before any of the scheduled callbacks start executing.
- Since i is declared with var, by the time the setTimeout callbacks are executed, the loop has already completed, and i has the final value of 5. Thus, all the callbacks reference this final value, leading to the repeated output of 5.
</li>

</ul>

```
for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
output : 0 1 2 3 4 5
```
- Explanation
1. When let is used in a for loop, it creates a unique, isolated variable for each iteration of the loop. Each loop iteration has its own "block," and let creates a variable scoped to that block. This ensures that the variable's value is preserved even after the loop has moved to the next iteration.
2. In this example, each loop iteration creates a new block-scoped i. When setTimeout is called, it creates a closure around the current block's i. Since each iteration has its own i, the setTimeout callback refers to the specific value of i at the time it was created. This is why the output is 0, 1, 2, 3, 4, because each callback "remembers" its own i.

# ’const’ Declarations
- const behaves identically to that of let 
- But with one important difference: it must be initialized with a value, and that value cannot be redefined after declaration. Attempting to modify a const variable will result in a runtime error.
```
const age = 26;
age = 36; // TypeError: assignment to a constant
```
- The const declaration is only enforced with respect to the reference to the variable that it points to. If a const variable references an object, it does not violate the const constraints to modify properties inside that object.
```
const person = {}; 
person.name = 'Matt'; // ok
```

# Revised
1. Variables
ECMAScript variables are loosly typed, meaning any variable can hold any type of data. Every variable is simply a name placeholder of a value. There are three keywords we can use to declare a variable, which are var, const and let.

2. Variables
ECMAScript variable are loosly typed, meaning any variable can holde any type of data. Every variable is simply a name placeholder for a value. There are three key words that we can use to declare a variable, which are var,const and let.

# var
using var keyword to define a variable makes it local to the function scopr in which it was declared.

# var
using var keyword to define a variable maked it local to the function scope in which it was declared.

# hoisting
the interpreter pulls all the variable declaration on top of it's scope. It allows us to redundent var declaration without penalty.
 
 # Hoisting
 The interpreted pulls all the variable declarations on top of it's scope. It allows us to use redundent var declaration without penalty.

 # let
 let is block scope. A let declaration also does not allow redundent declararion within a block scope.

 # let
 let is block scoped. A let declaration also does not allow redundent declaration within a block scope.

 # Temporal dead zone
The temporal dead zone (TDZ) is a period in execution on javascript code where variable declared with let and const exist but cannot be accessed or assigned any value. During this period accessing or using these values will throw a reference error.

# Temporal dead zone
The temporal dead zone is a specific period in the execution of javascript code where variable declared with let and const exist but cannot be accessed or assiged any values. During this phase, accessing or using this varialbes will throw a reference error.s

# const
const variables must be initialized with a value, and that value cann't be redefined after the assignment. doing so will throw a runtime error.

# const 
const variable must be initializes with a value, and that value cann't be redefined after the assignment. doing so will throw a runtime error.