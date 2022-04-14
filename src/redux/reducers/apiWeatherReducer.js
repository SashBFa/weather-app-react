import { ADD_WEATHER } from "../actions/apiWeather.action";

const initialState = "";

export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_WEATHER:
      return action.payload;
    default:
      return state;
  }
}
