# What are props?
- Short form for properties. To dynamically send data to a component we use props. Passing a prop to a component is like
passing an argument to a function.

# Passing Props to a Component

<RestaurantCard
 resName="Meghana Foods"
 cuisine="Biryani, North Indian"
/>

# Receiving props in the Component
- Props will be wrapped and send in Javascript object

const RestaurantCard = (props) => {
 return(
 <div>{props.resName}</div>
 )
}

# Destructuring Props
const RestaurantCard = ({resName, cuisine}) => {
 return(
 <div>{resName}</div>
 )
}

# Good Practices
Destructuring props and Optional Chaining
const {name, avgRating, cuisine} = resData?.data;
Remember that props are readonly. They should not be modified in any way, If you need to modify some value in response to user input or a network response, use state instead.

# What we shouold not update props in react?
Props are meant to be passed from parent to child and treated as immutable inside the child component. React’s philosophy is "one-way data flow", meaning data flows from parent to child, not the other way around.
React decides when to re-render a component based on state and props. If you modify props directly, React won't detect the change — meaning the component may not re-render as you expect.
# What is prop drilling ?
- prop drilling  refers to the process of  passing down props through multiple layers of nested components.
- This happens when a piece of data needs to be transferred from a higher-level component to a deeply nested child component, and it must pass through several intermediary components in between.

# How to solve prop drilling?
- developers often use other state management solutions, like the  React Context API ,  Redux , or  other state management libraries to avoid passing props through multiple layers of components.
