const obj={
    name:'Mango',
}


const displayName=function(...args){
    console.log(this.name +' '+ args[0] +' and  ' + args[1])
}

displayName.apply(obj,['is sweet','bitter']);



Function.prototype.myApply=function(ctx,argsArray){
    ctx = ctx || globalThis;
    
    const fnKey=Symbol();
    ctx[fnKey]=this;
    
    const result= argsArray ? ctx[fnKey](...argsArray) : ctx[fnKey]();
    
    delete ctx[fnKey];
    
    return result;
    
}

displayName.myApply(obj,['is sweet','bitter']);





//why we need   const result = argsArray ? context[fnSymbol](...argsArray) : context[fnSymbol]();
// - will throw an error if argsArray is undefined or null, since the spread operator expects something iterable.
//undefined is not iterable (cannot read property Symbol.iterator)