import { combineReducers } from "redux";
import authStore from "./auth/reducer";
import userStore from "./user/reducer";

const reducers = combineReducers({
  authStore,
  userStore,
});

export default reducers;
