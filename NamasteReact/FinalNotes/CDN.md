# What is CDN?
- A Content Delivery Network (CDN) is a distributed network of servers strategically located around the globe to deliver web content to users more efficiently and quickly. CDNs are designed to improve the performance, reliability, and security of websites and applications by serving content from locations closer to the end users.

CDNs cache copies of static content (such as images, videos, CSS, JavaScript files, and HTML pages) on servers distributed across various geographical locations. When a user requests content from a website, the request is routed to the nearest CDN server, reducing latency and improving load times.

 example of cdn provider:
 - Akamai
 - Microsoft Azure CDN
 - Amazon cloud Front

 Example use case:
 When you visit a website that uses a CDN, your browser requests content. Instead of the request traveling all the way to the origin server, it's routed to the nearest CDN edge server. The edge server delivers the cached content, resulting in a faster and more efficient response.

## summary
- A Content Delivery Network is a distributed network of servers strategically located around the globe to deliver web content to users more efficiently and quickly.
- CDNs cache copies of static content (such as images, videos, CSS, JavaScript files, and HTML pages) on those servers.
- When a user requests content from a website, Instead of the request traveling all the way to the origin server, it's routed to the nearest CDN edge server, resulting in a faster response.
- some cdn providers: Akamai, Microsoft Azure CDN

# React CDN
- For development
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


# Cross-Origin Resourse sharing
- Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that allows web applications to request resources (like data or scripts) from a different origin (domain, protocol, or port) than the one from which the application was loaded. This mechanism is essential for enabling secure cross-origin requests and data sharing between websites.


# cross-origin issue
- cros plugin
- crosproxy.io - add the url before the api url : call the crossproxy.io and crosproxy.io makes the api call using the actual api url and returns the response


## Jest
- By default, web browsers enforce a same-origin policy, which means that a web page can only request resources from the same domain, protocol, and port as the page itself.
- When a web page tries to request resources (like APIs, fonts, or images) from a different origin, the browser uses CORS to check if the other domain allows such requests.


1. Browser Sends a Request
2. Server Responds with CORS Headers
3. Browser Checks Headers to decide whether it should allow the web page to access the response.


<!-- Key Points of CORS

1. Same-Origin Policy:
By default, web browsers enforce a same-origin policy, which means that a web page can only request resources from the same domain, protocol, and port as the page itself.

2. Cross-Origin Requests:
When a web page tries to request resources (like APIs, fonts, or images) from a different origin, the browser uses CORS to check if the other domain allows such requests.

3. CORS Headers:
The server hosting the resource must include specific HTTP headers to indicate that it allows cross-origin requests.

## Simplified Explanation

Imagine you have a website hosted at https://example.com and you want to fetch data from an API hosted at https://api.anotherdomain.com. Here’s how CORS works:

1. Browser Sends a Request: Your website makes a request to https://api.anotherdomain.com.
2. Server Responds with CORS Headers: The server at https://api.anotherdomain.com includes special headers in its response to tell the browser if it allows the request from https://example.com.
3. Browser Checks Headers: The browser checks these headers to decide whether it should allow the web page to access the response.

## Example
- Request from https://example.com to https://api.anotherdomain.com:
   Host: api.anotherdomain.com
   Origin: https://example.com

- Response from https://api.anotherdomain.com:
   HTTP/1.1 200 OK
   Access-Control-Allow-Origin: https://example.com
   Access-Control-Allow-Methods: GET, POST
   Access-Control-Allow-Headers: Content-Type

   {
    "data": "Some data"
   }   

In this response:

Access-Control-Allow-Origin: https://example.com tells the browser that https://example.com is allowed to access the resource.
The browser checks this header and allows the web page to access the data.

# Key CORS Headers
1. Access-Control-Allow-Origin: Specifies which origins are allowed to access the resource. For example, Access-Control-Allow-Origin: https://example.com allows https://example.com to access the resource.

2. Access-Control-Allow-Methods: Lists the HTTP methods (GET, POST, etc.) that the server allows. For example, Access-Control-Allow-Methods: GET, POST.

3. ccess-Control-Allow-Headers: Lists the HTTP headers that the server allows. For example, Access-Control-Allow-Headers: Content-Type.

4. Access-Control-Allow-Credentials: Indicates whether the request can include user credentials (like cookies). For example, Access-Control-Allow-Credentials: true. -->



# crossorigin in script tag
- When you use the crossorigin attribute without a value, it defaults to anonymous.(crossorigin="anonymous")
- indicating that the browser should fetch the resource without including credentials like cookies or authorization headers.

# Will this script make http request if crossorigin is not added?
- If the script is being requested from a different origin, the request will still be made. The absence of the crossorigin attribute means that the request will not include credentials.
- Using crossorigin is essential only if you need to handle credentials or specific CORS policies for cross-origin requests.