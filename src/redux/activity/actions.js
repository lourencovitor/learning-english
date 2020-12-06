import { POST_USER, POST_USER_SUCCESS, POST_USER_ERROR } from "../actions";

export const postUser = (user) => {
  return {
    type: POST_USER,
    payload: { user },
  };
};

export const postUserSuccess = (user) => {
  return {
    type: POST_USER_SUCCESS,
    payload: user,
  };
};

export const postUserError = (error) => ({
  type: POST_USER_ERROR,
  payload: error,
});
