/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { POST_USER } from "../actions";

import { postUserSuccess, postUserError } from "./actions";

function postUserAsync({ user }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        ...user,
      };
      resolve(data);
    }, 4000);
  });
}

function* postUser({ payload }) {
  try {
    const response = yield call(postUserAsync, payload);
    yield put(postUserSuccess(response));
  } catch (error) {
    yield put(postUserError(error));
  }
}

export function* watchpostUser() {
  yield takeEvery(POST_USER, postUser);
}

export default function* rootSaga() {
  yield all([fork(watchpostUser)]);
}
