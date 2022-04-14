import { ADD_SEARCH } from "../actions/search.action";

const initialState = "";

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SEARCH:
      return action.payload;
    default:
      return state;
  }
}
