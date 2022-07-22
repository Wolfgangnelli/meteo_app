import {
  FORECAST_DATA_REQUEST,
  FORECAST_DATA_SUCCESS,
  FORECAST_DATA_FAIL,
  FORECAST_NOT_SELECTED,
  FORECAST_NOT_SELECTED_UPDATE,
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
} from "./actionTypes";
import axios from "axios";

export const getFiveDaysForecastData =
  (lat = "", lon = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: FORECAST_DATA_REQUEST,
      });

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=beaad418867de3cd48edeb847226d39a`
      );

      dispatch({
        type: FORECAST_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FORECAST_DATA_FAIL,
        payload: error,
      });
    }
  };

export const getCurrentWeather =
  (lat = "", lon = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: CURRENT_WEATHER_REQUEST,
      });

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=beaad418867de3cd48edeb847226d39a`
      );

      dispatch({
        type: CURRENT_WEATHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CURRENT_WEATHER_FAIL,
        payload: error,
      });
    }
  };

export const getForecastNotSelected =
  (id = "") =>
  (dispatch) => {
    dispatch({
      type: FORECAST_NOT_SELECTED,
      payload: id,
    });
  };

export const updateForecastNotSelected =
  (id = "") =>
  (dispatch) => {
    dispatch({
      type: FORECAST_NOT_SELECTED_UPDATE,
      payload: id,
    });
  };
