# Create a toggle switch component between "On" and "Off" states.

```
import React, {useState} from 'react';

export default function App() {
const [isOn,setIsOn]=useState(true);
    
 return( 
      <div>
      <button onClick={()=>setIsOn(!isOn)}>{isOn?"on" : 'Off'}</button>
  </div>
  )
}
```

# Build a To-Do List

import React, {useState} from 'react';

export default function App() {
const [todo,setToDo]=useState('');
    const[list, setList]=useState([]);

    const handleChange=(e)=>{
        if(e.target.value){
            setToDo(e.target.value)
        }
    }

    const handleAdd=()=>{
        if(todo){
            setList([...list, {text:todo, isComplete:false} ]);
            setToDo('');
        }
        
    }

    const handleToggle=(index)=>{
        let updatedList=[...list];
        updatedList[index].isComplete=!updatedList[index].isComplete;
        setList(updatedList);
        
    }

     const handleRemove=(index)=>{
           let updatedList=[...list];
         updatedList.splice(index,1);
         setList(updatedList);
        
    }
    
  return (
    <div>
     <input type="text" value={todo} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>

        <div>
             <ul>
            {list?.map((item,index)=>{
        return (
        <li style={{textDecoration: item?.isComplete ? "line-through":'none'}}>
           
            {item?.text}
            <button onClick={()=>{handleToggle(index)}}>Toggle</button>
              <button onClick={()=>{handleRemove(index)}}>Remove</button>
        </li>
            )
    })}
            </ul>
        </div>
    </div>
  );
}


# Build a Dropdown Menu

```
import React, {useState} from 'react';

export default function App() {
const list=['Apple','Mango'];
    const [isOpen,setIsOpen]=useState(false);
    
  return (
    <div>
        <button onClick={()=>{setIsOpen(!isOpen)}}>{isOpen?'Hide':'Show'}</button>
        {isOpen && <ul>{list?.map(val=><li>{val}</li>)}</ul>}
    
    </div>
  );
}
```

Authentication checks if the user credentials are correct and Authorization determines what a user can access
# Fetch Data from an API