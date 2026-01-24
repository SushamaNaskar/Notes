# What is Redux? 
- Redux is a state management library used mainly with JavaScript apps, especially React, to manage and share application state in a predictable and centralized way.

# Core idea (in simple words)
- Redux stores the entire app state in a single object and controls how it changes.
- State changes happen in a strict, predictable flow.

## Use Redux when:
1. Your state is complex, changes frequently, or needs advanced tooling.
2. You have deeply nested components that need to read/update state.
3. You require middleware for async actions (e.g., API calls with Thunk/Saga).
4. You want devtools support, undo/redo, or action tracking.

# Why Redux is needed
- In small apps, React’s useState and useContext are enough. But as an app grows:

1. Many components need the same data
2. Passing props becomes messy (prop drilling)
3. Debugging state changes becomes hard

# React-Redux
- React Redux is the official Redux UI binding library for React.
- It subscribes to the Redux store, checks to see if the data your component wants has changed, and re-renders your component.

- Redux and React-Redux are different, but they are used together.
Redux is the core state management library.

It:

1. Stores the global state
2. Defines actions
3. Uses reducers to update state
Works with any JavaScript framework (or even vanilla JS)

👉 Redux does NOT know anything about React.

- React-Redux is a binding layer between React and Redux
It:

1. Connects Redux store to React components
2. Provides hooks like:
- useSelector() → read state
- useDispatch() → dispatch actions
3. Handles subscriptions & re-renders efficiently
👉 React-Redux depends on both React and Redux.

# Can Redux work without React-Redux?

✅ Yes
But you’d have to:

1. Manually subscribe to the store
2. Force component re-renders
That’s why React-Redux is essential in React apps.

Interview-ready answer ⭐

Redux is a standalone state management library, while
React-Redux is the official library that connects Redux with React components using hooks or connect().

# Redux Toolkit
The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux:

1. "Configuring a Redux store is too complicated"
2. "I have to add a lot of packages to get Redux to do anything useful"
3. "Redux requires too much boilerplate code"

# Redux store
- A single global object that holds the entire app state.

# State
- The data your app uses (user info, cart items, theme, etc.)

# Action
- A plain object that describes what happened.
- Actions in Redux are plain JavaScript objects that contain information about an event that occurred in the application. They are the only way to send data to the Redux store and trigger state updates.

# Reducer
- A pure function that decides how state changes based on an action.
- Do not mutate state
- Return new state

# Dispatch
- The way you send actions to Redux.

# Redux data flow

```
UI → dispatch(action)
      ↓
   Reducer
      ↓
   Store (new state)
      ↓
   UI re-renders

```

# slices
- parts of redux store
- ex cart slice, user slice etc

# dispatch action
- dispatches an action -> which calls a reducer function-> which updates the slice of a redux store

# reducer function

# selector
- subscribing to the store / sync with the store

# set up
- install @reduxjs/toolkit and react-redux

- build store

 import {configureStore} from '@reactjs/toolkit';
 
 const appStore=configureStore();

- connect out store to our app

import {Provider} from 'react-redux';

<Provider store={appStore}>
<App/>
</Provider>


- create slice
import {createSlice} from '@reacctjs/toolkit;

const slice=createSlice({
    name:'slice-name',
    initialState:{
        data:[]
    },
    reducers:{
        add:(state,acton)=>{}
    }
})

- dispatch(action)
- selector

# What is middleware in Redux?
Middleware is a function that sits between the action and the reducer, and can intercept and modify actions before they reach the reducer.
Middleware in Redux is a function that intercepts dispatched actions before they reach the reducer, allowing us to handle side effects like API calls, logging, and asynchronous logic.

# Common Redux Middleware

redux-thunk → async logic (most popular)

redux-saga → complex async flows (generators)

redux-logger → logging

redux-promise → handles promises

#  What is a thunk in Redux?

A thunk is a special function that is returned by another function, which can be used to delay the execution of an action, or to perform an asynchronous operation before dispatching the action.
Thunks are a standard approach for writing async logic in Redux apps and commonly used for data fetching.

# What is the difference between mapStateToProps() and mapDispatchToProps() in React-Redux?

mapStateToProps() is a function that maps the state from the Redux store to the props of a React component, while mapDispatchToProps() is a function that maps the action creators to the props of a React component.

# What is the connect() function in React-Redux?

The connect() function is a higher-order function that connects a React component to the Redux store. It takes two arguments: mapStateToProps() and mapDispatchToProps().

# What is the difference between dispatch() and getState() in Redux?

dispatch() is a method used to dispatch an action to the Redux store, while getState() is a method used to retrieve the current state from the Redux store.

# What is the difference between combineReducers() and compose() in Redux?

combineReducers() is a function that combines multiple reducers into a single reducer function, while compose() is a function that allows you to combine multiple functions into a single function.

#  What is the role of the dispatch function in Redux?
The role of the dispatch function in Redux is to send actions to the store.
It's a method provided by the Redux store that accepts an action object as its argument and initiates the process of updating the application's state based on that action.

# What are selectors in Redux?
Selectors in Redux are the functions that extract specific pieces of data from the Redux store state. They provide a way to pass the data from the state in an efficient manner. Selectors are mainly used to encapsulate the process of accessing and transforming state data which makes it easier to manage and reuse across multiple components.

# What is a thunk and how does redux-thunk work?
A thunk is a function that returns another function. It allows you to write async logic that interacts with the Redux store.

# can we not use maptostate, maptoprops and connect with rtk?
Yes, you absolutely can (and should) stop using connect, mapStateToProps, and mapDispatchToProps.

While Redux Toolkit is technically compatible with the old connect method, the modern standard is to use React-Redux Hooks. Hooks make your components much cleaner, easier to read, and better for TypeScript.

```
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/actions/userActions";
import {
  selectUserList,
  selectUsersLoading,
  selectUsersError,
} from "../redux/selectors/userSelectors";

const UserList = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUserList);
  const loading = useSelector(selectUsersLoading);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

// No mapStateToProps, No mapDispatchToProps, No connect!
export default UserList;
```


```
explain const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {}, // Standard sync reducers go here
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.userList = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
what is reducers and extraReducers?
```

# How "Immer" works inside both
In traditional Redux, you had to use the spread operator (...state) to avoid mutating state. In both reducers and extraReducers, RTK uses a library called Immer.

Old way: return { ...state, loading: true }

RTK way: state.loading = true Immer tracks these "mutations" and safely creates a brand new state object for you behind the scenes.


# # Redux Toolkit: Calling Multiple APIs and Updating Multiple Slices

## Scenario
We have **two Redux slices**:
- `division`
- `store`

### Requirement
1. Call **Division API**
2. Update **division state**
3. Then call **Store API**
4. Update **store state**

We are using **Redux Toolkit (RTK)**.

---

## ✅ Recommended Solution
Use **one orchestrating `createAsyncThunk`** that:
- Calls multiple APIs sequentially
- Dispatches actions to update different slices

This keeps logic centralized and predictable.

---

## 📁 Suggested Folder Structure

redux/
├─ division/
│ └─ divisionSlice.js
├─ store/
│ └─ storeSlice.js
├─ common/
│ └─ loadDivisionAndStore.js
└─ store.js



## Component Usage
```
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadDivisionAndStore } from "../redux/common/loadDivisionAndStore";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDivisionAndStore());
  }, [dispatch]);

  return <div>Dashboard</div>;
};

export default Dashboard;

```

## Combined Async Thunk
redux/common/loadDivisionAndStore.js

```
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setDivisionData,
  setDivisionLoading,
  setDivisionError,
} from "../division/divisionSlice";
import {
  setStoreData,
  setStoreLoading,
  setStoreError,
} from "../store/storeSlice";

export const loadDivisionAndStore = createAsyncThunk(
  "common/loadDivisionAndStore",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      // 1️⃣ Division API
      dispatch(setDivisionLoading());
      const divisionResponse = await axios.get("/api/division");
      dispatch(setDivisionData(divisionResponse.data));

      // 2️⃣ Store API
      dispatch(setStoreLoading());
      const storeResponse = await axios.get(
        `/api/store?divisionId=${divisionResponse.data.id}`
      );
      dispatch(setStoreData(storeResponse.data));

      return true;
    } catch (error) {
      // Handle errors for both slices if needed
      dispatch(setDivisionError(error.message));
      dispatch(setStoreError(error.message));
      return rejectWithValue(error.message);
    }
  }
);

```

## Store Slice
redux/store/storeSlice.js

```
import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    setStoreData: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    setStoreLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setStoreError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setStoreData, setStoreLoading, setStoreError } =
  storeSlice.actions;
export default storeSlice.reducer;


```





## 1️⃣ Division Slice with Loading & Error
redux/division/divisionSlice.js`

```
import { createSlice } from "@reduxjs/toolkit";

const divisionSlice = createSlice({
  name: "division",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    setDivisionData: (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    },
    setDivisionLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setDivisionError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setDivisionData,
  setDivisionLoading,
  setDivisionError,
} = divisionSlice.actions;
export default divisionSlice.reducer;



```
Store Configuration

redux/store.js

```
import { configureStore } from "@reduxjs/toolkit";
import divisionReducer from "./division/divisionSlice";
import storeReducer from "./store/storeSlice";

export const store = configureStore({
  reducer: {
    division: divisionReducer,
    store: storeReducer,
  },
});

```
