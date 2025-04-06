# Unary Operators
Operators that work on only one value are called unary operators. They are the simplest operators in ECMAScript.

- Increment/Decrement prefix (++val, --val) and postfix (val++,val--) 
- Unary Plus and Minus (-val,+val)


# How they works
1. calls Number()
- Numeric and floting points gives expected output
- string than can converted to a valid number
- Empty string is treated as 0
- null is treated as 0
- Boolean true and false is converted to 1 and 0

2. Undefined, NaN and string that can't be converted to number all gives NaN

# Difference between Increment/Decrement and  Unary Plus/Minus
- Increment/Decrement (++, --) directly change the value of the variable by 1.
- Unary plus returns val * 1 (or returns the numeric form of the operand), without changing the original variable
- unary minus returns val * (-1)(or returns the negative of the number), without changing the original variable


# Increment Prefix (++val)

## Undefined
let a=undefined;
let b=++a;
console.log(a); //NaN
console.log(b); //NaN

## NaN
let a=NaN;
let b=++a;
console.log(a); //NaN
console.log(b); //NaN

## Null
let a=null;
let b=++a;
console.log(a); //1
console.log(b); //1

## Number
let a=5;
let b=++a;
console.log(a); //6
console.log(b); //6 

## String
ex1:
let a='5';
let b=++a;
console.log(a); //6
console.log(b); //6

ex2: 
let a='b';
let b=++a;
console.log(a); //NaN
console.log(b); //NaN

ex3:
let a='';
let b=++a;
console.log(a); //1
console.log(b); //1

## Boolean
ex1:
let a=true;
let b=++a;
console.log(a); //2
console.log(b); //2

ex2:
let a=Boolean('b');
let b=++a;
console.log(a); //2
console.log(b); //2

ex3:
let a=Boolean('25');
let b=++a;
console.log(a); //2
console.log(b); //2

ex4:
let a=Boolean(undefined);
let b=++a;
console.log(a); //1
console.log(b); //1

ex5:
let a=Boolean(null);
let b=++a;
console.log(a); //1
console.log(b); //1

ex6:
let a=Boolean(NaN);
let b=++a;
console.log(a); //1
console.log(b); //1

ex7:
let a=Boolean('');
let b=++a;
console.log(a); //1
console.log(b); //1


# Increment Postfix (val++)

# Number
let a=25;
let b=a++;
console.log(a); //26
console.log(b); //25

# String
let a='';
let b=a++;
console.log(a); //1
console.log(b); //0

## Null
let a=null;
let b=a++;
console.log(a); //1
console.log(b); //0


# Unary Plus

## Undefined
let a=undefined;
let b=+a;
console.log(a); //undefined
console.log(b); //NaN

## NaN
let a=NaN;
let b=+a;
console.log(a); //NaN
console.log(b); //NaN

## Null
let a=null;
let b=+a;
console.log(a); //null
console.log(b); //0

## Number
let a=5;
let b=+a;
console.log(a); //5
console.log(b); //5

## String
ex1:
let a='5';
let b=+a;
console.log(a); //'5'
console.log(b); //5

ex2: 
let a='b';
let b=+a;
console.log(a); //b
console.log(b); //NaN

ex3:
let a='';
let b=+a;
console.log(a); //''
console.log(b); //0

## Boolean

ex1:
let a=true;
let b=+a;
console.log(a); //true
console.log(b); //1

ex2:
let a=Boolean(undefined);
let b=+a;
console.log(a); //false
console.log(b); //0


# Unary Minus

## Undefined
let a=undefined;
let b=-a;
console.log(a); //undefined
console.log(b); //NaN

## NaN
let a=NaN;
let b=-a;
console.log(a); //NaN
console.log(b); //NaN

## Null
let a=null;
let b=-a;
console.log(a); //null
console.log(b); //-0

## Number
ex1:
let a=5;
let b=-a;
console.log(a); //5
console.log(b); //-5

ex2:
let a=05;
let b=-a;
console.log(a); //5
console.log(b); //-5

## String
ex1:
let a='5';
let b=-a;
console.log(a); //'5'
console.log(b); //-5

ex2:
let a='05';
let b=-a;
console.log(a); //'05'
console.log(b); //-5

ex3: 
let a='b';
let b=-a;
console.log(a); //b
console.log(b); //NaN

ex4:
let a='';
let b=-a;
console.log(a); //''
console.log(b); //-0

## Boolean

ex1:
let a=true;
let b=-a;
console.log(a); //true
console.log(b); //-1

ex2:
let a=Boolean(undefined);
let b=-a;
console.log(a); //false
console.log(b); //-0