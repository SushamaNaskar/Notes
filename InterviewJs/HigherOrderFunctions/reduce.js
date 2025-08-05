//How reduce in js works
//takes a call back funtion and initialvalue (optional) as arguments
//if the initial value is provided starts from 0 th index
//if initail value is not provided, acc=arr[0] and starts from 1th index
//the callback function is called with acc, curr, index, array

Array.prototype.myReduce = function (callBackFunction, initialValue) {
    const noInitialValue = initialValue === undefined;
    const len = this.length;

    const startingIndex = noInitialValue ? 0 : 1;
    let acc = noInitialValue ? this[0] : initialValue;

    for (let i = startingIndex; i < len; i++) {

        if (Object.hasOwn(this, i)) {
            acc = callBackFunction(acc, this[i], i, this);

        }
    }
    return acc;
}

const result = [1, 2, 3].myReduce((prev, curr) => prev + curr, 0);
console.log(result);


// The Object.hasOwn() static method returns true if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns false.
//Object.hasOwn() is intended as a replacement for Object.prototype.hasOwnProperty().
//syntax : Object.hasOwn(obj, prop)

//use age:
// 1. Checking if an Array index exists