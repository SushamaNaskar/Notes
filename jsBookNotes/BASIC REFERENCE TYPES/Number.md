# The Number Type
- The Number type is the reference type for numeric values. To create a Number object, use the Number
constructor and pass in any number. Here’s an example:
let numberObject = new Number(10);

# Number()
-  string that can converted to a valid number (ignoring the leading 0)
let s=Number("01"); //1
-  Boolean values, true and false get converted into 1 and 0
-  null returns 0
-  empty string returns 0
- Undefined, NaN and string that can't be converted to number all gives NaN

console.log(Number(5.67890)) //5.6789
console.log(Number('05.67890')) //5.6789
console.log(Number(0567890)) //567890
console.log(Number('0567890')) //567890

# The isInteger() Method 
- This method checks if a given value is an integer.
- Returns true if the number is an integer, otherwise false.

console.log(Number.isInteger(10));     // true
console.log(Number.isInteger(10.5));   // false
console.log(Number.isInteger("10"));   // false (string)
console.log(Number.isInteger(NaN));    // false

# Safe Integers
- Safe Integers (Number.isSafeInteger())
- JavaScript numbers are stored in a 64-bit floating point format.
- The largest exact integer that can be safely represented is (2^53 - 1) = 9007199254740991.
- The smallest is -(2^53 - 1) = -9007199254740991.
- Number.isSafeInteger() checks if a number is within this range.

console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false
console.log(Number.isSafeInteger(3.5));             // false (not an integer)

# toFixed()
- The toFixed() method is used to format a number to a fixed number of decimal places.
- It returns a string representation of the number.
- The number is rounded if necessary.
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"
console.log(num.toFixed(0)); // "6"
console.log(num.toFixed(5)); // "5.67890"

# parseInt()
- Converts a string to an integer
- Parses a string and returns an integer.
- Ignores decimals and stops at the first non-numeric character.
- You can specify a radix (base) for conversion.

console.log(parseInt("42"));      // 42
console.log(parseInt("3.14"));    // 3
console.log(parseInt("100px"));   // 100
console.log(parseInt("101", 2));  // 5 (binary to decimal)

# parseFloat()
- Converts a string to a floating-point number
- Similar to parseInt(), but retains decimals

console.log(parseFloat("3.14"));   // 3.14
console.log(parseFloat("5.99px")); // 5.99
console.log(parseFloat("42"));     // 42