# Multiplicative Operators

- multiply, divide, and modulus

# How they works
1. calls Number(), If either of the operands isn’t a number.
- empty string is treated as 0
- null is treated as 0
- Boolean true and false is converted to 1 and 0

2. Undefined, NaN and string that can't be converted to number all gives NaN

3. Infinity
- Infinity * 0 = NaN
- (-Infinity) * 0 = NaN
any other combinations including (+/-) Infinity follows basic math rule 
- (+ ) * (+) = +
- (- ) * (-) = +
- (+ ) * (-) = -

4. 0
only (0) * (-0) = -0 
any other combinations of 0 gives 0, ex:
-0 * -0 = 0

# String
ex1:
let a='';
let b=a*5;
console.log(a); //''
console.log(b); //0

ex2:
let a='5';
let b=a*5;
console.log(a); //'5'
console.log(b); //25

ex3:
let a='aaa';
let b=a*5;
console.log(a); //aaa
console.log(b); //NaN

# Null
let a=null;
let b=a*5;
console.log(a); //null
console.log(b); //0

# Boolean
ex1:
let a=true;
let b=a*5;
console.log(a); //true
console.log(b); //5

ex2:
let a=Boolean(undefined);
let b=a*5;
console.log(a); //false
console.log(b); //0

# undefined
let a=undefined;
let b=a*5;
console.log(a); //undefined
console.log(b); //NaN

# NaN
let a=NaN;
let b=a*5;
console.log(a); //NaN
console.log(b); //NaN