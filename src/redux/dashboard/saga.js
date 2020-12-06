/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { news } from "../../data/news";
import { GET_DASH } from "../actions";

import { getDashSuccess, getDashError } from "./actions";

function getDashAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [...news];
      resolve(data);
    }, 4000);
  });
}

function* getDash() {
  try {
    const response = yield call(getDashAsync);
    yield put(getDashSuccess(response));
  } catch (error) {
    yield put(getDashError(error));
  }
}

export function* watchgetDash() {
  yield takeEvery(GET_DASH, getDash);
}

export default function* rootSaga() {
  yield all([fork(watchgetDash)]);
}
