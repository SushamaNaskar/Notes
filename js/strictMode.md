# strictMode errors
- Strict mode throws a ReferenceError when an undeclared variable is assigned a value.
- you cannot define variables named eval or arguments. Doing so results in a syntax error.

- To enable strict mode for an entire script, include the following at the top:
"use strict";

this is a pragma that tells supporting JavaScript engines to change into strict mode. 

- You may also specify just a function to execute in strict mode by including the pragma at the top of the function body:
```
function doSomething() { 
    "use strict";
// function body
}
```
A pragma is a compiler directive that allows you to provide additional information to the compiler


# Revised
1. strictMode
- ECMAScript 5 introduced the concept of strict mode.Strict mode is a different parsing and execution modal for JavaScript, where some of the erretic behaviour of ECMAScript 3 is addressed and errors are trown for unsafe activities. to include strict mode we can add the pragme use strict at the top of a file, it tells the JavaScript engine to change into strict mode.

1. strict mode.
- ECMAScript 5 introduced the concept of strict mode. Strict mode is a different parsing and execution modal for JavaScript, where some of the erretic behaviour of ECMAScript 3 is addressed and errors are thrown for unsafe activities. To include strict mode we can add the pragma "use strict" at the top of a file, it tells the JavaScript engine to change into strict mode.