# Object
- An object is a collection of properties
- A property is an association between a name (or key) and a value. 
- A property's value can be a function, in which case the property is known as a method.

# Creating new objects

## You can create an object using an object initializer / object literals

const obj = {
  property1: value1,
};

# Accessing properties
- dot notation and bracket notation

// Dot notation
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

// Bracket notation
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;

# Merging Objects

##  Object.assign() (shallow merge)

The Object.assign(target, ...sources) method copies properties from source objects into a target object.

- This method accepts one destination object, and one or many source objects.
- Object.assign() is effectively performing a shallow copy from each source object.
- If multiple source objects have the same property defined, the last one to be copied will be the ultimate value.

dest = {};
src = { id: 'src' };
result = Object.assign(dest, src);

console.log(dest === result); // true
console.log(dest !== src); // true
console.log(result); // { id: src }
console.log(dest); // { id: src }

## Using Spread Operator (shallow merge)
- The spread operator ... is the modern, cleaner way to merge objects.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 3, c: 4 }

## Deep Merging Using structuredClone() (ES2023)
- For deep merging (handling nested objects properly), you can use structuredClone().

```
const obj1 = { a: 1, nested: { x: 10 } };
const obj2 = { nested: { y: 20 } };

const mergedObj = structuredClone({ ...obj1, ...obj2 });
```

# Deep Copy vs. Shallow Copy in JavaScript
When copying objects in JavaScript, there are two types of copies:
1. Shallow Copy → Copies only the first level of properties. Nested objects still reference the original object. A shallow copy only clones the top-level properties, but nested objects still share the same reference

2. Deep Copy → Recursively copies everything, so nested objects become independent copies. A deep copy clones all levels, creating completely independent objects.

# Object Identity and Equality

// These are cases where === behaves as expected:

console.log(true === 1); // false

console.log({} === {}); // false

console.log("2" === 2); // false

// These have different representations in the JS engine and yet are treated as equal
console.log(+0 === -0); // true

console.log(+0 === 0); // true

console.log(-0 === 0); // true

// To determine NaN equivalence, the profoundly annoying isNaN() is required

console.log(NaN === NaN); // false

console.log(isNaN(NaN)); // true


## Object.is()
- To remedy this, the ECMAScript 6 specification introduced Object.is(), which behaves mostly as === does but also accounts for the corner cases listed previously. The method accepts exactly two arguments:

console.log(Object.is(true, 1)); // false
console.log(Object.is({}, {})); // false
console.log(Object.is("2", 2)); // false

// Correct 0, -0, +0 equivalence/nonequivalence:
console.log(Object.is(+0, -0)); // false
console.log(Object.is(+0, 0)); // true
console.log(Object.is(-0, 0)); // false

// Correct NaN equivalence:
console.log(Object.is(NaN, NaN)); // true

To check more than two objects, it is trivial to recursively use transitive equality:
function recursivelyCheckEqual(x, ...rest) {
return Object.is(x, rest[0]) &&
(rest.length < 2 || recursivelyCheckEqual(...rest));
}

```
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true; // Same reference
  
  if (typeof obj1 !== "object" || typeof obj2 !== "object" || obj1 === null || obj2 === null) {
    return false; // Handle non-objects
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false; // Different number of keys

  return keys1.every(key => deepEqual(obj1[key], obj2[key])); // Recursively check values
}

// ✅ Example Usage:
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };

console.log(deepEqual(objA, objB)); // ✅ true
```
 Using Lodash (_.isEqual)
If you're using Lodash, _.isEqual is the best solution.


# Property Value Shorthand
let name = 'Matt';
let person = {
name
};
console.log(person); // { name: 'Matt' }

# Computed Property Keys
```

const nameKey = 'name';
const ageKey = 'age';
const jobKey = 'job';

let person = {
[nameKey]: 'Matt',
[ageKey]: 27,
[jobKey]: 'Software engineer'
};

console.log(person); // { name: 'Matt', age: 27, job: 'Software engineer' }
```

# Object Destructuring
```
let person = {
name: 'Matt',
age: 27
};
let { name, age , job } = person;
console.log(name); // Matt
console.log(age); // 27
console.log(job); // undefined
```

```

let person = {
name: 'Matt',
age: 27
};
let { name: personName, age: personAge } = person;
console.log(personName); // Matt
console.log(personAge); // 27
```

```
let person = {
name: 'Matt',
age: 27
};
let { name, job='Software engineer' } = person;
console.log(name); // Matt
console.log(job); // Software engineer
```


# Object Iteration
There are three native ways to list/traverse object properties:

## Object.key()
Returns an array of the object’s own enumerable property names (just the keys, not values).

```
Syntax:

Object.keys(obj)
```

```
Example:

const myObject = {
  id: 101,
  status: 'Active',
  level: 'Admin'
};

console.log(Object.keys(myObject));
```

```
Output:

["id", "status", "level"]
```

```
Iterating with Object.keys():

Object.keys(myObject).forEach(key => {
  console.log(`${key}: ${myObject[key]}`);
});
```

## Object.values() 
Returns an array of the object’s own enumerable property values (just the values, no keys).

```
Syntax:

Object.values(obj)

```

```
Example:

const myObject = {
  id: 101,
  status: 'Active',
  level: 'Admin'
};

console.log(Object.values(myObject));

```

```
Output:

[101, "Active", "Admin"]
```

```
Iterating with Object.values():

Object.values(myObject).forEach(value => {
  console.log(value);
});

101
Active
Admin
```

## Object.entries()
- Returns an array of [key, value] pairs from an object.
```
Syntax:

Object.entries(obj)

```

```
Example:

const myObject = {
  id: 101,
  status: 'Active',
  level: 'Admin'
};

console.log(Object.entries(myObject));
```

```
Output:

[ ["id", 101], ["status", "Active"], ["level", "Admin"] ]
```

```
Iterating with Object.keys():

for (const [key, value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`);
}

id: 101
status: Active
level: Admin

```

## for...in 
```
const myObject = {
  id: 101,
  status: 'Active',
  level: 'Admin'
};

for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}


output:
id: 101
status: Active
level: Admin

```

# Key differences between for...in, for...of, and forEach

## for...in

Iterates over keys (property names) of an object.

You still need to use myObject[key] to access the value.

Includes inherited enumerable properties too (unless you filter with hasOwnProperty).

## forEach

Array method → also needs Object.entries(myObject) or Object.keys(myObject).

Functional style, no break/continue.

## for...of

Iterates over iterable objects (like arrays, strings, maps, sets).

Doesn’t work directly on plain objects → that’s why we wrap with Object.entries(myObject) or Object.keys(myObject).

Gives you entries (key/value pairs) if you use Object.entries.

# Object.fromEntries
-  builds an object from a collection of key-value array pairs. This method performs the opposite operation of Object.
entries(). 

```
const obj = {
foo: 'bar',
baz: 'qux'
};
const objEntries = Object.entries(obj);

console.log(objEntries);
// [["foo", "bar"], ["baz", "qux"]]

console.log(Object.fromEntries(objEntries));
// { foo: "bar", baz: "qux" }
```
