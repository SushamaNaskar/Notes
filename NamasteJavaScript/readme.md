
# Closure -376
- function along with it's lexical scope bundle together forms a closure. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.

# explain why var does not provide correct value while using setTimeOut

function x(){
    for(var i=0;i<=5;i++){
        setTimeOut(()=>{
         console.log(i);
        },3000)
    }
    console.log('print this line')
}

x();

it will print 6 , 6 times


- Whenever setTimeOut is called, it pushes the setTimeOut function with value of i
- Because of clouser all setTimeOut function referece to the same i variable, not the value of i
- And since Javascript does not wait, loop will continue (var i=0;i<=5;i++) and i value will be incremented

step by step
i=0 - creates a setTimeOut with i=0 , and pushed it on a different stack, and it waits for 3ms
i=1 - creates a setTimeOut with i=1 , and pushed it on a different stack, and it waits for 3ms
- now setTimeOut(i=0) also gets the value 1, because of closure, it referce to same i, not the value of i
i=2 - creates a setTimeOut with i=2 , and pushed it on a different stack, and it waits for 3ms
- setTimeOut with i=0 and i=1, also becomes 2
i=3 - creates a setTimeOut with i=3 , and pushed it on a different stack, and it waits for 3ms
- setTimeOut with i=0 and i=1 and i=2, also becomes 3
and so on

# solution

## using let
use a let i, since let is block scope, it will create a new variable i with current value, with it's own identity of i
so i=0 will be a new cope, with 0 bound to it
- it makes 5 copies of i, with seperate copy, with there own value of i

## using var

function x(){
    for(var i=0;i<=5;i++){
        function Close(i){
             setTimeOut(()=>{
              console.log(i);
            },3000)
        }
      Close(i);
    }
}

x();

when we pass i in Close(i), Close function receives a new cope of i,
the var i in loop and the i recieved by Close(i) function are not same

# Garbage collector
# How Garbage collector and Clouser are related



# constructor function
# function statement / function declaration
function a (){

}

# function expression
var b=function(){

}

# difference between function statement and function expression
- hoisting
- calling a() and b() before they are declared, causes this
a();
b(); // b will trow an reference error

# anaymous function
function (){

}

# Named function Expression
var b = function xyz(){

}

# parameter and statement

var b = function (params){

}
b(argument)

# First class function
# first class citizens
- passing and receiving function as a variable, returning a function from another function

# Arrow function

# callBack function
- process of passing a function to another function. Due to callback we can perform async. 
- When we are execution a code asyncrobously, it needs a function to call it, after some time. so we provide a callback function to it.
setTimeOut(function(){

},5000)

funtion x(y){

}
x(function y(){

})

- function y is known as call back function. function x will call the function y later, somewhere is the code. It is the job of function x to call y.
- the scope of This call back function will be attached to it.
Elements->enentListner (dev tools)

# eventListner
- eventListner is heavy since it forms a closure, which is not garbabe collected, even though the whole code has been executed.
- That is why we need to remove eventlister

function addEventLister(){
    let count =0;

    document.getElementById("button_ID").addEventLister("click", function xyz(){
        click('button is clicked)
    })
}

addEventLister()
addEvnetLister will contain scope, and function xyz will contain it's closure {let count=0}

# main thread
- eveything executed in call stack.



# parsing phase
- During this phase the code you write is broken down in tokens


# syntax parser
- takes the code and converts into AST(Abstract syntax tree)
astexplorer.net

# Compilation and execution
- AST is then passed to the compilation phase
- Compilation and execution goes hand in hand

# interpretter


# Higher Order Function
# prototype

# callBack hell
# Invertion of control
# Promises