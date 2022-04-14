import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import apiWeatherReducer from "./apiWeatherReducer";

export default combineReducers({
  searchReducer,
  apiWeatherReducer,
});
