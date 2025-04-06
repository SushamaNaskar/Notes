<!-- # Components
- js functions that returns react elements(js object). -->

# Component instance
- Main Component (Component Definition): The blueprint or definition of the component. This is where you define what the component should look like and how it should behave.

ex: 
```
import React, { useState } from 'react';

const MyFunctionComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyFunctionComponent;
```

Component Instance -
A component instance is a specific occurrence of a component created by React when rendering your application. This instance holds the component's state, lifecycle methods, and properties. Each instance can have its own state and props, making it reusable in different parts of your application.

You can reuse a component by including it multiple times in your JSX, possibly with different props. Each usage will create a new instance of the component.

ex: 
```
import React from 'react';
import MyFunctionComponent from './MyFunctionComponent';

const App = () => {
  return (
    <div>
      <h1>First Instance</h1>
      <MyFunctionComponent />
      
      <h1>Second Instance</h1>
      <MyFunctionComponent />
    </div>
  );
};

export default App;
```

<!-- # react elements
- js objects -->

# DOM elements
a DOM element refers to an element in the Document Object Model (DOM) that corresponds to a tag in your HTML, such as <div>, <span>, <button>, etc.
In React, you create DOM elements using JSX, a syntax extension that looks similar to HTML. JSX allows you to write elements directly within your JavaScript code, which React then translates into actual DOM elements.

# virtual DOM
- The virtual DOM is composed of nested objects where each object represents a DOM node (an element or a component).
- In React, the virtual DOM is created using React elements, which are JavaScript objects. These React elements are typically created using JSX, which is syntactic sugar for React.createElement.

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

# How React Uses the Virtual DOM
Initial Render:
- When the component is first rendered, React creates a virtual DOM tree that represents the initial state of the UI.
- This virtual DOM tree is then used to generate the real DOM nodes, which are inserted into the actual DOM.

Updates:
- When the state or props of a component change, React creates a new virtual DOM tree that represents the updated state of the UI.
- React then compares this new virtual DOM tree with the previous virtual DOM tree using a process called reconciliation.

# Reconciliation
- During reconciliation, React identifies the differences (or "diffs") between the new and old virtual DOM trees.
- React calculates the minimal set of changes needed to update the real DOM to match the new virtual DOM.
<!-- - These changes are then applied to the actual DOM, minimizing the number of direct DOM manipulations and improving performance. -->

# Fiber tree
- It's an internal reimplementation of React's core algorithm for rendering and reconciliation.

The Fiber architecture is an internal algorithm used by React starting from version 16 to improve its rendering process. It introduces the concept of a "Fiber tree," which represents a new way of managing and updating the component tree. 
Fiber provides a more granular and flexible approach to updating the DOM, making React's rendering engine more efficient and capable of handling complex UI updates smoothly.

# Relationship Between Virtual DOM and Fiber
- Virtual DOM is the conceptual model of the DOM maintained by React.
- Fiber is the algorithmic implementation that manages how React performs updates and interacts with the virtual DOM.
Fiber is a specific implementation of React's reconciliation algorithm, providing mechanisms for efficient rendering, prioritization, and scheduling of updates.

Together, they enable React to provide a performant and responsive user interface by optimizing how components are rendered and updated in the browser.

# Diffing
- "Diffing" refers to the process of determining the differences between two sets of data structures. In the context of React, diffing primarily refers to how React compares the previous virtual DOM (before an update) with the new virtual DOM (after an update) to identify what has changed

 React performs a "diffing" algorithm (often referred to as reconciliation) to compare the new virtual DOM tree with the previous one.

# Key Props
 React uses keys (if provided) to efficiently match elements between different versions of the virtual DOM, improving the accuracy and efficiency of the diffing process.

# render phase
During the render phase, React decides how to update the user interface based on changes in state or props.
React starts rendering at the root component and recursively renders child components down the component tree.

# commit phase
- After completing the render phase and reconciliation, React updates the actual DOM to reflect the changes.

# Browser paint
-In web development, "paint" refers to the process of the browser rendering elements on the screen based on the styles and layout defined in the document.


# Flow of React
1. Render phase => 
- Initial rendering - creates virtual Dom.
- Re-rendering is similar, but with one key difference. It does not go through every component to check for updates. Instead, when your component state or props update React uses a flag to mark that component. Basically saying that this component has been marked for an update

2. virtual DOM => react elements/ js objects (starting from the root compoenent)
3. When the state or props of a component change, React creates a new virtual DOM
4. Reconciliation => During reconciliation, React identifies the differences (or "diffs") between the new and old virtual DOM trees.

- React's diffing algorithm compares the previous virtual DOM with the new virtual DOM to determine changes.
- Based on the results of diffing, Fiber tree manages rendering priorities using a scheduling algorithm, ensuring that high-priority updates (e.g., user interactions, animations) are processed promptly while deferring lower-priority updates to optimize performance.

5. Commit phase => After completing the render phase and reconciliation, React updates the actual DOM
6. Browser paint => The browser rendering elements on the screen based on the styles and layout defined in the document.



<!-- While the diffing algorithm operates on the virtual DOM to compute updates, the Fiber tree manages the execution and scheduling of these updates.

The Fiber tree helps React prioritize and manage the order of updates, leveraging the diffing results to efficiently traverse and apply changes across the component tree. -->

<!-- - "diffing" primarily refers to how React compares the previous virtual DOM (before an update) with the new virtual DOM (after an update) to identify what has changed, it performs a "diffing" algorithm (often referred to as reconciliation) to compare the new virtual DOM tree with the previous one.

- Fiber (the algorithm) operates on the Fiber tree (data structure). It uses the fiber tree to manage the component hierarchy, update priorities, and perform reconciliation.

Reconciliation ensures that the DOM reflects the latest state by using diffing to identify changes.
Fiber enhances this process by providing a more flexible and efficient way to manage updates and rendering, leveraging optimized diffing to improve performance. -->



# sort
Render Phase: Creates virtual DOM based on current state and props.
Reconciliation: Compares previous and current virtual DOM, identifies changes.
Commit Phase: Updates actual DOM based on reconciliation results.
Browser Paint: Renders updated UI on the screen.