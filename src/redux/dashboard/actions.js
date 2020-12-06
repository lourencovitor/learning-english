import { GET_DASH, GET_DASH_SUCCESS, GET_DASH_ERROR } from "../actions";

export const getDash = () => {
  return {
    type: GET_DASH,
    payload: {},
  };
};

export const getDashSuccess = (news) => {
  return {
    type: GET_DASH_SUCCESS,
    payload: news,
  };
};

export const getDashError = (error) => ({
  type: GET_DASH_ERROR,
  payload: error,
});
