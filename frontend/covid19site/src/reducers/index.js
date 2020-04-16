import { combineReducers } from "redux";
import data from "./data";
import dataToChart from "./dataToChart";

export default combineReducers({
  data: data,
  dataTochart: dataToChart,
});
