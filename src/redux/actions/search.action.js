export const ADD_SEARCH = "ADD_SEARCH";

export const addSearch = (data) => {
  return (dispatch) => {
    return dispatch({ type: ADD_SEARCH, payload: data });
  };
};
