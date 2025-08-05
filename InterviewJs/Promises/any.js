// Promise.any() takes a list of promises and returns a single promise.

// It resolves as soon as one promise is successful, with that result.

// It rejects only if all promises fail, with an AggregateError listing all the errors.
// If an empty iterable is passed, then the promise returned by this method is rejected

// AggregateError is a special type of error in JavaScript used to group multiple errors together into a single error object.

// It’s most commonly seen with Promise.any(), which throws an AggregateError if all promises fail.

// try {
//   await Promise.any([
//     Promise.reject("Error 1"),
//     Promise.reject("Error 2"),
//   ]);
// } catch (err) {
//   console.log(err instanceof AggregateError); // true
//   console.log(err.errors); // ["Error 1", "Error 2"]
// }

// It’s a subclass of the standard Error.

// It has a .errors property – an array of the individual errors.

// Used when multiple things fail, but you want to report them all together.

export default function promiseAny(iterable) {
  return new Promise((resolve,reject)=>{
    const len=iterable.length;
    let pending=len;

    if(pending===0){
      reject(new AggregateError([]));
    }

    const errors=new Array(len);

    iterable.forEach(async (item,index)=>{
      try{
        const value=await item;
        resolve(value);
      }catch(err){
        errors[index]=err;
        pending--;

        if(pending===0){
          reject(new AggregateError(errors));
        }
      }
    })
  })
}


const pr0 = Promise.resolve(42);
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseAny([pr0, pr1]); // 42



const pro0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 100);
});
const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 400);
});

await promiseAny([pro0, pro1]); // 42



const p0 = new Promise((resolve) => {
  setTimeout(() => {
    reject(42);
  }, 400);
});
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

try {
  await promiseAny([p0, p1]);
} catch (err) {
  console.log(e instanceof AggregateError); // true
  console.log(e.errors); // [ 42, "Err!" ]
}