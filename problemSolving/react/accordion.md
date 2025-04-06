Build an accordion component that a displays a list of vertically stacked sections with each containing a title and content snippet

```
import React, {useState} from 'react';

function Accordion({heading,content}){
    const [showContent,setShowContent]=useState(false);
    
    return <div>
        <h1 onClick={()=>setShowContent(!showContent)}>{heading}</h1>
        {showContent &&<div>{content}</div>}
    </div>
}

export default function App() {
    const data=[
        {heading:'HTML',
         content:`The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.`},
        {heading:'CSS',
         content:`Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.`
            
          }]
  return <div>{data?.map((val)=><Accordion heading={val.heading} content={val.content}/>)}</div>
}
```