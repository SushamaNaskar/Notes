# State Management (React + beyond)
Key Concepts:
1. Local state: Managed within components via useState, useReducer.
2. Global state: Shared across components using Context API, Redux, Zustand, Recoil, etc.
3. Derived state: Computed from props or other states (should not be stored if it can be derived).
4. Side effects: Managed with useEffect.


# What is the difference between local and global state?

## Local State:
1. Belongs to a specific component.
2. Managed using useState, useReducer, or useRef.
3. Only accessible by the component (and its children via props).

🔸 Example: Modal open/close state, input field values, toggle switches.

## Global State:
1. Shared across multiple components.
2. Managed using Context API, Redux, Zustand, etc.
3. Centralized, accessible from anywhere in the app.

🔸 Example: Auth status, theme (dark/light), user preferences.

💬 Interview answer sample:
"Local state is scoped to a single component and used for things like form input or UI toggles. Global state is shared across components — like a user's authentication status — and needs a centralized management approach like Redux or Context API."

# When would you choose Context API over Redux?

## Use Context API when:
1. State doesn’t change frequently.
2. You only need to share simple, lightweight state globally (e.g., theme, locale, auth).
3. Your app is small-to-medium and doesn't need advanced tools like middleware or devtools.

## Use Redux when:
1. Your state is complex, changes frequently, or needs advanced tooling.
2. You have deeply nested components that need to read/update state.
3. You require middleware for async actions (e.g., API calls with Thunk/Saga).
4. You want devtools support, undo/redo, or action tracking.

💬 Interview answer sample:
"I use Context API for simple, rarely-changing state like theme or user language. But for large-scale applications with complex logic, frequent updates, and debugging needs, Redux offers better structure and developer tools."

# How does useReducer differ from useState?

| Feature              | `useState`                         | `useReducer`                          |
| -------------------- | ---------------------------------- | ------------------------------------- |
| Simpler logic        | ✅                                  | ❌ – Better for complex state          |
| Multiple fields      | Requires multiple `useState` calls | ✅ Single reducer can manage it all    |
| Action-based updates | ❌                                  | ✅ Uses actions and a reducer function |
| Debugging            | Basic                              | More traceable, especially with Redux |

🔸 Example: For a counter, useState is simple. For a complex form with multiple steps and conditions, useReducer is cleaner.

💬 Interview answer sample:
"useState is ideal for simple, isolated state updates. When the state becomes complex — like managing multiple related fields or handling different action types — useReducer provides better structure and readability."

# How do you handle state updates in deeply nested components?

There are 4 good strategies:

1. Lift state up and pass via props
Best for small apps or 2–3 levels deep.

Quickly becomes messy ("prop drilling").

2. Use Context API
Helps avoid prop drilling.

Clean for lightweight shared state (auth, theme).

3. Use a Global State Manager (Redux, Zustand)
Best when many components at different levels need access or updates.

Keeps code cleaner and more scalable.

4. Colocate state smartly
Keep the state as close to where it's needed as possible.

Avoid unnecessary lifting.

💬 Interview answer sample:
"If a piece of state needs to be shared deeply across many levels, I prefer Context or a global state manager like Redux. For simpler cases, I lift state up and pass it down via props — but I avoid prop drilling if the tree gets too deep."


# UseContext (https://dev.to/javmurillo/react-context-all-in-one-54ck)
- Context is not a "state management" tool. It's a Dependency Injection mechanism, whose only purpose is to make a single value accessible to a nested tree of React components. 

- It's up to you to decide what that value is, and how it's created. Typically, that's done using data from React component state, ie, useState and useReducer. So, you're actually doing all the "state management" yourself - Context just gives you a way to pass it down the tree.

- If you app state is frequently updated Context is not the best solution.
reason : A component calling useContext will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using memoization.

- Not suitable if you need complex capabilities such as side effects, persistence and data serialization.

# React Context usage example
1. How to create a Context.
2. How to create a Provider which will provide the context value.
3. How to create Consumer components which will use the context value.

# Can I store my global state in just one Context?
{
  auth: {...}
  translations: {...}
  theme: {...}
}

If a component only consumes the theme, it still will be re-rendered even if another state property changes.

# When should I use Context?
Any time you have some value that you want to make accessible to a portion of your React component tree, without passing that value down as props through each level of components


# useReducer
Your state object has multiple related fields

You have multiple ways to update the state (like "add", "remove", "edit")

You need to centralize state logic and make it predictable (like a Redux reducer)

You want to share dispatch functions across components (via context)

| Use Case           | Why `useReducer` is a good fit               |
| ------------------ | -------------------------------------------- |
| Complex Forms      | Multiple fields, step navigation, validation |
| Shopping Cart      | Add/remove items, calculate totals           |
| Auth State         | Login, logout, loading, error handling       |
| UI State Machine   | Modal open/close, tabs, and transitions      |
| Multi-step Wizards | Next/previous steps, track progress          |
