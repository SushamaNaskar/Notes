# What is prop drilling ?
- prop drilling  refers to the process of  passing down props through multiple layers of nested components.
- This happens when a piece of data needs to be transferred from a higher-level component to a deeply nested child component, and it must pass through several intermediary components in between.

# How to solve prop drilling?
- developers often use other state management solutions, like the  React Context API ,  Redux , or  other state management libraries to avoid passing props through multiple layers of components.

# Context API 
- The two main components associated with the  Context API are the Context Provider and Context Consumer .
-  By using the Context Provider and Context Consumer, we can avoid prop drilling and make it easier to share global or shared state across different parts of your React application. 

# Creating a context
The Provider component is created using  React.createContext()  
const MyContext = React.createContext(data);

# Context Provider 
 The Context Provider is a  component that allows its children to subscribe to a context's changes . It accepts a value prop, which is the data that will be shared with the components that are descendants of this provider.
 - The provider component typically manages the state that you want to share via context.

 <MyContext.Provider value={this.state.data}>
     {this.props.children}
 </MyContext.Provider>

 # context consumer
 The Context Consumer is a component that subscribes to the changes in the context provided by its nearest Context Provider ancestor.
 - It takes a function as its child, and that function receives the current context value as an argument.

 <MyContext.Consumer>
 {(contextData) => (
 <p>{contextData}</p>
 )}
 </MyContext.Consumer>

 # useContext
 - useContext is a React hook that allows you to access the context values directly within a functional component. 

  const { value, setValue } = useContext(MyContext);