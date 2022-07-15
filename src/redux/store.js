import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import promise from "redux-promise-middleware";
import storeReducers from "./reducers";

const initialStore = {};

const middleware = [thunk, promise, logger];

const store = createStore(
  initialStore,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
