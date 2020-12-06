/* eslint-disable prefer-promise-reject-errors */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { games } from "../../data/games";
import { GET_GAMES } from "../actions";

import { getGamesSuccess, getGamesError } from "./actions";

function getGamesAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [...games];
      resolve(data);
    }, 4000);
  });
}

function* getGames() {
  try {
    const response = yield call(getGamesAsync);
    yield put(getGamesSuccess(response));
  } catch (error) {
    yield put(getGamesError(error));
  }
}

export function* watchgetGames() {
  yield takeEvery(GET_GAMES, getGames);
}

export default function* rootSaga() {
  yield all([fork(watchgetGames)]);
}
