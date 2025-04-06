# templet
```
function callBackFun(val) {
  return val * 2; //any operation to perform on each val
}

function customFun(arr,callBackFun){
const result // initail value can be array (for map and fileter) or a single value (for reducer)

for(let i=0;i<arr.length;i++){
 callBackFun(arr[i]);
}
}

const arr = [1, 2, 3, 4];
const sum = customFun(arr, callBackFunction);
```


# map
function callBackFun(val){
    return val*2;
}

function dumbMap(arr,fun){
    let result=[];
    
    for(let i=0;i<arr.length;i++){
        result.push(fun(arr[i]));
    }
    return result;
}

const arr=[1,2,3,4,5];
const result=dumbMap(arr,callBackFun);

console.log(result) //[ 2, 4, 6, 8, 10 ]

# filter
const arr=[1,2,3,4,5];

function callBackFun(val){
    return val>2;
}

function dumbFilter(arr,fun){
    let result=[];
    
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i]))
        result.push(arr[i]);
    }
    return result;
}
const result=dumbFilter(arr,callBackFun);

console.log(result)  //[ 3, 4, 5 ]


# Reduce


function callBackFun(acc,curr){
    return acc+curr;
}

function dumbReduce(arr,fun,initialVal){
    let acc=initialVal?initialVal:arr[0];
    let startIndex=initialVal?0:1;
    
    for(let i=startIndex;i<arr.length;i++){
         acc = fun(acc, arr[i]);
    }
    return acc;
}

const arr=[1,2,3,4,5];
const result=dumbReduce(arr,callBackFun,0);

console.log(result) //15