// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects
// , with the value or reason from that promise.
//If the iterable passed is empty, the promise returned will be forever pending.
//If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race() will resolve to the first of these values found in the iterable.


export default function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) {
      return;
    }

    iterable.forEach(async (item) => {
      try {
        const result = await item;
        resolve(result);
      } catch (err) {
        reject(err);
      }
    });
  });
}


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

await promiseRace([pro0, pro1]); // 42


const p0 = Promise.resolve(42);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(21);
  }, 100);
});

await promiseRace([p0, p1]); // 42



const pr0 = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 400);
});
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Err!');
  }, 100);
});

try {
  await promiseRace([pr0, pr1]);
} catch (err) {
  console.log(err); // 'Err!'
}