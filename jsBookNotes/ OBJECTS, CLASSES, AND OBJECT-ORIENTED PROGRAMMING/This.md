1092
365
# this
- this is a keyword that refers to the object that is currently executing the function. Its value depends on how the function is called, not where it is defined.

# Execution Context — the "backstage room" for every function
Every time a function runs, JavaScript creates an Execution Context.

This context includes:
1. Variable Environment (local variables)
2. this value
3. Scope chain


1. Global Execution Context (GEC): this refers to global object window and global

2. Function Execution Context (FEC)
Variable Environment: Holds variables and functions defined within the function.

scope Chain: Keeps track of the function's scope and its parent scopes.

this Binding: Determines the value of this based on how the function is called. In regular function, this in undefined in strict mode and if the function is called as a method of obj, this referce to the object to the left of the dot.


# The value of this
The value of this is determined by how a function is called:

1. Method Call: When a function is called as a method of an object (e.g., obj.func()), this refers to the object (obj).
2. Function Call: When a function is called directly (e.g., func()), this refers to the global object (window in browsers) or is undefined in strict mode.
3. Constructor Call: When a function is used as a constructor (e.g., new Func()), this refers to the new instance created.

# regular function

function fun(){
    console.log(this);
}
fun();

case 1: In non-strict mode (default in many browsers)
- this inside fun() will refer to the global object. In a browser, that’s window.
- In Node.js, it’s global.

So it will log the global object to the console.


Case 2: In strict mode 
- this is undefined, because strict mode prevents defaulting to the global object.
- So console.log(this) will print undefined.

# object methods
this points to the entire obj

const obj={
    name:'sus',
    fun:function(){
        console.log('inside obj',this);
    }
}

obj.fun();

output: inside obj { name: 'sus', fun: [Function: fun] }

- fun is a regular function defined inside the object obj.
- When you call obj.fun(), the function is called as a method of obj.
- In this case, this refers to the object to the left of the dot, which is obj.


# The Problem: this Changes Based on How a Function Is Called
- In JavaScript, when you pass a function around (for example, as a callback ) it can lose its original this context.

ex1:

const user = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

function runCallback(callback) {
  callback(); // Here, 'this' is not bound to 'user'
}

runCallback(user.greet); // ❌ TypeError or undefined — 'this.name' is undefined

ex2:

const person = {
    name: 'Alice',
    greet() {
        console.log('Hello, ' + this.name);
    }
};

setTimeout(person.greet, 1000); // Oops! 'this' is lost


ex3:
const person = {
    name: 'Alice',
    greet() {
        console.log('Hello, ' + this.name);
    }
};

function fun1(callback){
    setTimeout(()=>callback(), 1000); //Hello, undefied
}

fun1(person.greet);

Problem:
When person.greet is passed to setTimeout,or as callback function it's not called as person.greet() anymore — it's just a reference to the function.
So this becomes undefined (in strict mode) or the global object, and you'll get:
Hello, undefined

# The Solution: call, apply, and bind Fix this
- They let you manually control the value of this, regardless of how the function is being called.

# Using call or apply
You can call the function right away, and force this to be what you want:

ex1:

function fun(message){
    console.log(this.context,message);
}

const obj={
    context:'hello'
}

fun.apply(obj,["sus"])

ex2:

const person = {
    name: 'person',
    greet() {
        console.log('Hello, ' + this.name);
    }
};

const human = {
    name: 'human',
    greet() {
        console.log('Hello, ' + this.name);
    }
};

setTimeout(function() {
    person.greet.call(person); //keeps the reference of person
     person.greet.call(human);
}, 1000); 

// Output: Hello, Alice



# Using bind (the cleaner solution)
bind returns a new function with this permanently set:
setTimeout(person.greet.bind(person), 1000);
Now, even when passed around, this remains tied to person.


# Summary of apply, call and bind
- They solve the problem of losing this when a method is detached from its object.
- call and apply let you invoke a function immediately with a specific this.
- bind lets you create a new function that remembers the right this, which is great for callbacks and event handlers.



# notes
ex1:
const person = {
    name: 'Alice',
    greet() {
        console.log('Hello, ' + this.name);
    }
};



const temp = person.greet;

setTimeout(temp, 1000); // `this` is lost

setTimeout(person.greet, 1000); // Oops! 'this' is lost

# This does not work as expected because:

person.greet is passed as a callback function — you're not calling it right away, you're handing over a reference to it.
When setTimeout later invokes this function, it does so without any context, so this becomes:
undefined (in strict mode), or
the global object (window in browsers) in sloppy mode.
this.name therefore becomes undefined.

ex2:
const person = {
    name: 'Alice',
    greet() {
        console.log('Hello, ' + this.name);
    }
};

setTimeout(function() {
  person.greet(); // `this` inside greet refers to person
}, 12000);

setTimeout(()=>person.greet(), 12000); //Hello, Alice

# # This work as expected because:
- function() { person.greet(); } is just a normal function.

- Inside it, you’re calling person.greet() — not just greet() or passing person.greet as a bare function.

- So JavaScript knows:

- You are calling a method on the object person.

- Therefore, this inside greet refers to person — exactly what you want.

# Rule of Thumb
✅ person.greet() → this is person (you called it on the object)

❌ person.greet alone → no this context is carried along

✅ Wrap calls in () => person.greet() or function() { person.greet(); } to retain context