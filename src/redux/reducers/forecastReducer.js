import {
  FORECAST_DATA_REQUEST,
  FORECAST_DATA_SUCCESS,
  FORECAST_DATA_FAIL,
  FORECAST_NOT_SELECTED,
  FORECAST_NOT_SELECTED_UPDATE,
  CURRENT_WEATHER_REQUEST,
  CURRENT_WEATHER_SUCCESS,
  CURRENT_WEATHER_FAIL,
} from "../actions/actionTypes";

const initialState = { forecasts: [] };

export const forecastDataReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case FORECAST_DATA_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case FORECAST_DATA_SUCCESS:
      const existCity = state.forecasts.find(
        (item) => item.city.id === payload.city.id
      );
      if (existCity) {
        return {
          ...state,
          forecasts: state.forecasts.map((element) =>
            element.city.id === existCity.city.id ? payload : element
          ),
        };
      } else {
        return {
          loading: false,
          forecasts: [...state.forecasts, payload],
        };
      }
    case FORECAST_DATA_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

const initState2 = { currentWeathers: [], forecastsNotSelected: [] };

export const currentWeathersReducer = (
  state = initState2,
  { payload, type }
) => {
  switch (type) {
    case CURRENT_WEATHER_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CURRENT_WEATHER_SUCCESS:
      const existCity = state.currentWeathers.find(
        (item) => item.id === payload.id
      );
      if (existCity) {
        return {
          ...state,
          currentWeathers: state.currentWeathers.map((element) =>
            element.id === existCity.id ? payload : element
          ),
        };
      } else {
        return {
          loading: false,
          currentWeathers: [...state.currentWeathers, payload],
        };
      }
    case CURRENT_WEATHER_FAIL:
      return {
        loading: false,
        error: payload,
      };
    case FORECAST_NOT_SELECTED_UPDATE:
      return {
        ...state,
        forecastsNotSelected: state.currentWeathers.filter(
          (item) => item.id !== payload
        ),
      };
    default:
      return state;
  }
};
