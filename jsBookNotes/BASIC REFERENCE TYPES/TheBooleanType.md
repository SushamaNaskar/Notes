# The Boolean Type
- The Boolean type is the reference type corresponding to the Boolean values. 
- To create a Boolean object, use the Boolean constructor and pass in either true or false, as in the following example:
let booleanObject = new Boolean(true);

-  prefer to never use this,since it's gives incorrect result while using && operator.
let falseObject = new Boolean(false);
let result = falseObject && true;
console.log(result); // true