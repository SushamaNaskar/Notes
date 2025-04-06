import React, {createContext,useContext} from 'react';

//creating a context with default value
const ThemeContext=createContext({theme:'light',changeTheme:()=>{}})


//creating a component as a context provider
const ThemeProvider=({children})=>{
    const [theme,setTheme]=useState('light');

    const changeTheme=()=>{
        setTheme((prev)=>prev==='light'?'dark':'light);
    }
    return(
        <ThemeContext.Provider value={{theme, changeTheme}}>
         {children}
        </ThemeContext.Provider>
    )
}


//component that consums the context data
const ThemeConsumer = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <nav>
      {theme ? (
        <button onClick={changeTheme}></button>
      ) : (
        <button onClick={changeTheme}>theme</button>
      )}
    </nav>
  );
};



import React from "react";
import ThemeProvider from "./ThemeProvider";
import ThemeConsumer from "./ThemeConsumer";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeConsumer />
    </ThemeProvider>
  );
};

export default App;