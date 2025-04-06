Async and await are used to handle promises

# async
- always return a promise
- if we return a value, it will wrap the value inside promise and return that promise

# await
- await is a keyword that can only be used inside async function

- async and await are syntactic sugar in JavaScript for working with Promises, introduced to make asynchronous code look more like synchronous code, making it easier to read and write.


// Example of an async arrow function
const fetchData = async (url1,url2) => {
  try {
    const response1 = await fetch(url1); // Wait for the fetch request to resolve
    const data1 = await response1.json(); // Wait for the response to be parsed as JSON

    const response2 = await fetch(url2); // Wait for the fetch request to resolve
    const data2 = await response2.json(); // Wait for the response to be parsed as JSON


    return [data1,data2]; // Return the parsed data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error
  }
};

// Example usage:
const url = "https://jsonplaceholder.typicode.com/posts/1";
fetchData(url)
  .then((data) => {
    console.log("Fetched data:", data); // Handle the resolved data
  })
  .catch((error) => {
    console.log("Error:", error); // Handle any errors
  });


  const run = async () => {
  try {
    const data = await fetchData(url);
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
};

run();