# Create a Real-Time Search Filter / Create a Search Bar
import React, {useState,useEffect} from 'react';

export default function App() {
  const [query,setQuery]=useState('');
    const items=["Apple","Banana","cake"];

    const handleOnChange=(e)=>{
        setQuery(e.target.value);
    }

const filterItems=items.filter((item)=>item.toLowerCase().includes(query.toLowerCase()))
 
  return <div>
     <input type="text" value={query} onChange={handleOnChange} placeHolder="search..."/>
      <div>{filterItems?.map((val)=><div>{val}</div>)}</div>
  </div>
}

#  How do you create a controlled component for an input field?

import React, {useState,useEffect} from 'react';

export default function App() {
  const [value,setValue]=useState('');

    const handleOnChange=(e)=>{
        setValue(e.target.value);
    }

    
  return <div>
     <input type="text" value={value} onChange={handleOnChange}/>
      <div>{value}</div>
  </div>
}

# Create a custom hook to manage the form input state.

import React, { useState } from 'react';

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
};

const CustomForm = () => {
    const nameInput = useFormInput('');

    return (
        <form>
            <input type="text" {...nameInput} placeholder="Name" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CustomForm;


# How do you implement debouncing for an input field

import React from 'react';

import React, { useState, useEffect } from 'react';

const DebouncedInput = () => {
    const [value, setValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return (
        <div>
            <input 
                type="text" 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                placeholder="Type something..." 
            />
            <p>Debounced Value: {debouncedValue}</p>
        </div>
    );
};

export default DebouncedInput;


# Write a component that uses local storage to save form data.

import React, { useState, useEffect } from 'react';

const LocalStorageForm = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        const savedName = localStorage.getItem('name');
        if (savedName) {
            setName(savedName);
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('name', name);
        alert('Name saved to local storage!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name" 
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default LocalStorageForm;

# Create a component that demonstrates the use of refs.

import React, { useRef } from 'react';

const RefExample = () => {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="Focus me!" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
};

export default RefExample;

# Create a simple form with validation for an email input.

# Build a To-Do List
#  Implement a Dynamic Form with Field Arrays