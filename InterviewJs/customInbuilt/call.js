// Function.prototype.call
//The Function.prototype.call() method calls the function with a given this value and arguments provided individually.

// Implement your own Function.prototype.call without calling the native call method.
//  To avoid overwriting the actual Function.prototype.call, implement the function as Function.prototype.myCall.

// Examples

// function multiplyAge(multiplier = 1) {
//     return this.age * multiplier;
//   }
  
//   const mary = {
//     age: 21,
//   };
  
//   const john = {
//     age: 42,
//   };
  
//   multiplyAge.myCall(mary); // 21
//   multiplyAge.myCall(john, 2); // 84


function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
  }
  
  const mary = {
    age: 21,
  };
  
  const john = {
    age: 42,
  };
  
  Function.prototype.myCall=function (ctx,...args){
      ctx= ctx === null ? globalThis : Object(ctx); //obj which is mary passed as first argument
      
      const fnkey=Symbol(); //always returns a unique value, lets assum 123
      
      ctx[fnkey]=this;      // "this" is the multiplyAge function before dot . and we are adding it as a property to object mary mary={123:multiplyAge}
      
      const result=ctx[fnkey](...args); //calling multiplyAge with remaining args
      
      delete ctx[fnkey]; //then deleting 123:multiplyAge property
      
      return result;
  }
  
  const result1=multiplyAge.myCall(mary); // 21
  console.log(result1);
  
  const result2=multiplyAge.myCall(john, 2); // 84
  console.log(result2);
  
  
//   function showType(val) {
//    this.value=val;
//    return this;
//   }
  
//   const result3=showType.myCall('hello',1);
//   console.log(result3);
  
  
//   const obj = {
//     fn: () => this,
//   };
  
//   console.log(obj.fn.myCall({ x: 1 }) === this); // ✅ true


// why use symbol
//Prevents overwriting existing properties on the object.


Function.prototype.badCall = function (ctx, ...args) {
    ctx = ctx == null ? globalThis : Object(ctx);
    ctx.tempFn = this; //since tempFn is a real property of the obj person, we are overriding it
    const result = ctx.tempFn(...args); 
    delete ctx.tempFn;   // and also deleting it
    return result;
  };
  
  const person = {
    name: 'Alice',
    tempFn: function () {
      return 'I already exist!';
    }
  };
  
  function greet() {
    return `Hello, ${this.name}`;
  }
  
  // Calling badCall:
  const result = greet.badCall(person);
  console.log(person);  //since we have deleted tempFn inside badCall now person is {name:'Alice'}
  console.log(person.tempFn()) //person.tempFn is not a function


  //Why we are adding the function as a property to the given obj arguments temporarily?
  //Because only when a function is called as a property of an object (e.g. obj.fn()), does JavaScript bind this to that object.
  //So to make greet() run as if it were a method of person, we temporarily assign it as a property
  //since greet is a regular function call, it does not has "this"
  //and also greet function does not has a name property
  //we use this to access a property of an object inside that object
  //once a property/method is seperated from that object, "this" has no meaning
  


  // So what's .call() doing?

  //greet.call(person);

  //Act like this:
  //person.temp = greet;
// person.temp();
// delete person.temp;

