# The Undefined Type
The Undefined type has only one value, which is the special value undefined. When a variable is declared using var or let but not initialized, it is assigned the value of undefined as follows:

let message;
console.log(message == undefined); // true

# typeof operator 
The typeof operator returns "undefined" when called on an uninitialized variable, but it also returns "undefined" when called on an undeclared variable, which can be a bit confusing. Consider this example:

ex1:
// make sure this variable isn't declared
// let age

let message; // this variable is declared but has a value of undefined
console.log(typeof message); // "undefined"
console.log(typeof age); // "undefined"


ex2:
let message; // 'age' is not declared
// this variable is declared but has a value of undefined
if (message) {
// This block will not execute
}
if (!message) {
// This block will execute
}
if (age) {
// This will throw an error
}