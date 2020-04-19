import axios from "axios";
import {
  SET_DATA,
  DATA_LOADING,
  LOAD_ERROR,
  SET_DATA_CHART,
  DATA_CHART_LOADING,
  NEWS_LOADING,
  SET_NEWS,
  LOAD_NEWS_ERROR,
  SET_DATA_STATE,
  LOAD_ERROR_STATE,
  DATA_LOADING_STATE,
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
                return true;
              }
              return false;
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

export const loadNews = () => {
  return (dispatch) => {
    dispatch(loadingNews());

    return axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=globo&q=coronavírus&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      )

      .then((response) => {
        // console.log(response);
        dispatch(setNews(response.data.articles));
      })
      .catch((error) => {
        dispatch(loadingStates(error));
      });
  };
};

export const loadDataState = (stateToSearch) => {
  return (dispatch) => {
    dispatch(loadingState());

    return axios
      .get(
        `https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=${stateToSearch}`
      )

      .then((response) => {
        let totalDeaths = 0;
        let totalCases = 0;
        let cities = [];

        response.data.results.forEach((data) => {
          if (!cities.some((e) => e.name === data.city)) {
            cities.push({
              name: data.city,
              deaths: data.deaths,
              confirmed: data.confirmed,
            });

            totalDeaths += data.deaths;
            totalCases += data.confirmed;
          }
        });

        dispatch(
          setDataState({
            deaths: totalDeaths,
            cases: totalCases,
            data: cities,
          })
        );
      })
      .catch((error) => {
        dispatch(loadingStates(error));
      });
  };
};

//-------------------------DATA--------------------------------------------

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
//-------------------------DATA CHART--------------------------------------------

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
//-------------------------NEWS--------------------------------------------
export const loadingNews = () => {
  return {
    type: NEWS_LOADING,
  };
};

export const loadNewsError = (error) => {
  return {
    type: LOAD_NEWS_ERROR,
    payload: error,
  };
};

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news,
  };
};
//-------------------------DATA/STATE--------------------------------------------

export const loadingState = () => {
  return {
    type: DATA_LOADING_STATE,
  };
};

export const loadErrorState = (error) => {
  return {
    type: LOAD_ERROR_STATE,
    payload: error,
  };
};

export const setDataState = (data) => {
  return {
    type: SET_DATA_STATE,
    payload: data,
  };
};
