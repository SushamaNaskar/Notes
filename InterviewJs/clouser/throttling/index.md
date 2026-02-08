# Throttling
- Throttling limits the frequency of function calls to a steady rate within a specified time interval.
- Call the function immediately the first time.
- After each call, prevent the function from being called again for a certain time period.
- Once that time period has passed, the function can be called again.

## Use cases :

1. User Interaction: Throttling moderates user actions, like clicks or scrolls, preventing system strain and improving usability.
2. Scrolling: Throttling smooths scrolling, ensuring content loads steadily for seamless browsing.
3. Network Communication: Throttling manages API requests, preventing server strain and streamlining data transfer.
4. Real-time Data Handling: Throttling optimizes data processing, maintaining system stability in dynamic environments.
5. Event-driven Architectures: Throttling balances event flow, enhancing system performance in high-demand scenarios.

# implementation
export default function throttle(func, wait) {
let flag=true;

return function(...args){
  if(flag){
  let context=this;
  func.apply(context,args);
  flag=false;
  setTimeout(()=>{flag=true},wait);
  }
 
  
}
}


# hook
```
import { useRef, useCallback } from 'react';

function useThrottle(callback, delay) {
  const lastCallTime = useRef(0); // Track last call time
  const timeout = useRef(null); // Store timeout for cancellation
  
  // Debounced version of the callback
  const throttledCallback = useCallback((...args) => {
    const now = Date.now();

    // Check if enough time has passed since the last call
    
    if (now - lastCallTime.current >= delay) {
      lastCallTime.current = now;
      callback(...args); // Execute the callback function
    } else if (timeout.current === null) {
      // Set timeout to call after the remaining time
      timeout.current = setTimeout(() => {
        lastCallTime.current = Date.now();
        callback(...args);
        timeout.current = null;
      }, delay - (now - lastCallTime.current));
    }
  }, [callback, delay]);

  // Cleanup function for the timeout
  const cancelThrottle = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  };

  return { throttledCallback, cancelThrottle };
}

export default useThrottle;
```

```

import React, { useState, useEffect } from 'react';
import useThrottle from './useThrottle'; // Import the custom hook

export default function ThrottledScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Create throttled scroll handler
  const { throttledCallback } = useThrottle((e) => {
    setScrollPosition(window.scrollY);
  }, 200); // Throttle scroll event every 200ms

  // Attach event listener to window scroll
  useEffect(() => {
    window.addEventListener('scroll', throttledCallback);

    return () => {
      window.removeEventListener('scroll', throttledCallback);
    };
  }, [throttledCallback]);

  return (
    <div style={{ height: '2000px', padding: '20px' }}>
      <h2>Scroll the page to see throttled scroll position (logged every 200ms)</h2>
      <p>Current Scroll Position: {scrollPosition}</p>
    </div>
  );
}
```



Throttle is very similar, and the idea of keeping the internal tracker and a function that returns a function is the same. The difference is that throttle guarantees to call the callback function regularly, every wait interval, whereas debounce will constantly reset the timer and wait until the end.


The difference will be obvious if we use not an async search example, but an editing field with auto-save functionality: if a user types something in the field, we want to send requests to the backend to save whatever they type “on the fly”, without them pressing the “save” button explicitly. If a user is writing a poem in a field like that really really fast, the “debounced” onChange callback will be triggered only once. And if something breaks while typing, the entire poem will be lost. “Throttled” callback will be triggered periodically, the poem will be regularly saved, and if a disaster occurs, only the last milliseconds of the poem will be lost. Much safer approach.




Build a useThrottleValue hook

🔥 Compare throttle vs debounce with diagrams

🔥 Explain leading vs trailing throttling

🔥 Show React 18 + throttling pitfalls


# window scroll

1. The first call executes immediately, starting the throttle window.
2.Any calls within the delay are deferred and replaced so only the last one survives.
– For example, with a 300 ms delay and events at 100 ms, 150 ms, and 250 ms, the else logic keeps only the 250 ms call.
3. When the delay ends, the last deferred call executes once (trailing).
4. Any call after the delay starts a new cycle and runs immediately via the if.
– So an event at 350 ms runs immediately after the 250 ms call has already executed at 300 ms.

## Event Time,Block Triggered,Action Taken
0ms,if (Leading),Executes Immediately.
100ms,else (Trailing),Schedules call for 300ms.
250ms,else (Trailing),Reschedules call for 300ms (Last one wins).
300ms,setTimeout,Executes 250ms event. Updates lastExecuted.
350ms,else (Trailing),Schedules next call for 600ms (since 300ms was the last finish).

```
import React, {useEffect, useRef, useCallback } from "react";

const useThrottle = (func, delay) => {
  const timerRef = useRef(null);
  const lastRunRef = useRef(0);
  const funcRef = useRef(func);

  useEffect(() => {
    funcRef.current = func;
  }, [func]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return useCallback((...args) => {
    const now = Date.now();
    const elapsed = now - lastRunRef.current;

    if (elapsed >= delay) {
      if (timerRef.current) clearTimeout(timerRef.current);
      lastRunRef.current = now;
      funcRef.current(...args);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        lastRunRef.current = Date.now();
        funcRef.current(...args);
      }, delay - elapsed);
    }
  }, [delay]);
};

export default useThrottle;


function WindowScroll() {
  const handleScroll = useThrottle(() => {
    console.log("Scroll Y:", window.scrollY);
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div style={{ height: "200vh" }}>Scroll me</div>;

}
  ```