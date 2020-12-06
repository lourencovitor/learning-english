/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { activies } from "../../data/activies";
import { GET_ACTIVITY } from "../actions";

import { getActivitySuccess, getActivityError } from "./actions";

function getActivityAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [...activies];
      resolve(data);
    }, 4000);
  });
}

function* getActivity() {
  try {
    const response = yield call(getActivityAsync);
    yield put(getActivitySuccess(response));
  } catch (error) {
    yield put(getActivityError(error));
  }
}

export function* watchgetActivity() {
  yield takeEvery(GET_ACTIVITY, getActivity);
}

export default function* rootSaga() {
  yield all([fork(watchgetActivity)]);
}
