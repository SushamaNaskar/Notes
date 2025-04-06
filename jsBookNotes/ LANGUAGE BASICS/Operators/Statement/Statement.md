# The for-in Statement
- Can be used with objects and arrays (but not recommended for arrays).
- Iterates over property names (keys) of an object.

const person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  console.log(key, ":", person[key]);
}


# The for-of Statement
- Works with arrays, strings, maps, sets, etc. (iterable objects).
- Iterates directly over values (elements of an array, characters of a string, etc.).

const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

const word = "Hello";

for (let char of word) {
  console.log(char);
}

const map = new Map([
  ["name", "Alice"],
  ["age", 25],
]);

for (let [key, value] of map) {
  console.log(key, ":", value);
}