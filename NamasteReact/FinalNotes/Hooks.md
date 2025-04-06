# What is Hook ?
<!-- - Hooks are pre-built functions have underlying logic developed by React developers.  -->
- A Hook is a special function that lets you “hook into” React state and lifecycle features from functional component.

# useState
- The useState() function is a React Hook that is typically used to declare a state variable in a functional component.
- it  returns an array with two elements: the current state value and a function to update that state value .
-  whenever state value updates, React triggers a reconciliation cycle and re-renders the component.

<!-- - useState is a Hook that lets you add React state to function components. -->
<!-- 
- The array destructuring syntax lets us give different names to the state variables we declared by calling useState.

- This means that as soon as the data layer changes, React promptly updates the UI layer. The data layer is always kept in sync with the UI layer.
- To achieve this rapid operation, React employs a reconciliation algorithm, also known as the diffing algorithm or React-Fibre. -->


# What would happen if we do console.log(useState())?
- If you use  console.log(useState())  in a React functional component, it will display the result of calling the useState().
For example:
const [count, setCount] = useState(0);
If we do console.log(useState()), we will see something like this in the console:
[0, Function]

# useEffect
- ‘ useEffect() ’ is a Hook  provided by React.
- it allows to perform side effects in functional components, include data fetching, subscribing to events, manually changing the DOM, and more.
- ‘ useEffect() ' takes two arguments 
1. Callback function that contains the side effect logic.
2. Dependency Array that specifies when the callback function should be run.

 It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
 Effects may also optionally specify how to “clean up” after them by returning a function.

# When will the callback function get called inside the useEffect()?
- Callback function is getting called after the whole component get rendered.

# How will useEffect behave if we don't add a dependency array?
- when we use the  useEffect  hook  without providing a dependency array , the effect will be executed on every render of
the component. This means that the code inside the useEffect will run both after the initial render and after every subsequent
render.

1. if no depencency array=> will run both after the initial render and after every subsequent render
2. empty depencency array [] => the effect will run only after the initial render, and it won't run again on subsequent re-renders.
3. if dedendecies added => , the callback function will be executed once during the initial render of the component and also on re-renders if there is a change in the condition

# useMemo
- cache the result of calculation between re-renders
- heavy calculation  which might cause the page to hang or slow
ex: calculation nth prime, 
- every time react re-renders the component it will call the function

# useCallBack
cache a function defination between re-renders

# useRef
- lets you reference a value that's not needed for re-rendering
- when you want to store some value in a variable, which you don't want to re-render.
ex: input field/ form/ map
- when we create a variable using useRef, it returns a object with currentValue 
const ref=useRef(0)   // ref={currentValue: 0}



