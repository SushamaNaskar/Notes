# Create a simple counter component that increases or decreases the count when clicking buttons.

```
import React, {useState} from 'react';

export default function App() {
const [count,setCount]=useState(0);
    
 return( 
      <div>
      <div>{count}</div>
      <button onClick={()=>setCount(prev=>prev+1)}>Increment</button>
      <button onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
  </div>
  )
}
```