
# Common.js vs ESM

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