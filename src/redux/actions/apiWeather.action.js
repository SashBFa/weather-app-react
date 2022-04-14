import axios from "axios";

export const ADD_WEATHER = "ADD_WEATHER";

export const addWeather = (search) => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${process.env.REACT_APP_KEY}`
      )
      .then((element) => {
        dispatch({ type: ADD_WEATHER, payload: element.data });
      })
      .catch((err) => console.log(err));
  };
};
