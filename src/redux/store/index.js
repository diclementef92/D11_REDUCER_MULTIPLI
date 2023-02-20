import { configureStore, combineReducers } from "@reduxjs/toolkit";
import preferredReducer from "../reducers/preferredReducer";
import resultsReducer from "../reducers/resultsReducer";

const rootReducer = combineReducers({
  favourites: preferredReducer,
  jobs: resultsReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
