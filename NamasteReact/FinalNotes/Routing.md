# SPA
SPA stands for  Single Page Application . It's a type of web application or website that interacts with the user by dynamically rewriting the current web page rather than loading entire new pages from the server. In other words, a single HTML page is loaded initially, and then the content is updated dynamically as the user interacts with the application, typically through JavaScript.

- In SPAs, content is loaded and updated without requiring a full page reload. This is achieved using JavaScript and client-side routing.
- While the initial load of an SPA might take longer as it downloads more JavaScript and assets, subsequent interactions with the application can be faster because only data is exchanged with the server and not entire HTML pages.
- Popular JavaScript frameworks and libraries like React, Angular, and Vue are commonly used to build SPAs.

# Client Side Routing 
- In client-side routing, routing and navigation are managed on the client side.
JavaScript frameworks and libraries, such as React Router (for React applications) or Vue Router (for Vue.js applications), are commonly used to implement clientside routing.

- Client-side routing is often associated with singlepage applications (SPAs), where the initial HTML page is loaded, and subsequent page changes are made by updating the content using JavaScript.

- It allows for faster page transitions since it doesn't require the server to send a new HTML page for each route change.
 <!-- Instead, it updates the DOM and URL dynamically without full page reloads. -->

<!-- - Routing configuration is typically defined in code and managed on the client side, allowing for dynamic and flexible route handling. -->
- SPAs can face challenges with search engine optimization (SEO) because search engine crawlers may not fully index the content that relies heavily on client-side rendering. 


# Service side Routing
- In Server-side routing , routing and navigation are managed on the server. 
- When a user requests a different URL, the server generates and sends a new HTML page for that route.
- Server-side routing tends to be slower in terms of page transitions compared to client-side routing, as it involves full page reloads.
- Server-side routing is inherently more SEO-friendly, as each page is a separate HTML document that can be easily crawled and indexed by search engines.
<!-- - Routing configuration in server-side routing is typically managed on the server, and URLs directly correspond to individual HTML files or routes. -->

