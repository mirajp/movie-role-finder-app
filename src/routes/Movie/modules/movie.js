import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_MOVIE_DATA = 'SET_MOVIE_DATA'

// ------------------------------------
// Actions
// ------------------------------------
export function setMovieData (movieData = {}) {
  return {
    type    : SET_MOVIE_DATA,
    payload : {
      movieData
    }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const fetchMovieData = (movieId) => {
  return (dispatch, getState) => {
    request
      .get(`http://movieroles.ddns.net:3001/movie/${movieId}`)
      .end((err, res) => {
        const movieData = res.body;
        dispatch(setMovieData(movieData));
      });
  };
}

export const actions = {
  setMovieData,
  fetchMovieData
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_MOVIE_DATA] : (state, action) => (Object.assign({}, state, action.payload.movieData))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  movie: {}
  , actors: []
  , directors: []
};

export default function movieReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
