# Promise.reject

- The Promise.reject() static method returns a Promise object that is rejected with a given reason.
- Promise.reject() always wraps reason in a new Promise object, even when reason is already a Promise.


# Implementation
Implement the Promise.reject() function as promiseReject.

```
export default function promiseReject(reason) {
return new Promise((_,reject)=>reject(reason));
}

async function run() {
 try {
   promiseReject('Mayday!');
 } catch (err) {
   console.log(err); // Mayday!
 }
}

run();
```
