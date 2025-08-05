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

# using React
import {useState,useEffect} from "react";
export default function App() {
    const [value,setValue]=useState('');

   useEffect(()=>{
       const getData=setTimeout(()=>{console.log(value)},300)

       return ()=>{
           clearTimeout(getData);
           console.log('clear')
       }
   },[value])
    
    const handleChange=(event)=>{
        setValue(event.target.value);
    }
  return <input value={value} onChange={handleChange}/>
}


# scenarions where we can apply debouncing
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