# The Null Type
Logically, a null value is an empty object pointer, which is why typeof returns "object" when it’s passed a null value in the following example:
let car = null;
console.log(typeof car); // "object"

The value undefined is a derivative of null, so ECMA-262 defines them to be superficially equal as follows:
console.log(null == undefined); // true
console.log(null === undefined); // false