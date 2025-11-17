# Debouncing
- Debouncing delays function execution util after a period of inactivity.
- It consolidate multiple rapid functions calls into a single call by cancelling all other previous calls.

# useCase
1. Search Input: Debouncing limits API requests by triggering search only after user pauses typing.
2. Button Clicks: Debouncing ensures actions are triggered only once, even with rapid clicks.
3. Scrolling Events: Debouncing reduces data fetching by loading content after scroll completion.
4. Window Resize: Debouncing window resize delays re-rendering until resize completion.
5. Mouse Movement: Debouncing triggers actions like hover effects after brief mouse inactivity.

function printValue(val) {
  console.log(val);
}

// Debounce function using closure
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Create a debounced version of printValue
const debouncedPrint = debounce(printValue, 300);

// Test calls (only the last one prints!)
debouncedPrint(1);
debouncedPrint(2);
debouncedPrint(3);

# using React: scenarions where we can apply debouncing


## Search input
- only call an api, if the difference between two keypress event is greater than 300 ms

```
import React, {useState,useEffect} from 'react';

export default function useDebounce(value, delay) {
const [debouncedValue,setDebouncedValue]=useState(value);

useEffect(()=>{
  const timer=setTimeout(()=>{setDebouncedValue(value)},delay);

  return()=>clearTimeout(timer);

},[value,delay])

return debouncedValue;
}

export default function Component() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 1000);

  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>
    </div>
  );
}
```

## Window Resize Event
- The UI (and any heavy logic) only updates after the user stops resizing for 300ms.

```
import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
}


export default function App() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Debounced value of window size
  const debouncedSize = useDebounce(size, 300);

  useEffect(() => {
    function handleResize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {debouncedSize.width}px</p>
      <p>Height: {debouncedSize.height}px</p>
    </div>
  );
}

```


# Button Clicks
- The callback (handleClick) fires only when the user stops clicking for 1 second.

```
import { useRef } from "react";

export function useDebounceCallback(callback, delay = 300) {
  const timer = useRef(null);

  function debouncedFn(...args) {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  return debouncedFn;
}


export default function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Create a debounced click handler
  const debouncedClick = useDebounceCallback(handleClick, 1000);

  return (
    <div>
      <h2>Debounced Button Click</h2>
      <button onClick={debouncedClick}>
        Click Me (Debounced)
      </button>
    </div>
  );
}

```


## Debounced Scroll Event
- Use debounce when you want to run a scroll handler after the user stops scrolling.

```
import { useState, useEffect } from "react";

export function useDebounce(value, delay = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export default function App() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const debouncedScroll = useDebounce(scrollY, 200);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ height: "200vh", padding: "20px" }}>
      <h2>Debounced Scroll Position</h2>
      <p>Scroll Y: {debouncedScroll}px</p>
    </div>
  );
}
```