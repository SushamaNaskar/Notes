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





# Why add await before res.JSON()


 Step-by-Step Breakdown
🟢 Step 1: fetch(url)
The browser sends a request over the network (TCP/IP).

It waits only for the response headers to come back (status code, content-type, etc.).

Once the headers are in, it resolves and gives you a Response object.

But the body (the actual data) has not been fully downloaded yet — it's coming in as a stream.

🟡 Step 2: response.json()
The body is still streaming in — the browser reads it in chunks over time.

Since reading a stream is asynchronous (you don’t know exactly when the next chunk will arrive), .json() returns a promise.

Only after all chunks have been read, the browser can assemble them into a string, and then parse that string into a JavaScript object.


Parsing JSON is synchronous — turning a string into a JS object with JSON.parse() is fast and doesn't involve any await.

⏳ But getting the full response body (the string that will be parsed) from the stream is asynchronous, which is why .json() returns a promise.


await fetch() → async (network IO)

await res.json() → async (stream parsing)

data.filter(...) → sync (in-memory JS operation)

## Other Body Parsers
The same idea applies to:

response.text()

response.blob()

response.arrayBuffer()

