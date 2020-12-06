import { combineReducers } from "redux";
import authStore from "./auth/reducer";
import userStore from "./user/reducer";
import dashStore from "./dashboard/reducer";

const reducers = combineReducers({
  authStore,
  userStore,
  dashStore,
});

export default reducers;
