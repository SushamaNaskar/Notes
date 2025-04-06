# PRIMITIVE AND REFERENCE VALUES

# Primitive Values
- Primitive values are simple atomic pieces of data that are immutable (cannot be changed) and are stored directly in the memory. They include:

Number
String
Boolean
Null
Undefined
Symbol
BigInt

- Primitive values can’t have properties added to them even though attempting to do so won’t cause an error. Here’s an example:
let name = "Nicholas";
name.age = 27;
console.log(name.age); // undefined

## Characteristics of Primitive Values:
Immutability: Once a primitive value is assigned, it cannot be altered.
Stored by Value: When a primitive value is assigned to a variable or passed to a function, a copy of the value is created.

# Reference Values
- Reference values are objects stored in memory.
- Reference values are objects that may be made up of multiple values. These are stored in memory as references.this includs:

Objects
Arrays
Functions
Dates

- With Reference values, you can add, change, or delete properties and methods at any time.
-  Only reference values can have properties defined dynamically for later use.

let person = new Object();
person.name = "Nicholas";
console.log(person.name); // "Nicholas"

- If you were to use the new keyword, JavaScript will create an Object type, but one that behaves like a primitive. 
let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age); // undefined
console.log(name2.age); // 26
console.log(typeof name1); // string
console.log(typeof name2); // object

## Characteristics of Reference Values:
Mutability: Objects and arrays can be modified by changing their properties or elements.

Stored by Reference: When a reference value is assigned to a variable, 
                     the variable stores a reference (or memory address) to the value rather than a copy of the value.
                      
## Accessed by Reference
- JavaScript does not permit direct access of memory locations, so direct manipulation of the object’s memory space is not allowed. 
- When you manipulate an object, you’re really working on a reference to that object rather than the actual object itself. For this reason, 
such values are said to be accessed by reference.



# Key Differences:
Feature	                      Primitive Values	                               Reference Values
Type                    	Basic types (e.g., number, string, etc.)     	Objects, Arrays, Functions, etc.
Memory	                    Stored by value (directly holds data)	        Stored by reference (holds memory address)
Immutability	            Immutable (cannot be changed)	                Mutable (properties can be modified)
Assignment	                Copies the value	                            Copies the reference (shallow copy)
Comparison	                Compared by value	                            Compared by reference (memory location)

# Copying Values
## Primitive values
- When a primitive value is assigned from one variable to another, the value stored on the variable object is created and copied into the location for the new variable.
Consider the following example:

let num1 = 5;
let num2 = num1;

Here, num1 contains the value of 5. When num2 is initialized to num1, it also gets the value of 5. This value is completely separate from the one
that is stored in num1 because it’s a copy of that value. Each of these variables can now be used separately with no side effects.

## Reference values
- When a reference value is assigned from one variable to another, the value stored on the variable object is also copied into the location for the new
variable. 
- The difference is that this value is actually a pointer to an object stored on the heap. Once the operation is complete, two variables point to
exactly the same object, so changes to one are reflected on the other, as in the following example:

let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Nicholas";
console.log(obj2.name); // "Nicholas"

# Argument Passing
- All function arguments in ECMAScript are passed by value.
-  This means that the value outside of the function is copied into an argument on the inside of the function the same way a value is copied from
one variable to another.
- If the value is primitive, then it acts just like a primitive variable copy
-  if the value is a reference, it acts just like a reference variable copy
- This is often a point of confusion for developers because variables are accessed both by value and by reference, but arguments are passed
only by value
- When an argument is passed by value, the value is copied into a local variable (a named argument and, in ECMAScript, a slot in the arguments object)
- When an argument is passed by reference, the location of the value in memory is stored into a local variable, which means that changes to the local variable are reflected outside of the function. 

# Determining Type
- Generally speaking, values that should be primitive types should be checked using typeof, and values that should be objects should be checked using instanceof.

## typeof
The typeof operator is the best way to determine if a variable is a primitive type. 
- More specifically, it’s the best way to determine if a variable is a string, number, Boolean, or undefined. 
- If the value is an object or null, then typeof returns "object"
- Although typeof works well for primitive values, it’s of little use for reference values.

## instanceof
 Typically, you don’t care that a value is an object—what you really want to know is what type of object it is. To aid
in this identification, ECMAScript provides the instanceof operator, which is used with the following syntax:
result = variable instanceof constructor

The instanceof operator returns true if the variable is an instance of the given reference type Consider this example:
console.log(person instanceof Object); // is the variable person an Object?
console.log(colors instanceof Array); // is the variable colors an Array?
console.log(pattern instanceof RegExp); // is the variable pattern a RegExp?

All reference values, by definition, are instances of Object, so the instanceof operator always
returns true when used with a reference value and the Object constructor. Similarly, if instanceof
is used with a primitive value, it will always return false, because primitives aren’t objects.

Generally speaking, values that should be primitive types should be checked using typeof, and values
that should be objects should be checked using instanceof.

The different error types can be used to provide more information about an exception, allowing
appropriate error handling. You can determine the type of error thrown in the catch portion of a
try-catch statement by using the instanceof operator, as shown here:
try {
someFunction();
} catch (error){
if (error instanceof TypeError){
// handle type error
} else if (error instanceof ReferenceError){
// handle reference error
} else {
// handle all other error types
}
}
Checking the error type is the easiest way to determine the appropriate course of action in a cross-
browser way

The typeof operator determines a value’s primitive type, whereas the instanceof operator
is used to determine the reference type of a value.