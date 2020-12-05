/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { POST_AUTH } from "../actions";

import { postAuthSuccess, postAuthError } from "./actions";

function postAuthAsync({ auth }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (auth.email === "vitor@teste.com" && auth.password === "Teste123@") {
        const data = {
          id: 1,
          name: "Vitor Silva",
          email: "vitor@teste.com",
          age: 19,
        };
        resolve(data);
      } else {
        reject({});
      }
    }, 4000);
  });
}

function* postAuth({ payload }) {
  try {
    const response = yield call(postAuthAsync, payload);
    yield put(postAuthSuccess(response));
  } catch (error) {
    yield put(postAuthError(error));
  }
}

export function* watchpostAuth() {
  yield takeEvery(POST_AUTH, postAuth);
}

export default function* rootSaga() {
  yield all([fork(watchpostAuth)]);
}
