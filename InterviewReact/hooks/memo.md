# Memo
- By default, when a component re-renders, React re-renders all of its children recursively.
- React.memo() Memoizes the entire component — skips re-rendering the component unless its props change (shallow comparison).

```
import React, { useState, memo } from "react";

const Child = ({ title }) => {
  console.log("Child re-rendered");

  return <h2>{title}</h2>;
};

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child title="I'm a memoized Child!" />
    </div>
  );
}

```

- whenever we click on the increment button the Child component re-renders.
- This is fine for components that don’t require much calculation to re-render. 
- But if you verified a re-render is slow, you can tell Child component to skip re-rendering when its props are the same as on last render by wrapping it in memo:

```
import React, { useState, memo } from "react";

// Child component — memoized to prevent unnecessary re-renders
const Child = memo(({ title }) => {
  console.log("Child re-rendered");

  return <h2>{title}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child title="I'm a memoized Child!" />
    </div>
  );
}
```
- Child is wrapped with React.memo() This memoizes the component and prevents it from re-rendering unless its props change.
- The prop title="I'm a memoized Child!" is a static string. Since this string never changes, Child doesn’t re-render when count updates even though App re-renders.

# Key takeaway:
- React.memo() works perfectly on its own for primitives like strings, numbers, or booleans, as they’re compared by value.
- For objects, arrays, or functions (which are compared by reference), you’ll still need useMemo() or useCallback() to prevent re-renders.


# example with useMemo

```
import React, { useState, memo } from "react";

const Child = memo(({ list }) => {
  console.log("Child re-rendered");

  return <ul>{list?.map((val) => <li key={val}>{val}</li>)}</ul>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const list = ["mango", "apple"];

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child list={list} />
    </div>
  );
}
```

- whenever we click on increment, list gets recreated on every render because it’s a new array reference each time.
- Since React.memo() does a shallow comparison (it compares references, not content), the new array triggers Child to re-render.
- If you want to avoid unnecessary re-renders, you can memoize the array using useMemo():

```
import React, { useState, memo, useMemo } from "react";

const Child = memo(({ list }) => {
  console.log("Child re-rendered");
  return <ul>{list?.map((val) => <li key={val}>{val}</li>)}</ul>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const list = useMemo(() => ["mango", "apple"], []); // memoized list

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child list={list} />
    </div>
  );
}
```

# When to combine useMemo() + React.memo()
Use them together when:

- You pass objects, arrays as props to a memoized child.
- React.memo() compares props shallowly — objects/arrays/functions get new references on each render and trigger re-renders.
- useMemo() stabilizes the reference so that React.memo() works properly.

# When to combine useCallback() + React.memo()
Use them together when:

- For functions as props, use useCallback() (it works like useMemo() but for functions).