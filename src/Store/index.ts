import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { arraySizeMiddleware } from "../Middlewares";
import rootReducer from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, arraySizeMiddleware))
);

export default store;
