page-93

# The String Type
Strings can be delineated by either double quotes ("), single quotes ('), or backticks (`), so all of the following are legal:
let firstName = "John";
let lastName = 'Jacob';
let lastName = `Jingleheimerschmidt`


# Converting to a String -> toString()  and String()

## toString() 
The first is to use the toString() method that almost every value has. This method’s only job is to return the string equivalent of the value. Consider this example:
let age = 11;
let ageAsString = age.toString(); // the string "11"
let found = true;
let foundAsString = found.toString(); // the string "true"

The toString() method is available on values that are numbers, Booleans, objects, and strings (each string has a toString() method that simply returns a copy of itself.) If a value is null or undefined, this method is not available.

## String()
If you’re not sure that a value isn’t null or undefined, you can use the String() casting function, which always returns a string regardless of the value type. The String() function follows these rules:

➤ If the value has a toString() method, it is called (with no arguments) and the result is returned.
➤ If the value is null, "null" is returned.
➤ If the value is undefined, "undefined" is returned.
➤ If the value is NaN, "NaN" is returned.

let value1 = 10;
let value2 = true;
let value3 = null;
let value4;

console.log(String(value1)); // "10"
console.log(String(value2)); // "true"
console.log(String(value3)); // "null"
console.log(String(value4)); // "undefined"

let value3 = null;
let value4 = String(value3);

console.log(typeof value3); //object
console.log(typeof value4); //string

let value5 = undefined;
let value6 = String(value5);

console.log(typeof value5); //undefined
console.log(typeof value6); //string

let value7 = NaN;
let value8 = String(value7);

console.log(typeof value7); //number
console.log(typeof value8); //string