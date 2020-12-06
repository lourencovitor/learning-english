/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import jwt from "jsonwebtoken";
import { user } from "../../data/defaultValues";
import { POST_AUTH, LOGOUT } from "../actions";

import {
  postAuthSuccess,
  postAuthError,
  logoutSuccess,
  logoutError,
} from "./actions";

function postAuthAsync({ auth }) {
  console.log(auth.email === user.email && auth.password === user.password);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (auth.email === user.email && auth.password === user.password) {
        const newUser = {
          ...user,
        };
        delete newUser.password;
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: newUser,
          },
          "aa1e2daa-37cc-11eb-adc1-0242ac120002"
        );
        resolve({ ...newUser, token });
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

function logoutAsync() {
  return new Promise((resolve) => {
    sessionStorage.removeItem("token");
    resolve({});
  });
}

function* logout() {
  try {
    const response = yield call(logoutAsync);
    yield put(logoutSuccess(response));
  } catch (error) {
    yield put(logoutError(error));
  }
}

export function* watchlogout() {
  yield takeEvery(LOGOUT, logout);
}

export default function* rootSaga() {
  yield all([fork(watchpostAuth), fork(watchlogout)]);
}
