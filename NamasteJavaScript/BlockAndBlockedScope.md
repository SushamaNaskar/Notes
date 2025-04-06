# Block/ compound statement
A block is a group of statements enclosed in curly braces {}. Blocks are used in various places, such as within functions, loops, conditionals, and other control structures.

# Block Scope
Block scope refers to the scope of variables declared within a block. In ES6, the let and const keywords were introduced to provide block-scoped variables. This means that variables declared with let and const are only accessible within the block in which they are defined.

ex: 
{
  let x = 10;
  console.log(x); // 10

  const z=10;
  console.log(z); // 10
}
console.log(x); // ReferenceError: x is not defined
console.log(z); // ReferenceError: z is not defined


# Differences Between var, let, and const

var: Before ES6, var was used to declare variables. var is function-scoped, meaning it is accessible throughout the function in which it is declared, or globally if declared outside of a function.

{
    var b=10;
}
console.log(b);  //b is not block scope

function x(){
    var a=5;
    console.log("x",a);
}

x();
console.log(a); // ReferenceError: a is not defined

let and const: Introduced in ES6, these are block-scoped. Variables declared with let can be reassigned, while those declared with const cannot be reassigned and must be initialized at the time of declaration.

{
  let a = 40;
  a = 50; // allowed
  console.log(a); // 50
}

{
  const b = 60;
  // b = 70; // TypeError: Assignment to constant variable
  console.log(b); // 60
}

# Shadowing
Shadowing occurs when a variable declared within a certain scope (such as within a block or function) has the same name as a variable declared in an outer scope. The inner variable "shadows" the outer variable, making the outer variable inaccessible within the inner scope.

ex:
let x = 10;

function example() {
  let x = 20; // This `x` shadows the outer `x`
  console.log(x); // 20
}

example();
console.log(x); // 10