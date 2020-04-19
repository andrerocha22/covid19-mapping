import { combineReducers } from "redux";
import data from "./data";
import dataToChart from "./dataToChart";
import news from "./news";
import dataState from "./dataState";

export default combineReducers({
  dataState: dataState,
  data: data,
  dataTochart: dataToChart,
  news: news,
});
