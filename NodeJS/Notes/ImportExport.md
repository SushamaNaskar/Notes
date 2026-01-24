# import a module into another module

- use require function

xyz.js

```
console.log("xyz module executed");
```

.app.js

```
require("./xyz.js");

console.log("app module executed");
```

- if we run node app.js, the output will be

```
xyz module executed
app module executed
```

- what happens is that since require() function is there in app.js, node js will run require() function first,
  hence the content of xyz file will be executed first then the code in app.js will be executed.

# import a function defined in a seperate module

xyz.js

```
console.log("xyz module executed");

function sum(a,b){
    return a+b;
}

```

.app.js

```
require("./xyz.js");

console.log("app module executed");

var a=10;
var b=20;

sum(a+b);  //throws error
```

- if we run node app.js, the output will be

```
xyz module executed
app module executed

ReferenceError: sum not defined
```

- WhenEver we use require() to import a file, the code inside the file will be executed, but we can't use the variable and methods of that file into a seperate file, simply by requiring it.
- Modules are protected by default, meaning module protects their variables and functions from leaking
- So we need to export the variables and methods, and import them, if we want to access them in other files

xyz.js

```
console.log("xyz module executed");

function sum(a,b){
    return a+b;
}

module.exports=sum;

```

.app.js

```
const sum=require("./xyz.js");

console.log("app module executed");

var a=10;
var b=20;

sum(a+b);
```

output

```
xyz module executed
app module executed
30
```

## exporting multiple variables or methods

xyz.js

```
console.log("xyz module executed");

function sum(a,b){
    return a+b;
}

var x="print x variable";

module.exports={
    x:x,
    sum:sum
    };

```

another.js

```
console.log("another module executed");

function diff(a,b){
    return a-b;
}

var a="print a variable";

module.exports={
    x,
    diff
    };

```

.app.js

```
const obj=require("./xyz.js");
const {a,diff}=required("./another");

console.log("app module executed");

var a=10;
var b=20;

obj.sum(a+b);
console.log(obj.x)

diff(b,a);
console.log(another.a)

```

output

```
xyz module executed
app module executed
30
print x variable
10
print a variable

```

# Common.js vs ESM

<table>
<thead>
<tr>
<th>Common.js(cjs)</th>
<th>ES Module(esm/mjs/ES6)</th>
</tr>
</thead>

<tbody>
<tr>
<td>module.exports and require()</td>
<td>import and export</td>
</tr>

<tr>
<td>by default used in node.js</td>
<td>by default used in react,angular</td>
</tr>

<tr>
<td>older way</td>
<td>newer way</td>
</tr>

<tr>
<td>synchronous</td>
<td>asynchronous</td>
</tr>

<tr>
<td>not strict</td>
<td>strict</td>
</tr>
</tbody>
</table>

<h1> 1. basic syntax for importing and exporting</h1>

## Common.js

### file where we export

var x="Hello";

function calSum(a,b){
console.log(a+b);
}

module.exports={
x,
calSum
}

### file where we import

const {x,calSum}=required("./file_path");
calSum(20,40);

## ESM.js

### file where we export

export var x="Hello";

export function calSum(a,b){
console.log(a+b);
}

### file where we import

import {x,calSum} from './file_path";

calSum(20,40);

<h1>2. By default Common.js runs in non-strict mode and ESM runs in strict mode</h1>

## Common.js

z="5" // does not throw any error

## ESM.js

z="5" // throws an error

<h1>Synchronous vs. Asynchronous</h1>
 CommonJS requires modules in a synchronous manner, meaning the next line of code will execute only after the module has been loaded. In contrast, ES modules load modules asynchronously, allowing for more efficient and flexible code execution. This distinction is a powerful feature and an important point to remember for interviews.

# type  in package.json

1. by default common.js is used in node.js, so if we want to use ES module, we need to define type as module

package.json
```
{"type":"module"} //for ES module
{"type":"common"} //for common.js
```


# module.exports
- it is an empty object

- diffrent way to use it

```
module.exports=sum;

module.exports={sum};

module.exports.sum=sum;
```


# read episode-04.pdf starting from Nested Modules still end



# require
- when a require() function is used to import a file, all the code of that file is wrapped inside a IIFE function
- This means that all variables and functions in the module are contained within that function’s scope and cannot be accessed from outside the module unless explicitly
- keeps variable and function safe.
- module and require are passed as params to IIFE by node.js
(function (module,require){
    //all the code of the required file
exported.

})()

# How require() Works Behind the Scenes
- There are 5 steps perfomed by node.js to load and execute the code of the require file

## 1. Resolving the Module