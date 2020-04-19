import {
  SET_DATA_STATE,
  DATA_LOADING_STATE,
  LOAD_ERROR_STATE,
} from "../actions/types";

const INITIAL_STATE = {
  totalDeaths: 0,
  totalCases: 0,
  listCities: [],
  status: "",
};

export default function fetchStates(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_LOADING_STATE:
      return { ...state, status: "waiting" };
    case SET_DATA_STATE:
      return {
        ...state,
        listCities: action.payload.data,
        totalDeaths: action.payload.deaths,
        totalCases: action.payload.cases,
        status: "received",
      };
    case LOAD_ERROR_STATE:
      return { ...state, status: "error" };
    default:
      return state;
  }
}
