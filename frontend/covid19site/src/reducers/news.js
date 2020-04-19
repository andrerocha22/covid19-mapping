import { SET_NEWS, LOAD_NEWS_ERROR, NEWS_LOADING } from "../actions/types";

const INITIAL_STATE = {
  listArticles: [],
  status: "",
};

export default function fetchNews(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEWS_LOADING:
      return { ...state, status: "waiting" };
    case SET_NEWS:
      return {
        ...state,
        listArticles: action.payload,
        status: "received",
      };
    case LOAD_NEWS_ERROR:
      return { ...state, status: "error" };
    default:
      return state;
  }
}
