import {
  GET_ACTIVITY,
  GET_ACTIVITY_SUCCESS,
  GET_ACTIVITY_ERROR,
} from "../actions";

const INITIAL_STATE = {
  loading: false,
  activies: [],
  loadingList: { [GET_ACTIVITY]: false },
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ACTIVITY:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_ACTIVITY]: true },
        error: false,
      };
    case GET_ACTIVITY_SUCCESS:
      return {
        ...state,
        activies: action.payload,
        loadingList: { ...state.loadingList, [GET_ACTIVITY]: false },
        error: false,
      };
    case GET_ACTIVITY_ERROR:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_ACTIVITY]: false },
        error: true,
      };
    default:
      return state;
  }
};
