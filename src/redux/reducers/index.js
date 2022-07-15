import { combineReducers } from "redux";
import { forecastDataReducer as forecastData } from "./forecastReducer";

const reducers = {
  forecastData,
};

export default combineReducers(reducers);
