import { POST_USER, POST_USER_SUCCESS, POST_USER_ERROR } from "../actions";

const INITIAL_STATE = {
  loading: false,
  user: {},
  loadingList: { [POST_USER]: false },
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        loadingList: { ...state.loadingList, [POST_USER]: true },
        error: false,
      };
    case POST_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loadingList: { ...state.loadingList, [POST_USER]: false },
        error: false,
      };
    case POST_USER_ERROR:
      return {
        ...state,
        loadingList: { ...state.loadingList, [POST_USER]: false },
        error: true,
      };
    default:
      return state;
  }
};
