# Q1
```
let x = 1 > 2 > 3;
console.log(x);
```
output: false

Explanation: This is because the comparison operators (>) in JavaScript are evaluated from left to right, and each comparison operator returns a Boolean value (true or false).

So when we evaluate the expression 1 > 2 > 3, the following happens:

The first comparison, 1 > 2, evaluates to false. The second comparison, false > 3, implicitly converts false to the number 0 and then compares it to 3. Since 0 is not greater than 3, the expression evaluates to false.

Therefore, the value of x is false.

# Q2
```
let x = false;
let y = "0";
let z = 0;

console.log(x == y);
console.log(x == z);
```
Output
true
true

Explanation: In JavaScript, when you use the == operator to compare values of different types, the operands will be converted to a common type before the comparison is made. This process is called type coercion.

In the first comparison (x == y), x is a Boolean (false) and y is a string (“0”). Since both false and “0” can be coerced to the Boolean false, the comparison returns true.

In the second comparison (x == z), x is a Boolean (false) and z is a number (0). Since both false and 0 can be coerced to the number 0, the comparison returns true.

# Q3
```
let x = [];
console.log(Boolean(x));
```

Output
true

Explanation: In JavaScript, an empty array [] is a truthy value when coerced to a Boolean. This means that when you use Boolean(x) to convert x to a Boolean value, it will return true.

In general, any non-empty array (i.e., an array with one or more elements) is also truthy when coerced to a Boolean.

# Q4
let x = Infinity;
console.log(typeof x);

Output
number

Explanation: In JavaScript, Infinity is a special numeric value that represents positive infinity. It is a primitive value of the number data type. When you use the typeof operator to check the type of x, it will return “number” because Infinity is a number value, albeit a special one.

# Q5
let x = [1,2];
let y = [3,4];
let z = x + y;

console.log(typeof z,z);

output : string 1,23,4

Explanation: In JavaScript, when you use the + operator with two arrays, or an array and any other object, both operands will be converted to strings before concatenation occurs. This is called implicit type coercion.

In this case, x and y are both empty arrays, which means that z will be the empty string (“”) because both arrays will be converted to empty strings before concatenation.

Therefore, when you use the typeof operator to check the type of z, it will return “string” because z is a string.

# Q6
let x = {a:2};
let y = {a:2};
let z = x + y;

console.log(typeof z,z);

output : string [object Object][object Object]


# Q7

let x = true;
let y = false;
let z = x + y && x * y;

console.log(z);

Output
0

Explanation: In this code, x and y are both Boolean values. The + operator is used to add x and y. In JavaScript, true is converted to 1, and false is converted to 0 when used in a numeric context, so x + y will be 1 + 0, which is 1.

The && operator is then used to perform a logical AND operation between x + y and x * y. Since x * y is 0 (because multiplying any number by false or 0 is 0), the logical AND operation will also result in 0. Therefore, z will be 0.

When you log z to the console, it will output 0.


# Q8
let x = "false";
let y = !x;

console.log(y);

Output
false

Explanation: In this code, x is a string containing the value “false”. When you use the logical NOT operator (!) with a non-Boolean value, JavaScript will first convert the value to a Boolean and then negate it. Since “false” is a non-empty string, it is considered a truthy value when converted to Boolean, so !x will be the same as !true, which is false.

Therefore, when y is logged into the console, it will output false.

# Q9
let x = 1;
let y = "1";

console.log(++x, ++y);

Output
2 2

Explanation: In this code, x is a number containing the value 1, and y is a string containing the value “1”.

The ++ operator is used to increment the value of x and y before they are logged into the console. Since x is a number, it can be incremented numerically, and ++x will increment the value of x to 2.

In contrast, since y is a string, it will be first converted to a number before it is incremented. The string “1” can be converted to the number 1, so ++y will also increment the value of y to 2.

Therefore, when ++x and ++y are logged to the console, it will output 2 2.

# Q10
let x = "b";
let y = "a";

console.log(x + y + + y + y);

Output
baNaNa
Explanation: In this code, x is a string containing the value “b”, and y is a string containing the value “a”. 

The expression x + y concatenates the values of x and y into the string “ba”.

The expression +y coerces the value of y into a number. Since y is the string “a”, which cannot be coerced into a number, the result of +y is NaN.

Finally, the expression NaN + y concatenates the string “NaN” with the value of y, which is “a”, resulting in the string “baNaNa”.

Therefore, when x + y + +y + y is logged to the console, it will output “baNaNaa”.


# Q11
let x = true + true;
let y = x + false;

console.log(y);

Output
2

Explanation: In this code, x is the result of the expression true + true. In JavaScript, the + operator can be used for both addition and concatenation. When used with boolean values, it performs addition, and true is coerced to the number 1. Therefore, true + true evaluates to 2.

The variable y is assigned the result of the expression x + false. Since false is coerced to the number 0, this expression is equivalent to 2 + 0, which evaluates to 2.

Therefore, when y is logged into the console, it will output 2.

# Q12

let x = [2];
let y = 2;

console.log(x == y);

Output
true
Explanation: In this code, x is an array containing the single element 2, and y is the number 2.

When an array is compared to a non-array value using the == operator, JavaScript first attempts to convert both values to a common type. In this case, the array x is coerced to a string, resulting in the string “2”. The number y is also coerced to a string, resulting in the string “2”.

Since both operands are now strings with the same value, the == operator returns true.

Therefore, when x == y is logged to the console, it will output true.

# Q13
let x = [2]+[3];
let y = 23;

console.log(x == y);
console.log(x);
console.log(typeof x);

Output
true
23
string