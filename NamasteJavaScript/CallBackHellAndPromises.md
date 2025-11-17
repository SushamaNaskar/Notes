# Callback functions
- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. This is a common pattern in JavaScript for handling asynchronous operations, such as reading files, making network requests, or responding to user events without blocking the main thread.

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
<!-- They enable asynchronous programming, allowing the code to perform tasks without blocking the main thread. -->

# Callback hell
- Callback hell refers to the situation where callbacks are nested within callbacks, leading to code that is difficult to read, understand, and maintain. This often occurs in asynchronous programming when dealing with operations like file handling, database queries, network requests, and more. It's often referred as the "Pyramid of Doom".

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) throw err;
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) throw err;
    fs.readFile('file3.txt', 'utf8', (err, data3) => {
      if (err) throw err;
      console.log(data1, data2, data3);
    });
  });
});

# Promise
The Promise is an object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.

# Promise Chaining
- Promise chaining allows to sequence multiple asynchronous operations, where each operation starts when the previous one succeeds. This leads to more readable and manageable code compared to nested callbacks.

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);


# create you own promises
  const cart=['kurta',"jeans"];

const promise=createOrder(cart);

promise.then(function (orderId){
  console.log(orderId);
}).catch(functon(err){
  console.log(err.message)
})

function createOrder(cart){
  let pr=new Promise(function(resolve,reject){
    if(!validateCart()){
      const err=new Error("Error found");
      reject(err);
    }else{
      resolve("12345");

    }
  })
  return pr;
}

function validateCart(){
  return true;
}
createOrder(cart);

console.log(promise);

# Promise.all()
- wait of all of then to finish and returns an array
promise.all(p1,p2,p3)
            3s,2s,1s

after 3s [res1,res2,res3];
- as soon as one is rejected, promise.all() will throw an error
promise.all(p1,p2,p3)
            3s,2s,x

after 1s throws an error

# promise.allSetelled()
- wait of all of then to finish and returns an array
promise.all(p1,p2,p3)
            3s,2s,1s

after 3s [res1,res2,res3];
- wait for all promises to settled (sucess or failure) and after 3s returns an array
promise.all(p1,p2,p3)
            3s,X,1s
   after 3s [res1,err2,res3];         

# promise.race()
- returns the first settled promise value (success or failure)
promise.all(p1,p2,p3)
            3s,2s,1s
value of p3 will be returned after 1 sec => val3

promise.all(p1,p2,p3)
            3s,2s,x
wrror for p3 will be returned after 1 sec => error3


# promise.any()
- returns the first settled promise value of the success call
promise.all(p1,p2,p3)
            3s,2s,1s
value of p3 will be returned after 1 sec => val3

- in case p3 fails, it will return the next sucess response
promise.all(p1,p2,p3)
            3s,2s,x
value of p2 will be returned after 2 sec => val2

- in case all fails, it will return an aggregateError
promise.all(p1,p2,p3).catch((err)=>console.log(err.errors))
            x,x,x
after 3 sec => [err1,err2,err3]
