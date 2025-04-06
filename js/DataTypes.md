# DATA TYPES
- There are six simple data types (also called primitive types) in ECMAScript: Undefined, Null, Boolean, Number, String, and Symbol.  
- There is also one complex data type called Object.

1. Undefined
2. Null
3. Boolean
4. Number
5. String
6. Symbol
7. Object

# The typeof Operator
- The typeof Operator gives us the data type of a given variable.
1. "undefined" if the value is undefined
2. "boolean" if the value is a Boolean
3. "string" if the value is a string
4. "number" if the value is a number
5. "object" if the value is an object (other than a function) or null 
6. "function" if the value is a function
7. "symbol" if the value is a Symbol
```
console.log(typeof 95); // "number"
```
## note
Calling typeof null returns a value of "object", as the special value null is considered to be an empty object reference.

# The Undefined Type
- By default, any uninitialized variable gets the value of undefined.
-  it was introducted to help formalize the difference between an empty object pointer (null) and an uninitialized variable.
- When a variable is declared using var or let but not initialized, it is assigned the value of undefined as follows:
```
let message;
console.log(message == undefined); // true
```
## note
- calling delete on an undeclared variable won’t cause an error, but this isn’t very useful and in fact throws an error in strict mode.
- The typeof operator returns "undefined" when called on an uninitialized variable, but it also returns "undefined" when called on an undeclared variable
```
let message; // this variable is declared but has a value of undefined
// make sure this variable isn't declared 
// let age
console.log(typeof message); // "undefined" console.log(typeof age); // "undefined"
```
- The value undefined is falsy;
```
let message; // this variable is declared but has a value of undefined 
// 'age' is not declared
if (message) {
// This block will not execute
}
if (!message) {
// This block will execute
}
if (age) {
// This will throw an error
}
```
## note
- <b>you should never explicitly set the value of a variable to undefined</b>
- Since undeclaired variable and declared variable with no value assign both are undefined, for an undeclaired variable this line of code will throw an error
```
if (age) {
// This will throw an error
}
```
Therefore, its better to use typeof to check for undefined value

# The null type
- null  has only one value: the special value null.
- The null type is falsy
-  Logically, a null value is an empty object pointer, which is why typeof returns "object"

```
let car = null;
console.log(typeof car); // "object"
``` 
- Any time an object is expected but is not available, null should be used in its place. This helps to keep the paradigm of null as an empty object pointer and further differentiates it from undefined.

## note
- When defining a variable that is meant to later hold an object, it is advisable to initialize the variable to null as opposed to anything else. 
- That way, you can explicitly check for the value null to determine if the variable has been filled with an object reference at a later time, such as in this example:
```
if (car != null) {
// do something with car
}
```

# The Boolean Type
- has only two literal values: true and false.
- These values are distinct from numeric values, so true is not equal to 1, and false is not equal to 0
- the Boolean literals true and false are case–sensitive, so True and False (and other mix- ings of uppercase and lowercase) are valid as identifiers but not as Boolean values.

# Boolean function
- All types of values have Boolean equivalents in ECMAScript.
- To convert a value into its Boolean equivalent, the special Boolean() casting function is called, like this:

```
let message = "Hello world!";
let messageAsBoolean = Boolean(message);
```
The following table outlines the various data types and their specific conversions.

<table>
  <tr>
    <th>DATA TYPE</th>
    <th>VALUES CONVERTED TO TRUE</th>
    <th>VALUES CONVERTED TO FALSE</th>
  </tr>
  <tr>
    <td>Boolean</td>
    <td>true</td>
    <td>false</td>
  </tr>
  <tr>
    <td>String</td>
    <td>Any nonempty string</td>
    <td>"" (empty string)</td>
</tr>
 <tr>
    <td>Number</td>
    <td>Any nonzero number (including infinity)</td>
    <td>0, NaN </td>
</tr>
 <tr>
    <td>Object</td>
    <td>Any object</td>
    <td>null</td>
</tr>
 <tr>
    <td>Undefined</td>
    <td>n/a</td>
    <td>undefined</td>
</tr>
</table>

These conversions are important to understand because flow-control statements, such as the if statement, automatically perform this Boolean conversion, as shown here:
```
let message = "Hello world!"; if (message) {
console.log("Value is true"); }
```

# The Number Type
- In ECMAScript Number, uses the IEEE–754 format to represent both integers and floating-point values (also called double–precision values in some lan- guages).
- To support the various types of numbers, there are several different number literal formats.

- The most basic number literal format is that of a decimal integer, which can be entered directly as shown here:
```
let intNum = 55; // integer
```

- Integers can also be represented as either octal (base 8) or hexadecimal (base 16) literals.
-  For an octal literal, the first digit must be a zero (0) followed by a sequence of octal digits (numbers 0 through 7).
```
let octalNum1 = 070; // octal for 56
```
- If a number out of this range is detected in the literal, then the leading zero is ignored and the number is treated as a decimal, as in the following examples:

```
let octalNum2 = 079; // invalid octal - interpreted as 79
let octalNum3 = 08; //invalid octal - interpreted as 8
```
## note
Octal literals are invalid when running in strict mode and will cause the JavaScript engine to throw a syntax error.

- To create a hexadecimal literal, you must make the first two characters 0x (case insensitive), followed by any number of hexadecimal digits (0 through 9, and A through F). Letters may be in uppercase or lowercase. Here’s an example:
```
let hexNum1 = 0xA; // hexadecimal for 10 
let hexNum2 = 0x1f; // hexadecimal for 31
```
## note
- Numbers created using octal or hexadecimal format are treated as decimal numbers in all arithmetic operations.

- Because of the way that numbers are stored in JavaScript, it is actually possible to have a value of positive zero (+0) and negative zero (–0).Positive zero and negative zero are considered equivalent in all cases.

# Floating-Point Values
- To define a floating-point value, you must include a decimal point and at least one number after the decimal point. Although an integer is not necessary before a decimal point, it is recommended.
```
let floatNum2 = 0.1;
let floatNum3 = .1; // valid, but not recommended
```
# NaN
- There is a special numeric value called NaN, short for Not a Number
-  which is used to indicate when an operation intended to return a number has failed (as opposed to throwing an error)
- For example, dividing any number by 0 typically causes an error in other programming languages, halting code execution. In ECMAScript, dividing a number by 0 returns NaN, which allows other processing to continue.


# Revised

# Data types in Js
- There are 6 simple data types (called primitive data types): Undefined, Null, boolean, number, string and symbol and 1 reference or complex data type called object.

# The undefined type
