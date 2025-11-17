# What are Components?
- Components let us split the UI into independent, reusable pieces, and think about each piece in isolation.

# There are 2 types of components:
1. Class-based Components
2. Functional Components

# What is a React Functional Components?
- Functional Components are just like a JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- Always name React Functional Component with Capital Letters otherwise you will confuse it with normal function

```
ex: 

const HeadingComponent1 = () => (
 <h1>Namaste</h1>
)
```

# Class-based Components
These are ES6 classes that extend the component class (React.Component or React.PureComponent) of the React library . They have a render() method where you define the structure of your component's UI using JSX.

# Component instance
- Main Component (Component Definition): The blueprint or definition of the component. This is where you define what the component should look like and how it should behave.
- A component instance is a specific occurrence of a class based component created by React when rendering your application. Each instance can have its own state and props, making it reusable in different parts of your application.

# Why comopent name should start with Capital letter?
- To differentiate user-defined components from built-in HTML elements. This distinction helps React to identify whether it should treat the tag as a component or as a standard HTML element

Explanation
Lowercase elem: When you use <elem />, React interprets it as a built-in HTML element and looks for a tag named elem. Since no such tag exists, it results in an error or unexpected behavior.

Uppercase Elem: When you use <Elem />, React correctly interprets it as a user-defined component and calls React.createElement(Elem) to create an instance of the Elem component.

# Components Composition
- A component inside a component.
- Calling a component inside another component is Component Composition.

# Higher Order component
- js function (pure function), since we are not updating the input component content
- takes a component, enhanches the component, returns a component

const withHigherOrderComponent=(component)=>{
   return (props) =>{       // this is a new component- since component is js function we write this return

      return(){            // and this is a new component returns this jsx
      <> 
         <h1>component jsx</h1>
         <div>{props.name}</div>
         <component {...props}/>
      </>
    }

   }
}

const newComponent=withHigherOrderComponent(component);

<newComponent name={name}/>

# How to render a component?
- To render a functional component we call them ```<Heading />```. This is the syntax that Babel understands. 
- You can also call them using these ways,
1. ```<Heading></Heading>```
2. {Heading()}


# ```{TitleComponent} vs <TitleComponent/>```
- Use {TitleComponent} when TitleComponent is a variable holding a React component.
- Use ```{<TitleComponent/>}``` as the standard way to render a React component in JSX.