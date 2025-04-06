Ecma International.

- <b>ECMAScript (ES) is a standard for scripting languages maintained by Ecma International.

It defines the core principles, syntax, and features of JavaScript. In other words, ECMAScript is the specification, while JavaScript is an implementation of that specification.</b>

ECMAScript is simply a description of a language. JavaScript implements ECMAScript. In other words, ECMAScript is the specification, while JavaScript is an implementation of that specification.

In 1997, JavaScript 1.1 was submitted to the European Computer Manufacturers Association (Ecma) as a proposal. <b>Technical Committee #39 (TC39) was assigned to "standardize the
syntax and semantics of a general purpose, cross-platform, vendor-neutral scripting language”</b>

In summary, ECMAScript is the formal standard for the language, while JavaScript is a commonly used implementation that adheres to this standard. 

*  ECMAScript is a standardized scripting language specification, primarily used for client-side scripting on the web. It defines the syntax, semantics, and rules for how JavaScript (and similar languages) should work. In simpler terms, ECMAScript provides the foundation for JavaScript to function across different platforms and environments.

# sripting languague
- A scripting language is designed to manipulate, customize, or automate the behavior of an existing system(like:programming languages, web browser, server etc). Scripting languages are usually interpreted at runtime rather than compiled.

## example:
- JavaScript is the scripting language for client-side web development, allowing developers to manipulate the Document Object Model (DOM) and create interactive web pages.

- Python, for instance, is often used to glue different applications together.

Python can extract data from websites and integrate it with databases, spreadsheets, or other systems. For example, a script using requests and BeautifulSoup can scrape data from a website and then use pandas to convert it into a data frame for further analysis or export to a CSV file.

Python can read data from various sources, process it, and create visualizations. This is useful for combining data from multiple formats and generating insights. Python can read Excel files, databases, or CSVs, process the data, and create charts with matplotlib or seaborn

- Bash: A scripting language used in Unix/Linux systems to automate tasks like file operations, system monitoring, and software installation.

# DOM
The Document Object Model (DOM) is a programming interface that represents the structure of a web document, typically an HTML or XML document, in a tree-like form. The DOM provides a way for programs, such as JavaScript scripts, to access, manipulate, and interact with the content, structure, and style of a web page.


## Key Concepts of the DOM
<ul>
<li>Tree Structure: The DOM represents a document as a tree, where each element, attribute, and piece of text is a node in the tree. The root node represents the entire document, and the tree branches out into elements, text nodes, attribute nodes, comment nodes, etc.</li>
<li>Node Types: The DOM consists of different types of nodes, such as elements (div, p, etc.), text nodes (the content within elements), attribute nodes (like id, class, etc.), and comment nodes (
comment -->
).
</li>
<li>Hierarchy and Relationships: In the DOM tree, nodes have parent-child relationships. An element can contain child elements, and those children can have their own children, creating a hierarchical structure.</li>
<li>Interactivity and Manipulation: The DOM allows scripts, especially JavaScript, to interact with and modify the web page in real-time. This includes adding or removing elements, changing text content, modifying attributes, altering styles, handling events (like clicks), and more.</li>
<li>Cross-Platform Standard: The DOM is standardized by the World Wide Web Consortium (W3C), ensuring consistency across different browsers and environments. This standardization allows developers to write code that should work across a wide range of platforms.</li>
</ul>

 ## Common Operations with the DOM
 <ul>
<li>Selecting Elements: Use methods like document.getElementById, document.querySelector, or document.querySelectorAll to select specific elements in the DOM.</li>
<li>Modifying Elements: Once you have selected an element, you can change its content, attributes, or styles. For example, you can change the text of a paragraph or update the src attribute of an image.</li>
<li>Adding/Removing Elements: You can create new elements and append them to the DOM or remove existing elements. This allows you to dynamically change the structure of the web page.</li>
<li>Handling Events: The DOM allows you to attach event listeners to elements, enabling interactivity. For example, you can listen for click events on a button and execute specific code when the button is clicked
</li>
</ul>

## BOM

The Browser Object Model (BOM) refers to the various objects and features provided by a web browser that allow JavaScript and other scripts to interact with and manipulate the browser environment. While the Document Object Model (DOM) deals with the structure and content of a web document (like HTML or XML), the BOM focuses on the browser itself, encompassing a broader range of functionalities.

 # Key Components of the BOM
The BOM includes several important objects and features that give scripts control over the browser environment. Some of the most common components are:

- window Object: This is the top-level object in the BOM, representing the browser window or frame. It serves as the global scope for JavaScript code running in the browser. It includes a variety of properties and methods that allow interaction with the browser.

## Examples:
- window.location: Provides information about the current URL and allows navigation to different pages.
- window.alert(): Displays an alert box with a specified message.
- window.open(): Opens a new browser window or tab.

##  navigator Object: Represents information about the browser and the user's system environment.

Examples:

- navigator.userAgent: Returns a string identifying the user's browser and operating system.
- navigator.language: Indicates the language preference set in the browser.

## screen Object: Provides information about the user's screen or display.
Examples:

- screen.width and screen.height: Return the width and height of the screen.
- screen.orientation: Gives information about the screen's orientation (landscape or portrait).
## history Object: Represents the browsing history within a browser tab.

Examples:
- history.back(): Navigates back to the previous page in the browsing history.
- history.forward(): Navigates forward in the browsing history.
- history.go(n): Navigates to a specific point in the history based on a numeric index.

## document Object: Technically part of the DOM, but it's also related to the BOM because it allows interaction with the current document loaded in the browser.

# Use Cases for the BOM
The BOM enables various functionalities in web applications, allowing developers to:

- Control Browser Behavior: Manipulate the browser's location, history, or other attributes.
- Access Browser Information: Retrieve information about the user's browser, screen size, language, etc.
- Interact with Browser Events: Handle events like window resizing, focus changes, or scrolling.
- Open and Control New Windows: Create new browser windows or tabs and manage them.