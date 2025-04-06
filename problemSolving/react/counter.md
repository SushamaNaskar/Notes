Build a simple counter that increments whenever a button is clicked

```
import React, {useState} from 'react';
export default function App() {
    const [count,setCount]=useState(0);

  return <div>
  {count}
  <button onClick={()=>setCount(count+1)}>increment</button>
  </div>
}
```
