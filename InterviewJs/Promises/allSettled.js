
// Promise.allSettled() takes a list of promises and returns a promise that resolves when all are done, whether they succeed or fail.

// The result is an array of objects, each showing the outcome:

// If successful: { status: 'fulfilled', value: ... }

// If failed: { status: 'rejected', reason: ... }

// If the list is empty, it resolves right away with an empty array.

export default function promiseAllSettled(iterable) {
  return new Promise((resolve) => {
    const len = iterable.length;
    const result = new Array(len);
    let pending=len;

    if (len === 0) {
      resolve(result);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const res = await item;
        result[index] = {
          status: "fulfilled",
          value: res,
        };
      } catch (err) {
        result[index] = {
          status: "rejected",
          reason: err,
        };
      }

      pending-=1;
      
      if (pending === 0) {
        resolve(result);
      }
    });

  
  });
}



const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('foo');
  }, 100);
});

await promiseAllSettled([p0, p1, p2]);
// [
//   { status: 'fulfilled', value: 3 },
//   { status: 'fulfilled', value: 42 },
//   { status: 'rejected', reason: 'foo' },
// ];