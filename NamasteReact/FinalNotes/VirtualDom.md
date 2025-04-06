# virtual DOM
<!-- -  are the objects representing the user interface. -->
- The virtual DOM is composed of nested objects where each object represents a DOM node (an element or a component).
<!-- - In React, the virtual DOM is created using React elements, which are JavaScript objects. These React elements are typically created using JSX, which is syntactic sugar for React.createElement. -->

const App = () => (
  <div className="app">
    <h1>Hello, world!</h1>
    <button onClick={() => alert('Clicked!')}>Click me</button>
  </div>
);

{
  "type": "div",
  "props": {
    "className": "app",
    "children": [
      {
        "type": "h1",
        "props": {
          "children": "Hello, world!"
        }
      },
      {
        "type": "button",
        "props": {
          "onClick": "function() { alert('Clicked!'); }",
          "children": "Click me"
        }
      }
    ]
  }
}

# Is the Shadow DOM the same as the Virtual DOM?
No, they are different. The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.

