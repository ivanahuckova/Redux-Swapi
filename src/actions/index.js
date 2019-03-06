import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const fetching = () => ({
  type: FETCHING
});

export const success = characters => ({
  type: SUCCESS,
  payload: { characters }
});

export const failure = error => ({
  type: FAILURE,
  payload: { error }
});

export const fetchData = () => dispatch => {
  axios
    .get('http://gabe.mockable.io/quotes')
    .then(data => {
      dispatch({ type: SUCCESS, payload: data.data });
    })
    .catch(error => {
      dispatch({ type: FAILURE });
    });
};
