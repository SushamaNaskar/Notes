# useRef

```
import React, { useRef, useCallback } from "react";

function MyInput({ ref }) {
    console.log('re-render')
  return <input ref={ref} />;
}
export default function App() {
 const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

```

# Best practices for DOM manipulation with refs

Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose.