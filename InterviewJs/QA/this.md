# Q1
let a = () => {
  console.log(this);
};

a();

Output
The code will output the global object (Window in a browser, or global in Node.js).

Explanation: In JavaScript, the behavior of this keyword inside a function depends on how the function is called. When a function is called with no explicit receiver (i.e., no object to the left of the . when calling the function), this will refer to the global object (Window in a browser, or global in Node.js).

In the given code, a is an arrow function that has no explicit receiver when it is called. Therefore, when a() is executed, this will refer to the global object, and the console.log statement inside the function will output the global object.