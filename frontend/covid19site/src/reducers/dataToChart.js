import { SET_DATA_CHART, DATA_CHART_LOADING } from "../actions/types";

const INITIAL_STATE = {
  dates: "",
  status: "",
};

export default function fetchStatesToChart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_CHART_LOADING:
      return { ...state, status: "waiting" };
    case SET_DATA_CHART:
      return {
        ...state,
        dates: action.payload.dates,
        status: "received",
      };
    default:
      return state;
  }
}
