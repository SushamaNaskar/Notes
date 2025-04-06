# Creating and rendering a heading tag JavaScript vs react core
- JavaScript
       const heading=document.createElement('h1');
       heading.innerHTML='hello from js';
       const rootDiv=document.getElementById('root');
       rootDiv.appendChild(heading);
- React core
      const heading=React.createElement('h1',{},"hello from react core");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);

# What is <div id="root"></div> or “root” DOM node
- When we create a DOM node with id "root" using ReactDOM.createRoot(), it is called "root" DOM node, because everything inside it will be managed by React DOM.

# Difference bwtween React and React DOM
- React handles the component logic, state management, and lifecycle methods, while ReactDOM provides the methods necessary to render those components into the DOM making them visible and interactive on a web page.

# React.createElements()
- React.createElements() creates a react element.
- it takes tag type, attribues and child as arguments.

# What is react element?
- React elements are plain objects, describing what we want to appear on the screen.
- React elements are immutable. Once you create an element, you can’t change its children or attributes.
<!-- - Elements are the smallest building blocks of React apps.
- React DOM takes care of updating the DOM to match the React elements. -->


const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);

const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};

# render()
- render() transforms react elements to DOM elements, which the browser understand.


# Difference between React Element and React Component
- While elements are the smallest building blocks, components are larger units that can contain multiple elements and have their own state and lifecycle methods.

# conditional rendering
- Conditional rendering allows to render different elements or components based on certain conditions.