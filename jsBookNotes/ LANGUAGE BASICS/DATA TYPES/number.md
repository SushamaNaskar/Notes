# The Number Type

# Range of Values
- The smallest number that can be represented in ECMAScript is stored in Number.MIN_VALUE.
- the largest number is stored in Number.MAX_VALUE.
- Any negative number that can’t be represented is –Infinity (negative infinity).
- Any positive number that can’t be represented is simply Infinity (positive infinity).
-  To determine if a value is finite (that is, it occurs between the minimum and the maximum), there is the isFinite() function. This function returns true only if the argument is between the minimum and the maximum values, as in this example:
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false

let result = 1 + Number.MAX_VALUE;
console.log(isFinite(result)); // true


# NaN
- There is a special numeric value called NaN, short for Not a Number, which is used to indicate when an operation intended to return a number has failed (as opposed to throwing an error)
- NaN is not equal to any value, including NaN.
console.log(NaN == NaN); // false
- isNaN()


# Number Conversions Number()
-  string that can converted to a valid number (ignoring the leading 0)
let s=Number("01"); //1
-  Boolean values, true and false get converted into 1 and 0
-  null returns 0
-  empty string returns 0
- Undefined, NaN and string that can't be converted to number all gives NaN
