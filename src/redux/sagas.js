/* eslint-disable no-unused-vars */
import { all } from "redux-saga/effects";
import authStore from "./auth/saga";
import userStore from "./user/saga";
import dashStore from "./dashboard/saga";
import gameStore from "./game/saga";
import activityStore from "./activity/saga";

export default function* rootSaga(getState) {
  yield all([
    authStore(),
    userStore(),
    dashStore(),
    gameStore(),
    activityStore(),
  ]);
}
