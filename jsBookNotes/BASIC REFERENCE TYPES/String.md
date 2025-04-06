# The String Type
The String type is the object representation for strings and is created using the String constructor as follows:
let stringObject = new String("hello world");

# valueOf(), toLocaleString(), and toString()
- All three of the inherited metods valueOf(), toLocaleString(), and toString() return the object’s primitive string value.

valueOf() => console.log(stringObject.valueOf()); //hello world

toLocaleString() => console.log(stringObject.toLocaleString()) //hello world

# length
- indicates the number of characters in the string. Consider the following example:

let stringValue = "hello world";
console.log(stringValue.length); // "11"

# data.charAt(index)
- returns the character at a given index.

let stringObject = new String("hello world");

console.log(stringObject.charAt(4)); //o

# alphabet/string.charCodeAt(index) 
- returns the code unit/Unicode (UTF-16) code value at a given index

console.log('a'.charCodeAt(0)); //97

let stringObject = new String("hello world");
console.log(stringObject.charCodeAt(4)); //111

# String.fromCharCode(code1, code2, ...)
- Converts Unicode values to characters.

console.log(String.fromCharCode(97)); //a
console.log(String.fromCharCode(97,98)); //ab


# revise
const str = new String("hello world");

console.log(str.valueOf()); //hello world
console.log(str.toString()); //hello world
console.log(str.toLocaleString()); //hello world
console.log(str.charAt(0)); //h
console.log(str.charCodeAt(0)); //104
console.log('a'.charCodeAt(0));  //97
console.log(String.fromCharCode(97)); //a
console.log(String.fromCharCode(97,98)); //ab


# String-Manipulation Methods

## string-value.concat(string1,string2...);
- concatenate one or more strings to another, returning the concatenated string as the result

let stringValue = "hello ";
let result = stringValue.concat("world");

console.log(result); // "hello world"
console.log(stringValue); // "hello"

- The concat() method accepts any number of arguments, so it can create a string from any number of other strings, as shown here:

let stringValue = "hello ";
let result = stringValue.concat("world", "!");
console.log(result); // "hello world!"

-  the addition operator (+) is used more often and, in most cases, actually performs better than the concat() method even when concatenating
multiple strings

## substring
- ECMAScript provides three methods for creating string values from a substring: slice(), substr(), and substring().
- All three methods return a substring of the string they act on.

## simplified
positive index -> start from first element (based on 0 index)
let str = "JavaScript"; //j-0 a-1 v-2 a-3 S-4 c-5 r-6 i-7 p-8 t-9

negative index -> start from last element (based on 1 index)
let str = "JavaScript"; //t-1 p-2 i-3 r-4 c-5 S-6 a-7 v-8 a-9 j-10

## slice(start,end-1) 
- include all elements starting from start index and end-1 index
- if no end index is mention go still last index

str.slice(-6,-3) //count last 6 element (which will be the starting index) + ...+ count last 3 element (2 will be the last index) = Scr

## substring(start, end) → Like slice(), but no negatives
- Swaps start and end if start > end.

# substr(start, length)
- Starts at start, then takes length characters.
- Works with negative indexes (counts from the end).

console.log(str.substr(4, 6)); // "Script" (From index 4, take 6 chars)
console.log(str.substr(-6, 3)); // "Scr" (Start 6 from end, take 3 chars)

## String Location Methods
- There are two methods for locating substrings within another string: indexOf() and lastIndexOf()
- Both methods search a string for a given substring and return the position (or –1 if the substring isn’t found)
- . The difference between the two is that the indexOf() method begins looking for the substring at the beginning of the string, whereas the lastIndexOf() method begins looking from the end of the string. Consider this example:

let stringValue = "hello world";
console.log(stringValue.indexOf("o")); // 4
console.log(stringValue.lastIndexOf("o")); // 7

- Each method accepts an optional second argument that indicates the position to start searching from within the string. 
- This means that the indexOf() method will start searching from that position and go toward the end of the string, ignoring everything before the start position, 
- whereas last­ IndexOf() starts searching from the given position and continues searching toward the beginning of the string, ignoring everything between the given position and the end of the string. Here’s an example:
let stringValue = "hello world";
console.log(stringValue.indexOf("o", 6)); // 7
console.log(stringValue.lastIndexOf("o", 6)); // 4

let stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
let positions = new Array();
let pos = stringValue.indexOf("e");
while(pos > -1) {
positions.push(pos);
pos = stringValue.indexOf("e", pos + 1);
}
console.log(positions); // "3,24,32,35,52"

# simple explanantion
"hello world" // o occurs at postion 4 and 7
indexOf("o") => returns 4
lastIndexOf("o") => returns 7
indexOf("o", 6) =>starts from index 6 moves towards last index and returns 7
lastIndexOf("o", 6)=>starts index position 6 moves towards first index and returns 4


# String Inclusion Methods
- for determining if a string is included inside another string: startsWith(), endsWith(), and includes().
- returns true or false
- startsWith() checks for a match beginning at index 0
- endsWith() checks for a match beginning at index (string.length – substring.length)
- includes() checks the entire string

let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("bar")); // false

console.log(message.endsWith("baz")); // true
console.log(message.endsWith("bar")); // false

console.log(message.includes("bar")); // true
console.log(message.includes("qux")); // false

- The startsWith() and includes() methods accept an optional second argument that indicates the position to start searching from within the string. This means that the methods will start searching from that position and go toward the end of the string, ignoring everything before the start position.
Here’s an example:
let message = "foobarbaz";
console.log(message.startsWith("foo")); // true
console.log(message.startsWith("foo", 1)); // false
console.log(message.includes("bar")); // true
console.log(message.includes("bar", 4)); // false

- The endsWith() method accepts an optional second argument that indicates the position that should be treated as the end of the string. If this value is not provided, the length of the string is used by default. When a second argument is provided, the method will treat the string as if it only has that many characters:
let message = "foobarbaz";
console.log(message.endsWith("bar")); // false
console.log(message.endsWith("bar", 6)); // true

# simple explanantion
let message = "foobarbaz";

includes("bar") => true
startsWith("foo") => true
endsWith("bar")=>false

includes("foo",1) => Thinks the string starts at index 1 and returns false
startsWith("foo",1) => Thinks the string starts at index 1 and returns false
endsWith("bar", 6)=> Treats the first 6 characters ("foobar") as the full string. returns true



# trim()
- The trim() method creates a copy of the string, removes all leading and trailing white space, and then returns the result.

let stringValue = " hello world ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue); // " hello world "
console.log(trimmedStringValue); // "hello world"

- the trimLeft() and trimRight() methods that remove white space only from the beginning or end of the string, respectively.


# repeat()
The repeat() method accepts a single integer argument count, copies the string count times, and concatenates all the copies.
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman

# padStart() and padEnd() Methods
- The padStart() and padEnd() methods will copy a string and, if the length of the string is less than the specified length, add padding to either side of a string to extend it to a certain length.

let stringValue = "foo";
console.log(stringValue.padStart(6)); // " foo"
console.log(stringValue.padStart(9, "o")); // "oooooofoo"

# String Iterators and Destructuring



for (const c of "abcde") {
console.log(c);
}
// a
// b
// c
// d
// e

let message = "abcde";

console.log([...message]); // ["a", "b", "c", "d", "e"]

# String Case Methods
Four methods perform case conversion: toLowerCase(), toLocaleLowerCase(), toUpperCase(), and toLocaleUpperCase().
The toLocaleLowerCase() and toLocaleUpperCase() methods are intended to be implemented based on a particular locale. In many locales, the localespecific methods are identical to the generic ones; however, a few languages (such as Turkish) apply special rules to Unicode case
conversion, and this necessitates using the locale-specific methods for proper conversion. Here are
some examples:
let stringValue = "hello world";
console.log(stringValue.toLocaleUpperCase()); // "HELLO WORLD"
console.log(stringValue.toUpperCase()); // "HELLO WORLD"
console.log(stringValue.toLocaleLowerCase()); // "hello world"
console.log(stringValue.toLowerCase()); // "hello world"

This code outputs "HELLO WORLD" for both toLocaleUpperCase() and toUpperCase(), just as "hello world" is output for both toLocaleLowerCase() and toLowerCase(). Generally speaking, if you do not know the language in which the code will be running, it is safer to use the localespecific methods.

# split()
which separates the string into an array of substrings based on a separator. 
The separator may be a string or a RegExp object
An optional second argument, the array limit, ensures that the returned array will be no larger than a certain size.

let colorText = "red,blue,green,yellow";
let colors1 = colorText.split(","); // ["red", "blue", "green", "yellow"]
let colors2 = colorText.split(",", 2); // ["red", "blue"]







