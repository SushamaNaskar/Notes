# Q1
function foo(a, b) {
    console.log(arguments[0]);
  console.log(arguments[1]);
}

foo(3);

Output
3
undefined

Explanation: In this code, the function foo() takes two arguments a and b. When the function is called on line 4 with only one argument 3, the value of a is set to 3 and the value of b is undefined because no second argument was passed.

The arguments object is an array-like object that contains all the arguments that were passed to a function. In this case, arguments[0] would be 3, and arguments[1] would be undefined.

Therefore, when arguments[1] are logged to the console, it will output undefined.