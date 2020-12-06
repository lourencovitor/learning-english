import { GET_GAMES, GET_GAMES_SUCCESS, GET_GAMES_ERROR } from "../actions";

export const getGames = () => {
  return {
    type: GET_GAMES,
    payload: {},
  };
};

export const getGamesSuccess = (games) => {
  return {
    type: GET_GAMES_SUCCESS,
    payload: games,
  };
};

export const getGamesError = (error) => ({
  type: GET_GAMES_ERROR,
  payload: error,
});
