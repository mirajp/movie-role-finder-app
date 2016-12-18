import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_DIRECTOR_DATA = 'SET_DIRECTOR_DATA'

// ------------------------------------
// Actions
// ------------------------------------
export function setDirectorData (directorData = {}) {
  return {
    type    : SET_DIRECTOR_DATA,
    payload : {
      directorData
    }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const fetchDirectorData = (directorId) => {
  return (dispatch, getState) => {
    request
      .get(`http://movieroles.ddns.net:3001/director/${directorId}`)
      .end((err, res) => {
        const directorData = res.body;
        dispatch(setDirectorData(directorData));
      });
  };
}

export const actions = {
  setDirectorData,
  fetchDirectorData
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_DIRECTOR_DATA] : (state, action) => (Object.assign({}, state, action.payload.directorData))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  name: ''
  , movies: []
  , actors: []
};

export default function directorReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
