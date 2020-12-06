import { GET_DASH, GET_DASH_SUCCESS, GET_DASH_ERROR } from "../actions";

const INITIAL_STATE = {
  loading: false,
  news: [],
  loadingList: { [GET_DASH]: false },
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DASH:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_DASH]: true },
        error: false,
      };
    case GET_DASH_SUCCESS:
      return {
        ...state,
        news: action.payload,
        loadingList: { ...state.loadingList, [GET_DASH]: false },
        error: false,
      };
    case GET_DASH_ERROR:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_DASH]: false },
        error: true,
      };
    default:
      return state;
  }
};
