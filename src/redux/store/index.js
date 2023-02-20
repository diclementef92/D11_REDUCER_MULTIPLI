import { configureStore, combineReducers } from "@reduxjs/toolkit";
import preferredReducer from "../reducers/preferredReducer";

const rootReducer = combineReducers({
  preferred: preferredReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
