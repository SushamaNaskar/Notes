// redux/reducers/rootReducer.js
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  users: userReducer, // 🔴 important name
});
