/* eslint-disable no-unused-vars */
import { all } from "redux-saga/effects";
import authStore from "./auth/saga";

export default function* rootSaga(getState) {
  yield all([authStore()]);
}
