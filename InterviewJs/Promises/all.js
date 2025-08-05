// Promise.all() takes a list of promises and returns a single promise.

// It resolves when all the promises are successful, giving an array of their results.

// It rejects as soon as one promise fails, with that error.

// If the list is empty, it resolves right away.

// Promise.all() is frequently used when there are multiple concurrent API requests 
// and we want to wait for all of them to have completed to continue with code execution,
// usually because we depend on data from both responses.

export default function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}



const [userData, postsData, tagsData] = await Promise.all([
  fetch('/api/user'),
  fetch('/api/posts'),
  fetch('/api/tags'),
]);


const pr0 = Promise.resolve(3);
const pr1 = 42;
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

await promiseAll([pr0, pr1, pr2]);



const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err);
}