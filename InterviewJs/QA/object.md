# Q1
```
let x = { b: 1, c: 2 };
let y = Object.keys(x);
console.log(y.length);

```
output : 2

Explanation: The code first creates an object x with two properties b and c, and assigns it to the variable x. Then, the Object.keys() method is used to retrieve an array of the keys of x, which are “b” and “c”. This array is assigned to the variable y.

Finally, the length of the array y (which is the number of keys in x) is printed to the console using console.log(). Since y has two elements, the output of y.length will be 2.

# Q2
```
let x = '{ "b": 1, "c": 2 }';
let y = JSON.parse(x);
console.log(typeof y); 
```
output: object

Explanation: The code creates a string x that contains a JSON-encoded object with two properties “b” and “c”, and assigns it to the variable x. The JSON.parse() method is then used to parse the JSON-encoded string x into a JavaScript object, which is assigned to the variable y.

The console.log() statement then outputs the data type of y using the typeof operator. Since y is now an object, the output will be an object.

# q3
const a = { b: { c: 2 } };
const b = { ...a };
a.b.c = 3;

console.log(b.b.c);

Output
3
Explanation: In this code, a constant a is defined as an object containing another object b, which in turn contains a property c with a value of 2. Then a constant b is defined by spreading into a new object. This creates a new object b with the same properties and values as a. 

Then the value of the property c in a is changed to 3.

When the property b.b.c is accessed from object b, it will still reference the same object as a.b.c, because b is a new object that contains the same object a.b. Therefore, the value of b.b.c will be 3.

Therefore, when b.b.c is logged into the console, it will output 3.


# Q4
let x = { a: 1, b: 2 };
let y = { b: 3 };
let z = { ...x, ...y };

console.log(z);

Output
{ a: 1, b: 3 }
Explanation: In this code, two objects x and y are defined. x contains properties a and b, while y contains property b. Then, the spread operator … is used to create a new object z that contains all of the properties from x and y.

When there are conflicting property names, as in this case with the property b, the value from the later object (in this case, y) will overwrite the value from the earlier object (x).

Therefore, when z is logged to the console, it will output { a: 1, b: 3 }.