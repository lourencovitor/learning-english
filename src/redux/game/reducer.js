import { GET_GAMES, GET_GAMES_SUCCESS, GET_GAMES_ERROR } from "../actions";

const INITIAL_STATE = {
  loading: false,
  games: [],
  loadingList: { [GET_GAMES]: false },
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_GAMES]: true },
        error: false,
      };
    case GET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
        loadingList: { ...state.loadingList, [GET_GAMES]: false },
        error: false,
      };
    case GET_GAMES_ERROR:
      return {
        ...state,
        loadingList: { ...state.loadingList, [GET_GAMES]: false },
        error: true,
      };
    default:
      return state;
  }
};
