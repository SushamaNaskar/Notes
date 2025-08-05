# Why we use Call, Apply and Bind method
- They solve the problem of losing this when a method is detached from its object.
- we can borrow method of one object and use it for other objects.



# call() and apply()
- methods immediately execute a function with a specified this value and arguments.

## ex1:
const person={
    name:'rahul',
    age:29,
   
}

 displayValue=function(stateName){
        console.log(this.name+' is '+this.age + ' lives in '+stateName);
}
    
displayValue.call(person,'Mumbai')

let person1={
     name:'rohit',
    age:30,
}


displayValue.call(person1,'Karnataka')

## ex2:
const person={
    name:'rahul',
    age:29,
   
}

 displayValue=function(...args){
        console.log(this.name+' is '+this.age + ' lives in '+args[0]);
}
    
displayValue.apply(person,['Mumbai'])

let person1={
     name:'rohit',
    age:30,
}


displayValue.call(person1,'Karnataka')

displayValue.apply(person1,['Karnataka'])

# bind():
- Creates a new function with a specified this value, allowing to defer the execution of the original function until later, which is great for callbacks and event handlers.

const person={
    name:'rahul',
    age:29,
   
}

 displayValue=function(...args){
        console.log(this.name+' is '+this.age + ' lives in '+args[0]);
}
    
const printVal=displayValue.bind(person,'Mumbai');
printVal()



# function borrowing
- we can use borrow method of one object and use it for other objects.

const person={
    name:'rahul',
    age:29,
    displayValue:function(){
        console.log(this.name+' is '+this.age);
    }
}

person.displayValue()

let person1={
     name:'rohit',
    age:30,
}

//function borrowing
person.displayValue.call(person1)


# create own call, apply and bind

Function.prototype.myCall = function (context, ...args) {
  // If no context is provided, use the global object or window (for non-strict mode)
  context = context || globalThis;

  // Create a unique property on the context object to hold the function temporarily
  const uniqueKey = Symbol('uniqueKey');
  context[uniqueKey] = this; // `this` refers to the original function

  // Call the function with the provided context and arguments
  const result = context[uniqueKey](...args);

  // Clean up by deleting the temporary property
  delete context[uniqueKey];

  return result;
};