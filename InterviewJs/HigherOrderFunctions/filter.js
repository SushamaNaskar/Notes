// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

//syntax
// filter(callbackFn)
// filter(callbackFn, thisArg)
//thisArg is option, it can be an object passed to filter function
//if inside the callbak function we are using this.name or something like that, we can pass an object saying which should be this


Array.prototype.myFilter = function (callbackFn, thisArg) {
    const len=this.length;
    const results=[];
    
    for(let i=0;i<len;i++){
      const curr=this[i];
    
      if(Object.hasOwn(this,i) && callbackFn.call(thisArg,curr,i,this)){
        results.push(curr);
      }
    }
    
    return results;
    };



const result=[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]

const context = { threshold: 10 };

[5, 15, 8].filter(function (val) {
  return val > this.threshold;
}, context);