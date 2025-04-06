# Boolean Operators
-  There are three Boolean operators: NOT, AND, and OR.

# Logical NOT
-  This operator always returns a Boolean value, regardless of the data type it’s used on. 
- The logical NOT operator first converts the operand to a Boolean value and then negates it,
- If Boolean() return false it returns true

console.log(!"blue"); // false
console.log(!0); // true
console.log(!NaN); // true
console.log(!""); // true
console.log(!12345); // false

-  By using two NOT operators in a row, you can effectively simulate the behavior of the Boolean() casting
function. The first NOT returns a Boolean value no matter what operand it is given. The second NOT negates that Boolean value and so gives the true Boolean value of a variable. 
- If Boolean() return true it returns true

console.log(!!"blue"); // true
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!""); // false
console.log(!!12345); // true
console.log(!false); // true


# Logical AND
