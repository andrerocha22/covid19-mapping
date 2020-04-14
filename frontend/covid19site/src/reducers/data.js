import { SET_DATA, DATA_LOADING, LOAD_ERROR } from "../actions/types";

const INITIAL_STATE = {
  totalDeaths: 0,
  totalCases: 0,
  listState: [],
  status: "",
};

export default function fetchStates(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_LOADING:
      return { ...state, status: "waiting" };
    case SET_DATA:
      return {
        ...state,
        listState: action.payload.data,
        totalDeaths: action.payload.deaths,
        totalCases: action.payload.cases,
        status: "received",
      };
    case LOAD_ERROR:
      return { ...state, status: "error" };
    default:
      return state;
  }
}
