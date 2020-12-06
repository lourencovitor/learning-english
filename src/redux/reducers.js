import { combineReducers } from "redux";
import authStore from "./auth/reducer";
import userStore from "./user/reducer";
import dashStore from "./dashboard/reducer";
import gameStore from "./game/reducer";
import activityStore from "./activity/reducer";

const reducers = combineReducers({
  authStore,
  userStore,
  dashStore,
  gameStore,
  activityStore,
});

export default reducers;
