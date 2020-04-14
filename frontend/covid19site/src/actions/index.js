import axios from "axios";
import { SET_DATA, DATA_LOADING, LOAD_ERROR } from "../actions/types";

export const loadData = () => {
  return (dispatch) => {
    dispatch(loadingStates());

    return axios
      .get("https://brasil.io/api/dataset/covid19/caso/data?place_type=state")
      .then((response) => {
        let totalDeaths = 0;
        let totalCases = 0;
        let states = [];
        let dates = [];

        response.data.results.forEach((data) => {
          if (!states.some((e) => e.name === data.state)) {
            states.push({
              name: data.state,
              deaths: data.deaths,
              confirmed: data.confirmed,
            });

            totalDeaths += data.deaths;
            totalCases += data.confirmed;
          }
        });

        dispatch(
          setData({
            deaths: totalDeaths,
            cases: totalCases,
            data: states,
          })
        );
      })
      .catch((error) => {
        dispatch(loadingStates(error));
      });
  };
};

export const loadingStates = () => {
  return {
    type: DATA_LOADING,
  };
};

export const loadError = (error) => {
  return {
    type: LOAD_ERROR,
    payload: error,
  };
};

export const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};
