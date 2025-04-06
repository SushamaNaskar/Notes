# BOM
- The Browser Object Model (BOM) is a browser-specific convention referring to all the objects exposed by the web browser.
- The Browser Object Model (BOM) is used to interact with the browser.
- A window object is created automatically by the browser itself.
- Java Script’s window.screen object contains information about the user’s screen.

- <b>The default object of browser is window </b>means you can call all the functions of window by specifying window or directly. For example:

```
window.alert("hello javatpoint");  
```
is same as:
```
alert("hello javatpoint");  
```
- You can use a lot of properties (other objects) defined underneath the window object like document, history, screen, navigator, location, innerHeight, innerWidth.

# note:
Note: The document object represents an html document. It forms DOM (Document Object Model).

# DOM
- The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
- The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
- A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated.
-  As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.


Host objects
-  Objects that exist in the browser environment, such as those in the Browser Object Model (BOM) and Document Object Model (DOM), are considered host objects because they are provided and defined by the host implementation. 