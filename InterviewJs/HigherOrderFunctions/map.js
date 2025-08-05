//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

// syntax
// map(callbackFn)
// map(callbackFn, thisArg)


Array.prototype.myMap = function (callbackFn, thisArg) {
    const len=this.length;
    const arr=new Array(len);
   
    for(let i=0;i<len;i++){
   
     if(Object.hasOwn(this,i)){
       arr[i]=callbackFn.call(thisArg,this[i],i,this);
     }
    }
   
    return arr;
   };

   const result=[1, 2, 3, 4].myMap((i) => i); // [1, 2, 3, 4]