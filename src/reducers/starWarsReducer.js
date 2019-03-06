import * as types from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING:
      return {
        ...state,
        fetching: true
      };
    case types.SUCCESS:
      return {
        ...state,
        fetching: false,
        characters: action.payload
      };
    case types.FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
