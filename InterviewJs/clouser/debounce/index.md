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
- return will run

1. When value or delay changes (before running a new effect)
2. When the component unmounts

```
import React, {useState,useEffect,useMemo} from 'react';

export default function useDebounce(value, delay) {
const [debouncedValue,setDebouncedValue]=useState(value);

useEffect(()=>{
  const timer=setTimeout(()=>{setDebouncedValue(value)},delay);

  return()=>clearTimeout(timer);

},[value,delay])

return debouncedValue;
}

const FRUITS = [
  "Apple", "Banana", "Blueberry", "Cherry", "Dragonfruit", 
  "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi"
];

export default function Component() {
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword, 1000);

  useEffect(()=>{
        if(debouncedKeyword){
            console.log("call api", debouncedKeyword)
        }
    },[debouncedKeyword])

    const filteredFruits = useMemo(() => {

      if (!keyword) return FRUITS;

    return FRUITS.filter((fruit) =>
      fruit.toLowerCase().includes(debouncedKeyword.toLowerCase())
    );
  }, [debouncedKeyword]);

 const isLoaded = keyword === debounceVal;
  return (
    <div>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <p>Debounced keyword: {debouncedKeyword}</p>

       {!isLoaded && <div> ...loading</div>}

     {isLoaded && <ul style={{ marginTop: "20px" }}>
        {filteredFruits.length > 0 ? (
          filteredFruits.map((fruit) => <li key={fruit}>{fruit}</li>)
        ) : (
          <li>No fruits found.</li>
        )}
      </ul>}
    </div>
  );
}
```

### How the “last timer” is cleared

- Before running an effect again, React always runs the cleanup from the previous effect.
- Let’s say the user types quickly: a → ab → abc

#### Timeline

- Typing a

1. useEffect runs
2. timer1 is created (setTimeout)
3. cleanup registered: clearTimeout(timer1)

- Typing ab (before 3s)

1. val changes → effect re-runs
2. React first calls cleanup: clearTimeout(timer1);
3. then creates timer2

- Typing abc

1. cleanup runs again : clearTimeout(timer2);
2. creates timer3
3. User stops typing

- no more re-renders
- after 3 seconds → timer3 fires : setDebounceVal("abc")
- Only the last timer survives

### Why this works without useRef

- Each render creates its own timer variable
- The cleanup function closes over that exact timer
- return () => clearTimeout(timer);
- So React knows exactly which timer to kill — the one created in the previous render.
- React guarantees this order


## Button Clicks

- The callback (handleClick) fires only when the user stops clicking for 1 second.
- Only use useRef when building a debounced function callback, not a debounced value.

```
import { useRef, useEffect, useCallback } from "react";

function useDebouncedCallback(callback, delay) {
  const timerRef = useRef(null);
  const callbackRef = useRef(callback);

  // keep latest callback
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // cleanup on unmount
  useEffect(() => {
  return () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };
}, []);

  const debouncedFn = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  }, [delay]);

  return debouncedFn;
}

export default function DebouncedButton() {
  const [count, setCount] = useState(0);

  const handleClick = useDebouncedCallback(() => {
    setCount((prev) => prev + 1);
    console.log("Button clicked");
  }, 1000);

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      <p>Count: {count}</p>
    </div>
  );
}

```

## why callbackRef is important
- if we dont use callbackRef and add callbackFn as a dependency in useCallback
```
  const debouncedFn = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callbackRef.current();
    }, delay);
  }, [callbackFn,delay]);

```
- In React, functions defined inside a component are recreated on every render. If you pass a raw arrow function to a hook, it receives a new memory reference every time the component (or its parent) updates.
- If your useCallback or useEffect depends on that unstable callback, the hook will "reset" on every render. This often triggers a cleanup that kills the active timer, preventing the debounce from ever finishing if the UI is busy.
- By using callbackRef, you separate the timer logic from the execution logic. The timer remains stable and "alive" across renders, while the Ref acts as a portal to always grab the most recent version of your function.
- Even if the timer started 500ms ago, using callbackRef.current() ensures that when the function finally fires, it has access to the latest state and props rather than a "frozen" snapshot from a previous render.

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

```
import { useState, useEffect, useRef } from "react";

export function useWindowSize(delay = 300) {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const timerRef = useRef(null);

  useEffect(() => {
    // 1. Guard for SSR (Server Side Rendering) environments
    if (typeof window === "undefined") return;

    function handleResize() {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    }

    window.addEventListener("resize", handleResize);

    // 3. Cleanup: Remove listener and clear any pending timers on unmount
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]); // Only re-run if the debounce delay changes

  return size;
}

export default function WindowResize() {
  // Use the hook to get the debounced size
  const { width, height } = useWindowSize(3000);

  useEffect(() => {
    console.log("call api", width, height);
  }, [width, height]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Optimized Window Size</h2>
      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
      <p style={{ color: "#666" }}>
        (Resize your browser window to see the debounce in action)
      </p>
    </div>
  );
}

```

## window Scroll using useRef

```
import { useState, useEffect, useRef } from "react";

export function useWindowSize(delay = 300) {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const timerRef = useRef(null);

  useEffect(() => {
    // 1. Guard for SSR (Server Side Rendering) environments
    if (typeof window === "undefined") return;

    function handleResize() {
      
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    }

    window.addEventListener("resize", handleResize);

    // 3. Cleanup: Remove listener and clear any pending timers on unmount
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("resize", handleResize);
    };
  }, [delay]); // Only re-run if the debounce delay changes

  return size;
}

export default function App() {
  // Use the hook to get the debounced size
  const { width, height } = useWindowSize(300);

    useEffect(()=>{
    console.log("call api");
  },[width,height])

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Optimized Window Size</h2>
      <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
      <p style={{ color: "#666" }}>
        (Resize your browser window to see the debounce in action)
      </p>
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

## scroll using useRef

```
function useDebouncedScroll(delay = 200) {
  const timerRef = useRef(null);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setScrollY(window.scrollY);
      }, delay);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, [delay]);

  return scrollY;
}

const scrollY = useDebouncedScroll(200);

```

# notes

- Only use useRef when building a debounced function callback, not a debounced value.
