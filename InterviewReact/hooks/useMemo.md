# useMemo
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
- Memoizes the result of a computation — caches the output of an expensive calculation or non-primitive value (e.g., objects, arrays) and recalculates only when dependencies change.

# When to use useMemo() ALONE
- Use it inside a component when:
1. You don’t need to memoize the entire component, just a value.
2. You have an expensive computation (e.g., filtering a large list, heavy calculations).
3. You create objects or arrays that are passed as props to child components — and you want to keep the same reference between renders.

```
import React, { useState, useMemo } from "react";

export default function App() {
  const [count, setCount] = useState(0);
    const [val,setVal]=useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [val]);
    
const handleIncrement=()=>{
    let currentCount=count+1;
   
    
    if(currentCount%2==0){
        setVal(val+1);
    }
     setCount(currentCount);
}
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Expensive Value: {expensiveValue}</h2>
      <button onClick={() =>handleIncrement() }>Increment</button>
    </div>
  );
}

```


# When to combine useMemo() + React.memo()
Use them together when:

- You pass objects, arrays, or functions as props to a memoized child.
- React.memo() compares props shallowly — objects/arrays/functions get new references on each render and trigger re-renders.
- useMemo() stabilizes the reference so that React.memo() works properly.