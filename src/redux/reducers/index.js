import { combineReducers } from "redux";
import {
  forecastDataReducer as forecastData,
  currentWeathersReducer as currentWeathersData,
} from "./forecastReducer";

const reducers = {
  forecastData,
  currentWeathersData,
};

export default combineReducers(reducers);
