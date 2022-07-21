import {
  FORECAST_DATA_REQUEST,
  FORECAST_DATA_SUCCESS,
  FORECAST_DATA_FAIL,
  FORECAST_NOT_SELECTED,
  FORECAST_NOT_SELECTED_UPDATE,
} from "../actions/actionTypes";

const initialState = { forecasts: [], forecastsNotSelected: [] };

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
    case FORECAST_NOT_SELECTED_UPDATE:
      return {
        ...state,
        forecastsNotSelected: state.forecasts.filter(
          (item) => item.city.id !== payload
        ),
      };
    default:
      return state;
  }
};
