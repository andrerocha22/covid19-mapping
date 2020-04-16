import axios from "axios";
import {
  SET_DATA,
  DATA_LOADING,
  LOAD_ERROR,
  SET_DATA_CHART,
  DATA_CHART_LOADING,
} from "../actions/types";

export const loadData = () => {
  return (dispatch) => {
    dispatch(loadingStates());

    return axios
      .get("https://brasil.io/api/dataset/covid19/caso/data?&place_type=state")

      .then((response) => {
        // console.log(response);

        let totalDeaths = 0;
        let totalCases = 0;
        let states = [];

        response.data.results.forEach((data) => {
          if (!states.some((e) => e.name === data.state)) {
            states.push({
              name: data.state,
              deaths: data.deaths,
              confirmed: data.confirmed,
              death_rate: data.death_rate,
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

export const loadDataToChart = () => {
  return (dispatch) => {
    return axios
      .get("https://brasil.io/api/dataset/covid19/caso/data?&place_type=state")
      .then((response) => {
        let dates = [];
        response.data.results.forEach((data) => {
          if (!dates.some((e) => e.Dia === data.date)) {
            dates.push({
              Dia: data.date,
              Confirmados: 0,
              Mortes: 0,
            });
          } else if (dates.some((e) => e.Dia === data.date)) {
            dates.some((e) => {
              if (e.Dia === data.date) {
                e.Confirmados += data.confirmed;
                e.Mortes += data.deaths;
              }
            });
          }
        });

        dispatch(
          setDataToChart({
            dates: dates.reverse(),
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

export const setDataToChart = (data) => {
  return {
    type: SET_DATA_CHART,
    payload: data,
  };
};

export const loadingStatesToChart = () => {
  return {
    type: DATA_CHART_LOADING,
  };
};
