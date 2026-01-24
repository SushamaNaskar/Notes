import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/rootReducer";

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

// import { configureStore } from "@reduxjs/toolkit";
// import rootReducer from "./redux/reducers/rootReducer";

// export const store = configureStore({
//   reducer: rootReducer
// });

// # if we want to add aditional middleware while using RTK
// import { configureStore } from "@reduxjs/toolkit";
// import logger from "redux-logger";
// import rootReducer from "./reducers";

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(logger)
// });

// export default store;