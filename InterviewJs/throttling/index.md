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