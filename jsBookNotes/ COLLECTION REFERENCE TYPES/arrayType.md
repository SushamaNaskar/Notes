# THE ARRAY TYPE
- arrays are ordered lists of data, but unlike in other languages, they can hold any type of data in each slot. 
<!-- This means that it’s possible to create an array that has a string in the first position,a number in the second, an object in the third, and so on. -->
- ECMAScript arrays are also dynamically sized, automatically growing to accommodate any data that is added to them.

# Creating Arrays

1. Array constructor

let colors = new Array();

- If you know the number of items that will be in the array, you can pass the count into the constructor, and the length property will automatically be created with that value.
let colors = new Array(20);

- The Array constructor can also be passed items that should be included in the array. 
let colors = new Array("red", "blue", "green");

- An array can be created with a single value by passing it into the constructor. 
-  providing a single argument that is a number always creates an array with the given number of items
- whereas an argument of any other type creates a one-item array that contains the specified value. 

let colors = new Array(3); // create an array with three items
let names = new Array("Greg"); // create an array with one item, the string "Greg"

- It’s possible to omit the new operator when using the Array constructor. 
let colors = Array(3); 

2. A second way to create an array is by using array literal notation.
- An array literal is specified by using square brackets and placing a comma-separated list of items between them, as in this example:
let colors = ["red", "blue", "green"];

# Array.from()
-  from() is used for converting array-like constructs into an array instance
- The first argument to Array.from() is an “arrayLike” object, which is anything that is iterable or has a property length and indexed elements. 

// Strings will be broken up into an array of single characters

Array.from("Matt"); // ["M", "a", "t", "t"]

// Sets and Maps can be converted into an new array instance using from()

const m = new Map().set(1, 2).set(3, 4); 
Array.from(m); // [[1, 2], [3, 4]]

const s = new Set().add(1).add(2).add(3).add(4);
Array.from(s); // [1, 2, 3, 4]

// Array.from() performs a shallow copy of an existing array
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);

console.log(a1); // [1, 2, 3, 4]
console.log(a1 === a2); // false

//Array.from() also accepts a second optional map function argument. same as Array.from().map(). 
const a2 = Array.from(a1, x => x**2);

# Array.of()

# Array Holes

# Indexing into Arrays
- To get and set array values, you use square brackets and provide the zero-based numeric index of the value
let colors = ["red", "blue", "green"];
console.log(colors[0]); 

- If a value is set to an index that is past the end of the array, as with colors[3] in this example, the array length is automatically expanded to be that index plus 1
let colors = ["red", "blue", "green"];
colors[3] = "brown";  // add a fourth item

- A unique characteristic of length is that it’s not read-only. By setting the length property, you can easily remove items from or add items to the end of the array.

let colors = ["red", "blue", "green"]; // creates an array with three strings
colors.length = 2;
alert(colors[2]); // undefined

# Detecting Arrays
- To determining whether a given object is an array, the instanceof operator works well:
if (value instanceof Array){
// do something on the array
}

##  Array.isArray()
- The purpose of this method is to definitively determine if a given value is an array
- preferred over instanceof
if (Array.isArray(value)){
// do something on the array
}

# Iterator Methods
keys() => returns an iterator of the array’s indices
values() => returns an iterator of the array’s elements
entries() => returns an iterator of index/value pairs

const a = ["foo", "bar", "baz", "qux"];

# Copy and Fill Methods
##  fill()
- The fill() method allows you to insert the same value into all or part of an existing array. 

const zeroes = [0, 0, 0, 0, 0];
zeroes.fill(5); //// [5, 5, 5, 5, 5]

- an optional start index instructs the fill to begin at that index, and the fill will continue to the end of the array unless an end index is provided. 

zeroes.fill(6, 3); // [0, 0, 0, 6, 6]

zeroes.fill(7, 1, 3); // [0, 7, 7, 0, 0];

- Negative indices are interpreted from the end of the array

zeroes.fill(8, -4, -1); // [0, 8, 8, 8, 0];

- fill() silently ignores ranges that exceed the boundaries of the array

## copyWithin() 
copyWithin() instead performs an iterative shallow copy of some of the array and overwrites existing values beginning at the provided index. 

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.copyWithin(5); // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]

arr.copyWithin(0, 5); // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]

arr.copyWithin(4, 0, 3); // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]


# Conversion Methods
- The toString() and valueOf() methods return the same value when called on an array. The result is a comma-separated string that contains the string equivalents of each value in the array

let colors = ["red", "blue", "green"]; // creates an array with three strings

colors.toString(); // red,blue,green

colors.valueOf(); // red,blue,green

## join()
- The join() method accepts one argument, which is the string separator to use, and returns a string containing all items.

let colors = ["red", "green", "blue"];

colors.join(","); // red,green,blue
colors.join("||"); // red||green||blue

## note
If an item in the array is null or undefined, it is represented by an empty string in the result of join(), toLocaleString(), toString(), and valueOf().



## traverse
