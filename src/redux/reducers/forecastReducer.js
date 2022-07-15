import {
  FORECAST_DATA_REQUEST,
  FORECAST_DATA_SUCCESS,
  FORECAST_DATA_FAIL,
} from "../actions/actionTypes";

const initialState = { forecast: {} };

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
      return {
        loading: false,
        forecast_data: payload,
      };
    case FORECAST_DATA_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
