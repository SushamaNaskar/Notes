# Why we use Call, Apply and Bind method
By using the call(), apply(), and bind() methods, you can avoid repeating code that sets the this value or passes arguments to a function. Instead, you can create a single function that accepts a this value and arguments, and then use the call(), apply(), or bind() methods to invoke the function with the correct context and arguments. This can save you time and reduce the amount of code you need to write.

- These are JavaScript methods that help control how a function is called and how the this context is set.

- Instead of writing the same logic multiple times to set the value of this or pass arguments, these methods allow us to reuse code efficiently.
- we can use call(), apply(), or bind() to invoke the function with the right this context and arguments, making the code cleaner and more flexible.



# call() and apply
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
- Creates a new function with a specified this value, allowing you to defer the execution of the original function until later

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