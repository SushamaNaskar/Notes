# Component instance
- Main Component (Component Definition): The blueprint or definition of the component. This is where you define what the component should look like and how it should behave.
- A component instance is a specific occurrence of a class based component created by React when rendering your application. Each instance can have its own state and props, making it reusable in different parts of your application.

# constructor
<!-- - Class components should always call the base constructor with props. -->
The constructor method is the first to be called when a component is created. It's where we typically initialize the component's state and bind event handlers.

# super(props) 
-  super(props) is used to invoke the constructor of the parent class, ensuring that the parent class's initialization is performed before the child class's constructor code is executed. It is essential to maintain the inheritance chain correctly.

- the super(props) call ensures that the  React.Component class's constructor is called, which is necessary for React to set up the component correctly.

- React uses the props object to pass data from parent components to child components. By calling super(props), we make sure that the props are properly handled in the parent class's constructor, and we can access them in our child component.

# Render 
- The render method is responsible for rendering the component's UI. It must return a React element (typically JSX) representing the component's structure.

# ComponentDidMount
This method is called immediately after the component is inserted into the DOM. It's often used for making AJAX requests, setting up subscriptions, or other one-time initializations.

# ComponentDidUpdate
This method is called after the component has been updated
(re-rendered) due to changes in state or props. It's often used for side effects, like updating the DOM in response to state or prop changes.

# ComponentWillUnmount
- This method is called just before the component is removed from the DOM. It's used to clean up resources or perform any necessary cleanup.


# class based component
import React from "react";

class App extends React.Component{
 render(){
    return(<div>JSX</div>)
 }
}

# receiving props

import React from "react";

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
      return(<div>{this.props.value}</div>)
    }
}

# creating state

import React from "react";

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:1,
        }
    }

    render(){
        const {value}= this.props;
        const {count,count2}=this.state;
      return(<div>{count}</div>)
    }
}

# this.setState() or state update

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:1,
        }
    }

    render(){
        const {value}= this.props;
        const {count,count2}=this.state;
      return(
        <div>
              <h1> {count}</h1>
              <button onClick={()=>{
                 this.setState({
                     count:this.state.count+1;
                 })
              }}> Count Increment</h1>

      </div>
      )
    }
}

# life cycle of a component
- constructor
- render
- component did mount

# life cycle of parent and child component
- parent constructor
- parent render

- child constructor
- child render

- child componentDidMount
- parent componentDidMount

# render and commit phase
- react will render all components first (render phase - call constructor and render method for all comonents)
- then it will start commit phase where it updates the DOM in batches

# mounting 
class ParentClass extends React.component{
    consturctor(){
        super(props)
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent componentDitMount");
    }

    render(){
        console.log("parent render");
        return(
            <>
            <ChidrenComponent id={"First"}>
            <ChidrenComponent id={"Second"}>
            </>
        )
    }
}

class ChildrenClass extends React.component{
    constructor(){
        super(props);
        console.log(this.props.id + "constructor");
    }

    componentDidMount(){
        console.log(this.props.id+ "componentDidMount");
    }

    render(){
        console.log(this.props.id + "render");
        return(
            <>This is child component</>
        )
    }
}

// render phase (diff between old and new Virtual DOM tree)
- parent constructor
- parent render
  - First constructor
  - First render
  - second constructor
  - second render

// commit phase (update the DOM)
- Frist componentDidMount
- Second componentDidMount
- Parent componentDidMount

# Updating phase
- api call is made inside componentDidMount
- render is called again
- ComponentDidUpdate is called

# commit phase
- Dom is updated

