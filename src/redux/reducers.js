import { combineReducers } from "redux";
import authStore from "./auth/reducer";

const reducers = combineReducers({
  authStore,
});

export default reducers;
