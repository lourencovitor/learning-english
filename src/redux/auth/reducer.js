import { POST_AUTH, POST_AUTH_SUCCESS, POST_AUTH_ERROR } from "../actions";

const INITIAL_STATE = {
  loading: false,
  user: {},
  loadingList: { [POST_AUTH]: false },
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_AUTH:
      return {
        ...state,
        loadingList: { ...state.loadingList, [POST_AUTH]: true },
        error: false,
      };
    case POST_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingList: { ...state.loadingList, [POST_AUTH]: false },
        error: false,
      };
    case POST_AUTH_ERROR:
      return {
        ...state,
        loadingList: { ...state.loadingList, [POST_AUTH]: false },
        error: true,
      };
    default:
      return state;
  }
};
