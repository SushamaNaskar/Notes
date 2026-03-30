
# Object Types
👉 Directly defining object type (not reusable)

```
function greet(person: { name: string; age: number }) {

}
```

# Interface

```
interface Person {
  name: string;
  age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

function greet(person: Person) {

}
```

# type alias

```
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {

}
```

# Interface vs Type
interface → mainly for objects
type → more flexible (unions, tuples, etc.)

# Property Modifiers
👉 Property may or may not exist

```
type Person = {
  name?: string;
};
```


# defaults
👉 Default if value not provided

```
type PaintOptions = {
   shape: Shape;
   xPos?: number;
  yPos?: number;
};
function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
 
}
```

# readonly Properties
- Cannot reassign.
- its internal contents can be changed

```
interface Home {
  readonly resident: { name: string; age: number };
}
 
function visitForBirthday(home: Home) {
  // We can read and update properties from 'home.resident'.
  console.log(`Happy birthday ${home.resident.name}!`);
  home.resident.age++;
}
 
function evict(home: Home) {
  // But we can't write to the 'resident' property itself on a 'Home'.
  home.resident = {
Cannot assign to 'resident' because it is a read-only property.
    name: "Victor the Evictor",
    age: 42,
  };
}
```

# Index Signatures
- All properties must match the index type
- An index signature allows defining objects with dynamic keys. 

```
[key: string]: number | string
“Any key → value must be number or string”
```

- In below example, any string key must have a value of type number or string, so all properties must conform to that rule.
```
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}

```

```
interface ProductPrices {
  [productName: string]: number;
}

const prices: ProductPrices = {
  apple: 100,
  banana: 50,
  mango: 80
};
```


# Excess Property Checks
- TypeScript checks for extra properties when you create an object directly.
```
type User = {
  name: string;
};

const user: User = {
  name: "John",
  age: 25 // ❌ Error (extra property)
};
```
- Excess property checks prevent unknown properties in object literals, but they can be bypassed using type assertions or handled properly using index signatures.

Strict → safe  
as → skip check  
[index: string] → allow flexible keys

## with as
- TypeScript stops checking extra properties
```
const user = {
  name: "John",
  age: 25
} as User; // ✅ No error
```

## [index: string] → allow flexible keys
- You can add ANY extra property
```
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: unknown;
}
```

# The  keyof type operator
- keyof gives you all keys of an object as a type
- keyof is a TypeScript operator that creates a union of all property keys of a given type.

```
type Person = {
  name: string;
  age: number;
};
```

```
type Keys = keyof Person;
```

👉 Result:

```
"name" | "age"
```

🧠 Why use keyof?

✔ Prevent invalid keys
✔ Better autocomplete
✔ Safer dynamic access

# Extending Types
- The extends keyword on an interface allows us to effectively copy members from other named types, and add whatever new members we want. 
- interfaces can also extend from multiple types.

```
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}

interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

# Intersection Types
- combine existing object types

```
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}
 
type ColorfulCircle = Colorful & Circle;
```

# Interface Extension vs. Intersection
| Feature  | Interface | Intersection       |
| -------- | --------- | ------------------ |
| Conflict | ❌ error   | ⚠️ becomes `never` |

- They look similar, but behave differently when there is a conflict
- for Interface Extension: “Same property must have same type” :If types conflict → ❌ ERROR immediately
👉 Intersection doesn’t throw error immediately
👉 It creates impossible types silently

```
interface A {
  name: string;
}

interface A {
  name: number; // ❌ Error
}
```

```
interface Person1 {
  name: string;
}

interface Person2 {
  name: number;
}

type Staff = Person1 & Person2;
```
- n this case, Staff would require the name property to be both a string and a number, which results in property being of type never.

# Generic Object Types
- A generic object type lets you create a reusable object shape where the type of values can change
- Generics let you create one reusable type that works with different data types safely.
- Instead of fixing types, you use a placeholder (T)
- It creates a template for objects

```
Box<T> = template
T = replace with actual type
```
```
const numberBox: Box<number> = { value: 10 };
const stringBox: Box<string> = { value: "hello" };

It creates a template for objects:

Box<number> → { value: number }
Box<string> → { value: string }
```

## how it's different and safer than any and unknown and different that interfaces

| Approach            | Problem         |
| ------------------- | --------------- |
| `any`               | ❌ unsafe        |
| `unknown`           | ⚠️ needs checks |
| multiple interfaces | ❌ repetition    |
| generics            | ✅ best          |


### using any
```
interface Box {
  contents: any;
}
```
👉 Works, but no safety (can cause bugs)

### using unknown
```
interface Box {
  contents: unknown;
}

let x: Box = {
  contents: "hello world",
};

if (typeof x.contents === "string") {
  console.log(x.contents.toLowerCase());
}

console.log((x.contents as string).toLowerCase());
```

👉 we’d need to do precautionary checks

### using interfaces
- Suppose we want to create a generic function, which operates with different types of data
- One type safe approach would be to create different interface for every type
- But that means we’ll have to create different functions, or overloads of functions, to operate on these types.

```
interface NumberBox {
  contents: number;
}
 
interface StringBox {
  contents: string;
}
 
interface BooleanBox {
  contents: boolean;
}

function setContents(box: StringBox, newContents: string): void;
function setContents(box: NumberBox, newContents: number): void;
function setContents(box: BooleanBox, newContents: boolean): void;
function setContents(box: { contents: any }, newContents: any) {
  box.contents = newContents;
}
```

- Instead, we can make a generic  type which declares a type parameter.

```
interface Box<Type> {
  contents: Type;
}
```

- Later on, when we refer to Box, we have to give a type argument in place of Type.
- Type is a placeholder that will get replaced with some other type.
- When TypeScript sees Box<string>, it will replace every instance of Type in Box<Type> with string, and end up working with something like { contents: string }




