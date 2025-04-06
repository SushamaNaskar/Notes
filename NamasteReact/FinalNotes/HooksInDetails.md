# rules for hooks
- Only Call Hooks at the Top Level: Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns.By following this rule, you ensure that Hooks are called in the same order each time a component renders. That’s what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.

- Only Call Hooks from React Functions : Don’t call Hooks from regular JavaScript functions. Instead, you can:

✅ Call Hooks from React function components.
✅ Call Hooks from custom Hooks (we’ll learn about them on the next page).
By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.

- We released an ESLint plugin called eslint-plugin-react-hooks that enforces these two rules. 

# useState()
-  Normally, variables “disappear” when the function exits but state variables are preserved by React.
- The only argument to the useState() Hook is the initial state.
- unlike this.setState in a class, updating a state variable always replaces it instead of merging it.

# What Do Square Brackets Mean?
This JavaScript syntax is called “array destructuring”. 

  const [fruit, setFruit] = useState('banana');

It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

var fruitStateVariable = useState('banana'); // Returns a pair
  var fruit = fruitStateVariable[0]; // First item in a pair
  var setFruit = fruitStateVariable[1]; // Second item in a pair


# useEffect
- you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

# Building Your Own Hooks
Hooks are a way to reuse stateful logic, not state itself. In fact, each call to a Hook has a completely isolated state — so you can even use the same custom Hook twice in one component.