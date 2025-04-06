# State
- state refers to a built-in object used to hold data or information about the component's current situation. 
<!-- State can change over time, and whenever it does, the component re-renders to reflect the new state. -->

- State allows React components to change their output over time in response to user actions, network responses or other events.

<!-- In class-based components, state is an instance property of the component class. -->
- In class-based components, we initialize state variables in the constructor and update it using the setState method.
- In functional components, state is managed using the useState hook, which was introduced in React 16.8. The useState hook returns a state variable and a function to update that state.

# state variable
- A state variable is a variable that holds state data for a React component.
- In class-based components, state variables are properties of the state object.
- In functional components, state variables are created using the useState hook.

# Why do we need State variable?
<!-- - to use state management that automatically refreshes the UI when data changes.  -->
- whenever the state value changes, React re-renders the component to reflect the new state. It is essential for managing dynamic data and ensuring that the user interface stays in sync with the application's current state.


- # creating and updating state in class based component

import React from "react";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:1,
        }
    }

    render(){
        const {value}= this.props;
        const {count,count2}=this.state;
      return(<div>{count}</div>)
    }
}

# this.setState() or state update

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:1,
        }
    }

    render(){
        const {value}= this.props;
        const {count,count2}=this.state;
      return(
        <div>
              <h1> {count}</h1>
              <button onClick={()=>{
                 this.setState({
                     count:this.state.count+1;
                 })
              }}> Count Increment</h1>

      </div>
      )
    }
}

# Creating and updating state in functional component

# state hooks
- It lets us add local state to React functional components. ex: useState()

# useState
- The useState() function is a React Hook that is typically used to declare a state variable in a function component.
- it  returns an array with two elements: the current state value and a function to update that state value .
-  whenever state value updates, React triggers a reconciliation cycle and re-renders the component.

const [count, setCount] = useState(0);

# What is lifting the state up ?
- Lifting state up refers to the practice of moving the state from a lower-level (child) component to a higher-level (parent or common ancestor) component in the component tree .
- This pattern is  useful in larger React applications where multiple components need access to the same data or where the state needs to be synchronized across different parts of the application.


# controlled and uncontrolled component
- controlled components refer to the components where the state and behaviors are controlled by Parent components 
- Uncontrolled components are the ones having control of their own state and manage the behaviors themselves.


# State pitfall
- A state pitfall is a common mistake or unexpected behavior that happens when managing state in React components. These issues often arise due to misunderstandings about how useState() works — especially with asynchronous updates, immutability, and re-renders.

- A state pitfall happens when you run into unexpected behavior while managing state in React — mostly because React handles state updates asynchronously and creates a new reference each time state changes.

# Why State Pitfalls Happen
1. React doesn’t update state immediately — it schedules updates and batches them to improve performance.
2. Each state update triggers a re-render — React creates a new version (reference) of the state, but you can’t access it immediately inside the same function.
3. Direct mutations don’t work — React compares the old and new state by reference (not content), so modifying the existing state doesn’t trigger a re-render.

```
import React, { useRef, useEffect ,useState} from "react";


export default function App() {
 const [count,setCount]=useState(0);
const handleIncrement=()=>{
console.log('count',count)
    setCount(count+1);
    setCount(count+1);
}
  return (
    <>
        {count}
        <button onClick={()=>handleIncrement()}>increment</button>
    </>
  );
}

```
- Both setCount(count + 1) calls capture the same old value of count (from the first render), not the updated one.
- React batches state updates from the same event to optimize performance — so multiple calls using the old state merge into one update.
- After both calls run, React only applies the last one — which still uses the original count value.

```
import React, { useRef, useEffect ,useState} from "react";


export default function App() {
 const [count,setCount]=useState(0);
const handleIncrement=()=>{
console.log('count',count)
    setCount((prev)=>prev+1);
    setCount((prev)=>prev+1);
}
  return (
    <>
        {count}
        <button onClick={()=>handleIncrement()}>increment</button>
    </>
  );
}
```