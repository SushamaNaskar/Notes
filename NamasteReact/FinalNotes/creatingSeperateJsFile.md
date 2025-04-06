# React CDN
 - App.js

    const heading=React.createElement('h1',{},"hello from react core");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

- index.html
          
    <body>
        <div id="root"></div>

        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
         <script src="./App.js"></script>
    </body>
    

# React packages

- App.js
          
    import React from 'react';
    import ReactDOM from 'react-dom';
          
    const heading=React.createElement('h1',{},"hello from react core");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);

- index.html  
    <body>
         <div id="root"></div>
        <script type="module" src="./App.js"></script>
    </body>


# What is type="module?
The type="module" attribute in HTML is used to specify that a script should be treated as an ES6 module.

This has several important implications:
- Module Scope: Variables declared inside the module are scoped to that module and are not added to the global scope.
- Imports and Exports: You can use 'import' and 'export' statements to include functionality from other modules and export parts of your module to be used elsewhere.
- Deferred Execution:  meaning they will execute after the HTML document has been parsed. This is similar to using the defer attribute with regular scripts.
- Strict Mode: ES6 modules are always executed in strict mode, which helps catch common coding mistakes and "unsafe" actions (like defining global variables).
<!-- - CORS: Modules are subject to the same-origin policy, meaning you can't load modules from different origins without proper CORS headers. -->

note: it allows us to write 
import React from "react";
import ReactDOM from "react-dom";
otherwise throughs error   

## summary
The type="module" means the script should be treated as an ES6 module.

This has several important implications:
- Module Scope: Variables declared inside the module are scoped to that module.
- Imports and Exports: You can use 'import' and 'export' statements
- Deferred Execution:  meaning the script will execute after the HTML document has been parsed.
- Strict Mode: it will be executed in strict mode.

# What is async and defer?

- these are boolean attributes which are used along with script tag to log the external script efficiently into our web page.
- script src=""
    browser is parsing html, it encounters the script tag,it will stop and browser will fetch it from network and execute the script. And then continue html parsing.
- script async src=""
 script network call is made along with html parsing. As soon as the script fetching is completed, the browser will stop html parsing and execute the fetched script. Once the script is execute it will start html parsing.
- script defer
   script network call is made along with html parsing. Once the html parsing in completed all fetched scripts are executed.
