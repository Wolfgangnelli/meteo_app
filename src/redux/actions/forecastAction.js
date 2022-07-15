import {
  FORECAST_DATA_REQUEST,
  FORECAST_DATA_SUCCESS,
  FORECAST_DATA_FAIL,
} from "./actionTypes";
import axios from "axios";

export const getForecastData =
  (lat = "", lon = "") =>
  async (dispatch) => {
    try {
      dispatch({
        type: FORECAST_DATA_REQUEST,
      });

      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`
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
