import {
  GET_ACTIVITY,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_ERROR,
} from "../actions";

export const getActivity = () => {
  return {
    type: GET_ACTIVITY,
    payload: {},
  };
};

export const getActivitySuccess = (activies) => {
  return {
    type: GET_ACTIVITY_SUCCESS,
    payload: activies,
  };
};

export const getActivityError = (error) => ({
  type: GET_ACTIVITY_ERROR,
  payload: error,
});
