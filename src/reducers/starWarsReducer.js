import * as types from '../actions';
const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  // Fill me in with the important reducers
  // action types should be FETCHING, SUCCESS and FAILURE
  // your switch statement should handle all of these cases.
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
        characters: state.characters.concat(action.payload)
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
