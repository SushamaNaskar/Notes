# useCallback():

useCallback() is a React hook that memoizes a function — meaning it remembers the function and only recreates it when its dependencies change.

```
import React, { useState, useCallback } from "react";

const Child = ({ handleClick }) => {
  console.log("Child re-rendered");

  return <button onClick={handleClick}>Click Me!</button>;
};

export default function App() {
  const [count, setCount] = useState(0);

    const handleClick = useCallback(() => { 
     setCount(count + 1);
    }, [count]);

return (
<div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
     <p>Count: {count}</p>
     <Child handleClick={handleClick}>
</div> ); 
}

```

# Example Without useCallback() — Unnecessary Renders

```
import React, { useState } from "react";

const Child = ({ handleClick }) => {
  console.log("🎈 Child re-rendered");
  return <button onClick={handleClick}>Click Me!</button>;
};

export default function App() {
  const [count, setCount] = useState(0);

  // This function gets redefined on every render
  const handleClick = () => console.log("Button clicked!");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />
    </div>
  );
}
```

# What happens here?

- Each time you click "Increment", App re-renders.
- Because handleClick is defined inside App, it's recreated on every render.
- The child component receives a new function prop, so it re-renders too — even though its behavior didn’t change.


#  Key Takeaways:
1️⃣ useCallback() alone — preserves the function’s reference.
2️⃣ React.memo() alone — prevents child re-renders when props stay the same.
3️⃣ Use both together — when a memoized child receives a function prop to fully prevent unnecessary re-renders.