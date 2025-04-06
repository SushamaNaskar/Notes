JSX makes developer life easy as we no longer have to write our code using React.createElement()

# JSX
- It stands for Javascript xml. It's a syntax extension for Javascript. Jsx is HTML-like or XML-like syntax.

ex:
const heading=<div>Heading</div>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

# Advantages of JSX
- Makes code readable.
- Shows more useful error and warning.
- It prevents cross-site scripting and sanitizes the data before rendring.

# Cross-site scripting
- If someone gets access to your js code and send some malicious data which then gets displayed on screen. It's called cross-site scripting. It can read cookies, local storage, session storage, info about device and read data.

# If the browser can’t understand JSX how is it still working?
- Use use Babel to convert JSX into the code the browsers understand.

# Babel
- Babel is a compiler/transpiler of JSX
- JavaScript engine cannot understand JSX as it only understands ECMAScript.
- Babel compiles JSX down to React.createElement() calls.



JSX (transpiled by Babel) ⇒ React.createElement() ⇒ ReactElement/JS Object ⇒ render() ⇒ HTML/DOM Element

# Single Line and Multi Line JSX Code
- Single line code:const jsxHeading = <h1>Namaste React</h1>
- Multi-line code:
    const jsxHeading = (
        <div>
        <h1>Namaste React</h1>
        </div>
        )
* If writing JSX in multiple lines then using ‘()’ parenthesis is mandatory. To tell Babel from where JSX is starting and ending.


# How to use JavaScript code inside JSX?
 inside {} parathesis

 ex:
    const number = 10000;

    const HeadingComponent = () => (
        <div id="containter">
          {number}
       </div>
    )

# How to call React Element in JSX?
- We can use ‘{}’ parenthesis.
ex :
   const elem = <span> React Element </span>

    const HeadingComponent = () => (
     <div id="containter">
      {elem}
     </div>
    )

# Is JSX a valid JavaScript?
The answer is yes and no. JSX is not a valid Javascript syntax as it’s not pure HTML or pure JavaScript for a browser to understand. 
JS does not have built-in JSX. The JS engine does not understand JSX because the JS engine understands ECMAScript or ES6+ code.

# Is JSX mandatory for React?
- no, we can use react.createElement()
- but it is not optimal, since the code because hard to decode or understand

# How can I write comments in JSX? 
{/* */}

# <React.Fragment> and <> </>
- do not create extra DOM nodes
- They are particularly useful when you need to return multiple elements from a component's render method without introducing a wrapping element that would disrupt your layout or styling.
- If you need to add keys to fragments (especially useful in lists), you can still do so using the long form <React.Fragment key={someKey}> or the short form <> key={someKey}>.