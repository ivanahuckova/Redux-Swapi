import * as types from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};
