import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as reducers from "./redux";

const store = configureStore({
  reducer: combineReducers(reducers)
});

export type AppDispatchTypes = typeof store.dispatch;

export default store;