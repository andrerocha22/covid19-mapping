import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import "./assets/styles/global.scss";
import reducers from "./reducers";

import { loadData, loadDataToChart, loadNews } from "./actions/index";

const store = createStore(reducers, applyMiddleware(reduxThunk));
store.dispatch(loadData());
store.dispatch(loadDataToChart());
store.dispatch(loadNews());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
