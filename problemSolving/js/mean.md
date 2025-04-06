Implement a function that finds the mean (or average) of the values inside an array

```
function mean(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}

const result=mean([4, 2, 8, 6]);

console.log(result);
```