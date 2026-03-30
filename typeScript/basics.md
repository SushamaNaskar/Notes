# Type Annotations on Variables
<!-- - When you declare a variable using const, var, or let, you can optionally add a type annotation to explicitly specify the type of the variable: -->
- we specify the type of the variable:
```
let myName: string = "Alice";
```


# Optional Properties
<!-- - Optional properties are properties in an object type that may or may not be present. -->
- properties in an object type that may or may not be present.

```
function printName(obj: { first: string; last?: string }) {

}
```

# Union Types
<!-- - A union type is a type formed from two or more other types, representing values that may be any one of those types.
 -->
 - fromed from two or more other types. like id can be sting or number.

```
let Id: string| number = "1";

function printId(id: number | string) {
}

type Person = {
  id: string | number;
};
```

# Literal Types
- Instead of allowing any value, you allow exact specific values
<!-- - Literal types restrict a variable to specific fixed values, improving type safety and preventing invalid inputs. -->

```
let name: "John";
```
👉 This means:

✅ "John" allowed
❌ "Doe" not allowed

```
let status: "open" | "closed" | "pending";
```
👉 Only these 3 values allowed ✅


# Type Aliases
- use it to name an object type:

```
type ID = number;

type Point = {
  x: number;
  y: number;
};
 
function printCoord(pt: Point) {

}

type Person = {
  name: string;
  age: number;
};

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};
```

# Interfaces
An interface declaration is another way to name an object type:

```
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
 
}
 
 ```


# any
- we can use any whenever you don’t want a particular value to cause typechecking errors.

```
let obj: any = { x: 0 };

let myName: any = "Alice";
```

# unknown
👉 “This value can be anything… but you must check it first before using it.”
👉 unknown is a safer alternative to any because it forces type checking before usage.

```
let value: unknown = "hello";

value.toUpperCase(); // ❌ Error

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅
}
```

🧠 When to use unknown?
✔ API responses
✔ user input
✔ dynamic data

# never
<!-- - never represents values that never occur and is used in functions that don’t return, impossible type combinations, and exhaustive checks. -->
- never represents values that never occur like impossible type combinations
- and we also use it in funtions that don't return

```
type A = string & number; //A value cannot be both string AND number

type A = { name: string };
type B = { name: number };

type C = A & B; //name must be both string AND number ❌
// Result
name: never
```

 # Type Assertions
 <!-- - Type assertions allow developers to override TypeScript’s inferred type, but they should be used carefully since they don’t perform runtime checks. -->
 - Type assertions let you manually specify a type when TypeScript isn’t sure, without changing the actual runtime behavior.

👉 Type assertion does NOT change runtime behavior
👉 It only affects TypeScript checking

🤔 Why do we need it?
- Because sometimes TypeScript can’t figure out the type

Example

```
const input = document.getElementById("name");

input.value; // ❌ Error (TS doesn't know it's an input)
```

## Fix with assertion

```
const input = document.getElementById("name") as HTMLInputElement;

input.value; // ✅
``` 


# The Array Type
- Whenever we write out types like number[] or string[], that’s really just a shorthand for Array<number> and Array<string>

```
function doSomething(value: Array<string>) {
  // ...
}
 
let myArray: string[] = ["hello", "world"];
 
// either of these work!
doSomething(myArray);
doSomething(new Array("hello", "world"));
```


## Tuple Types
- A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

```
type StringNumberPair = [string, number];

function doSomething(pair: [string, number]) {
  
}
```

- Here, StringNumberPair is a tuple type of string and number.
- tringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.
- If we try to index past the number of elements, we’ll get an error.

```
function doSomething(pair: [string, number]) {
 
  const c = pair[2];
Tuple type '[string, number]' of length '2' has no element at index '2'.
}
```

## length checks,
```
interface StringNumberPair {
  length: 2;
  0: string;
  1: number;

}
```

## Optional tuple elements

```
type Either2dOr3d = [number, number, number?];
```

## Tuples can also have rest elements

```
type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
```
StringNumberBooleans describes a tuple whose first two elements are string and number respectively, but which may have any number of booleans following.
StringBooleansNumber describes a tuple whose first element is string and then any number of booleans and ending with a number.
BooleansStringNumber describes a tuple whose starting elements are any number of booleans and ending with a string then a number.

