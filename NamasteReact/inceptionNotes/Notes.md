Inception notes

# What is React? why React is known as 'React'?
- React is a Javascript library. The name 'React' was choosen becuase the library helps delevopers efficiently update the user interface in response to changes in state and data.

# What is library?
- Library is a collections of prewritten code snippets which can be used and reused to perform certain tasks. A particular Javascript library code can be plugged into applicatoin code, which leads to faster development and fewer vulnerabilities to have errors.
ex: React and Jquery

# What is framework?
- Framework provides a basic foundation or structure for a website or an application.
ex:angular

# Similarities between library and framework?
- Frameworks and libraries are code written by third parties to solve regular/ common problems or to optimise performance.

# Difference bwtween library and framework?
- A key difference between the two is Inversion of control. When using a library, the control stays with the developer, who tells the application when to call library functions. When using a framework, the control is reverse, which means the framework tells the developer where code needs to be provided and calls it as it requires.

# Emmet
- Emmet is essential toolkit for web developers. Which allows you to type shortcuts which then expands to full-fledged boiler plate code for writting HTML and CSS.

# What is CDN?
- A Content Delivery Network (CDN) is a distributed network of servers strategically located around the globe to deliver web content to users more efficiently and quickly. CDNs are designed to improve the performance, reliability, and security of websites and applications by serving content from locations closer to the end users.

CDNs cache copies of static content (such as images, videos, CSS, JavaScript files, and HTML pages) on servers distributed across various geographical locations. When a user requests content from a website, the request is routed to the nearest CDN server, reducing latency and improving load times.

 example of cdn provider:
 - Akamai
 - Microsoft Azure CDN
 - Amazon cloud Front

 Example use case:
 When you visit a website that uses a CDN, your browser requests content. Instead of the request traveling all the way to the origin server, it's routed to the nearest CDN edge server. The edge server delivers the cached content, resulting in a faster and more efficient response.

# Cross-Origin Resourse sharing
- Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that allows web applications to request resources (like data or scripts) from a different origin (domain, protocol, or port) than the one from which the application was loaded. This mechanism is essential for enabling secure cross-origin requests and data sharing between websites.

# Difference bwtween React and React DOM
- React handles the component logic, state management, and lifecycle methods, while ReactDOM provides the methods necessary to render those components into the DOM making them visible and interactive on a web page.

# What is difference between react.development.js and react.production.js files via CDN?

- react.development.js 
    This file is intended for use in development environments. It includes additional warnings and debugging information that helps developers identify and fix issues during development. It is larger in size compared to the production version.

- react.production.js
   This file is optimized for production environments. It is smaller in size because it excludes development-specific warnings and debugging tools, focusing instead on performance and efficiency.

# What is async and defer?

- these are boolean attributes which are used along with script tag to log the external script efficiently into our web page.
- script src=""
    browser is parsing html, it encounters the script tag,it will stop and browser will fetch it from network and execute the script. And then continue html parsing.
- script async src=""
   While the html parsing is going on, script with async will be fetched from the network along with html parsing. As soon as the data fetching is completed, the browser will stop html parsing and execute the fetched script. Once the script is execute it will start html parsing.
- script defer
   script network call is made along with html parsing. Once the html parsing in completed all fetched scripts are executed.