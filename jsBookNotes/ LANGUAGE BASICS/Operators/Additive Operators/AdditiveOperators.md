# Additive Operators

# Add

# How they works
- If only one operand is a string, the other operand is converted to a string and the result is the concatenation of the two strings.

2. If neither operand is a string, the + operator calls Number() on both operands.
- null is treated as 0 
- Boolean true and false is converted to 1 and 0 
- undefined and NaN remain NaN after conversion to a number, so it results in NaN

3. Infinity
- Infinity + (any number..., -0, 0, + 0 ... Infinity) = Infinity
- (-Infinity) + (-Infinity..., -0, 0,+ 0 ..., any number) = -Infinity
- Infinity + (-Infinity) = NaN

4. 0
only (-0) + (-0) = -0 
any other combinations of 0 gives 0, ex:
+0 + -0 = 0

# Summary of Behavior:
   Operands	                               Result
String + Anything   	The non-string operand is converted to a string, and the result is concatenation.
Number + Number	        Both operands are added after converting them to numbers.
Boolean + Anything	    Boolean values are converted to 1 (for true) and 0 (for false).
null + Anything	        null is treated as 0.
undefined + Anything	undefined results in NaN.
NaN + Anything	        NaN results in NaN.

# String
ex1:
let a='a';
let b=a+'b';
console.log(a); //'a'
console.log(b); // 'ab'

ex2:
let a='5';
let b=a+'5';
console.log(a); //'5'
console.log(b); // '55'

ex3:
let a='';
let b=a+'5';
console.log(a); //''
console.log(b); // '5'

ex4:
let a='a';
let b=a+null;
console.log(a); //''
console.log(b); // 'anull'

ex5:
let a='a';
let b=a+true;
console.log(a); //'a'
console.log(b); // 'atrue'

# Null
ex1:
let a=null+null;
console.log(a); //0
console.log(typeof a); // number

ex2:
let a=null;
let b=a+5;
console.log(a); //null
console.log(b); // 5
console.log(typeof b); // number

ex3:
let a=null;
let b=a+true;
console.log(a); //null
console.log(b); // 1
console.log(typeof b); // number

# Boolean
ex1:
let a=true;
let b=a+true;
console.log(a); //true
console.log(b); // 2
console.log(typeof b); // number

ex2:
let a=Boolean(undefined);
let b=a+true;
console.log(a); //false
console.log(b); // 1
console.log(typeof b); // number

# undefined
let b=undefined+undefined;
console.log(b); // NaN
console.log(typeof b); // number

# NaN
let b=NaN+NaN;
console.log(b); // NaN
console.log(typeof b); // number