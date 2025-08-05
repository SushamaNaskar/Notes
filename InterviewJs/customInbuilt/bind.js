const obj={
    name:'Mango',
}


const displayName=function(msg){
    console.log(this.name +' '+msg)
}

const printName=displayName.bind(obj,'is sweet');

printName();

Function.prototype.myBind=function(ctx,...bindArgs){
    const originalfn=this; //displayName is this
    
    return function(...callArgs){
        return originalfn.apply(ctx,[...bindArgs,...callArgs]);
    }
    
}

const callMyBind=displayName.myBind(obj,'is sweet') //storing the original function, object and arguments

callMyBind(); //calling the funtion
