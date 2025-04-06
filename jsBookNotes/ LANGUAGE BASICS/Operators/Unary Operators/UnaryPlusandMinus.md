# Unary Plus

- The unary plus is represented by a single plus sign (+) placed before a variable and does nothing to a numeric value.

- When the unary plus is applied to a nonnumeric value, it performs the same conversion as the Number() casting function: 

1. the Boolean values of false and true are converted to 0 and 1
let b = false;
b = +b; // value becomes numeric 0

2. String that is a valid representation of a number, converted to number
3. Empty string is converted to 0
4. String that is a not valid representation of a number, returns NaN


let s1 = "01";
let s2 = "1.1";
let s3 = "z";

s1 = +s1; // value becomes numeric 1
s2 = +s2; // value becomes numeric 1.1
s3 = +s3; // value becomes NaN


# Unary Minus
The unary minus operator’s primary use is to negate a numeric value, such as converting 1 into –1.
let s1 = -1;
console.log(-s1) //1

let s1 = "01";
let s2 = "1.1";
let s3 = "z";
let b = false;
let f = 1.1;

s1 = -s1; // value becomes numeric -1
s2 = -s2; // value becomes numeric -1.1
s3 = -s3; // value becomes NaN
b = -b; // value becomes numeric 0