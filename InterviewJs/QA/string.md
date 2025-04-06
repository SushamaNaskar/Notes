# Q1
```
let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y); 
```
output: object

Explanation: The code creates a string x that contains a JSON-encoded object with two properties “b” and “c”, and assigns it to the variable x. The JSON.parse() method is then used to parse the JSON-encoded string x into a JavaScript object, which is assigned to the variable y.

The console.log() statement then outputs the data type of y using the typeof operator. Since y is now an object, the output will be an object.

# Q2
let x = "5";
let y = 2;

console.log(x + y);
console.log(x - y);

Output
52
3
Explanation: In the first statement, x is a string (“5”) and y is a number (2). When you use the + operator with a string and a number, JavaScript performs string concatenation: it converts the number to a string and then concatenates the two strings. So “5” and 2 are concatenated to produce the string “52”.

In the second statement, x is still a string (“5”) and y is still a number (2). However, when you use the – operator with a string and a number, JavaScript attempts to convert the string to a number. In this case, “5” can be converted to the number 5, so the expression evaluates to 5 – 2, which is 3.

# Q3
let x = "hello";
let y = new String("hello");

console.log(x == y);
console.log(x === y);

Output
true
false

Explanation: In JavaScript, the == operator performs type coercion, meaning it converts the operands to a common type before comparing them. In this case, x is a string primitive (“hello”) and y is a string object (new String(“hello”)). When you use the == operator to compare them, JavaScript will convert y to a primitive value using the toString() method, so the comparison becomes “hello” == “hello”, which is true.

On the other hand, the === operator performs a strict comparison without any type coercion. In this case, x and y are of different types, so the comparison will always be false, even if their values are the same.