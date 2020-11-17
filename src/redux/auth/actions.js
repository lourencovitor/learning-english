import { POST_AUTH, POST_AUTH_SUCCESS, POST_AUTH_ERROR } from "../actions";

export const postAuth = (auth) => {
  return {
    type: POST_AUTH,
    payload: { auth },
  };
};

export const postAuthSuccess = (user) => {
  return {
    type: POST_AUTH_SUCCESS,
    payload: user,
  };
};

export const postAuthError = (error) => ({
  type: POST_AUTH_ERROR,
  payload: error,
});
