# Increment/Decrement prefix (++val, --val) and postfix (val++,val--) 

## Prefix
- To use a prefix increment, which adds 1 to a numeric value, you place two plus signs (++) in front of a variable like this:
let age = 29;
++age;

let age = 29;
--age;

- When using either a prefix increment or a prefix decrement, the variable’s value is changed before the statement is evaluated.

let age = 29;
let anotherAge = --age + 2;  // 28 + 2 =30

console.log(age); // 28
console.log(anotherAge); // 30

# Postfix
 When using Postfix increment the increment or decrement doesn’t occur until after the containing statement has been evaluated. 

 let num1 = 2;
let num2 = 20;

let num3 = num1-- + num2; // 2+20 = 22

let num4 = num1 + num2;  //  1 + 20 =21

console.log(num3); // 22
console.log(num4); // 21

# notes
Prefix and postfix used
- string : 
1. When used on a string that is a valid representation of a number, convert to a number and apply the change. The variable is changed from a string to a number. 
2. When used on a string that is not a valid number, the variable’s value is set to NaN. The variable is changed from a string to a number.

- Boolean :
1. When used on a Boolean value that is false, convert to 0 and apply the change. The variable is changed from a Boolean to a number.
2. When used on a Boolean value that is true, convert to 1 and apply the change. The variable is changed from a Boolean to a number.

- floating-point :
1. When used on a floating-point value, apply the change by adding or subtracting 1.

- Object : 
1. When used on an object, call its valueOf() method to get
a value to work with. Apply the other rules. If the result is NaN, then call toString() and
apply the other rules again. The variable is changed from an object to a number.

ex:
let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;

s1++; // value becomes numeric 3
s2++; // value becomes NaN
b++; // value becomes numeric 1
f--; // value becomes 0.10000000000000009 (due to floating-point inaccuracies)

# Summary
- calls Number() and increments/ decrements the value by 1

## valid
- Number
- floating-point value
- String that is a valid representation of a number
- Empty string is converted to 0
- Boolean value that is false, convert to 0,  Boolean value that is true, convert to 1

let a='25';
let b=a++;

console.log(typeof a,a); //number 26
console.log(typeof b,b); //number 25

## not-valid
gives NaN for
- undefined
- null
- NaN
- String that is a not valid representation of a number (ex:'abc')

let a='ddd';
let b=++a;

console.log(typeof a,a); //number NaN
console.log(typeof b,b); //number NaN

let a='ddd';
let b=a++;

console.log(typeof a,a); //number NaN
console.log(typeof b,b); //number NaN