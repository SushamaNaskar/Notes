# Global Object
- The window object is a global object provided by the browser, not by the V8 engine.
- In Node.js, the global object is known as global , which is equivalent to the window object in the browser.
- A global object is not a part of the V8 engine; instead, it’s a feature provided by Node.js.
- This global object offers various functionalities, such as setTimeout() , setInterval() , and more.

```
console.log(this); // Outputs: {}

When you use console.log(this); at the global level in Node.js, it will log an empty object, indicating that this does not refer to the global object in this context.
```

# globalThis
- is always a global object, regardless of where it is accessed. It was introduced in ECMAScript 2020 to provide a standardized way to refer to the global object in any environment (browsers, Node.js, etc.).
- In browsers, global is equivalent to window .
- In Node.js, globalThis is equivalent to global .
- It provides a consistent way to access the global object without worrying about the environment.

- before 2020 
- in browser window, this, self, frames all prints the global object window, 
- in node global object was global (but this prints and empty object)
- similarly different envoirment used different names for the global object
- so in 2020 the js commite decided to name the global object as globalThis

# globalThis — The Universal Global Object in JavaScript

## Why Was globalThis Introduced?
Before ES2020, JavaScript did not have a single, consistent name for the global object.
Each environment used its own identifier, making cross-platform code difficult.

🖥️ Before ES2020: Different Global Objects Everywhere
In Browsers

All of these pointed to the browser’s global object (window):
### window
- this (at global scope)
- self
- frames

### In Node.js
The global object was called: global
But this at top-level is not the global object
console.log(this); // {}

### In Web Workers
The global object was: self

### Other JavaScript Runtimes
Deno, JS shells, old frameworks used different names for the global object.

😖 The Problem

There was no universal way to reference the global object.
Developers had to write awkward code like:

const root =
  typeof window !== "undefined" ? window :
  typeof global !== "undefined" ? global :
  typeof self !== "undefined" ? self :
  {};

✅ ES2020 Solution: globalThis

To unify everything, TC39 introduced globalThis in 2020 (ES2020) —
a single, reliable way to access the global object in any environment.

Examples
globalThis.setTimeout(() => {
  console.log("Runs in any JS environment!");
}, 1000);

🌎 What globalThis Represents in Different Environments
| Environment   | Old Name                           | Now Equivalent To |
| ------------- | ---------------------------------- | ----------------- |
| Browser       | `window`, `self`, `frames`, `this` | `globalThis`      |
| Node.js       | `global`                           | `globalThis`      |
| Web Worker    | `self`                             | `globalThis`      |
| Deno / Others | varies                             | `globalThis`      |

🎯 Summary

- Pre-2020: many names for the global object
- globalThis standardizes this across all platforms
- Easy, clean, cross-environment JavaScript