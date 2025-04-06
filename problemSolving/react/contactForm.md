Building forms is a common task in Front End. In this exercise, we will build a basic "Contact Us" form, commonly seen on marketing websites for visitors to ask questions or provide feedback.

Requirements
The form should contain the following elements:
Name field.
Email field.
Message field. Since the message can be long, a <textarea> will be more suitable.
Submit button, Contains the text "Send". Clicking on the submit button submits the form.

The form and submission should be implemented entirely in HTML. Do not use any JavaScript or framework-specific features for this question.
There is no need to do any client-side validation on the fields. Validation will be done on the server side.

Upon submission, POST the form data to https://www.greatfrontend.com/api/questions/contact-form with the following fields in the request body: name, email, message.

If all the form fields are correctly filled up, you will see an alert containing a success message. Congratulations!



```
import React, {useState} from 'react';

export default function App() {
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        const body=JSON.stringify({
                name,
                email,
                message
            });
        
        fetch('https://www.greatfrontend.com/api/questions/contact-form',{
            method:'POST',
             headers: {
        'Content-Type': 'application/json',
      },
            body
        }).then((res)=>res.text()).then((res)=>console.log(res));
    }
    
  return <form onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </div>
      <div>
      <label>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
      <div>
      <label>Message</label>
          <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
          </div>

      <button type="submit">Send</button>
  </form>
}

```