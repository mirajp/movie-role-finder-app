import request from 'superagent';

// ------------------------------------
// Constants
// ------------------------------------
export const SET_ACTOR_DATA = 'SET_ACTOR_DATA'

// ------------------------------------
// Actions
// ------------------------------------
export function setActorData (actorData = {}) {
  return {
    type    : SET_ACTOR_DATA,
    payload : {
      actorData
    }
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const fetchActorData = (actorId) => {
  return (dispatch, getState) => {
    request
      .get(`http://movieroles.ml:3001/actor/${actorId}`)
      .end((err, res) => {
        const actorData = res.body;
        dispatch(setActorData(actorData));
      });
  };
}

export const actions = {
  setActorData,
  fetchActorData
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ACTOR_DATA] : (state, action) => (Object.assign({}, state, action.payload.actorData))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  name: ''
  , gender: ''
  , directors: []
  , movies: []
};

export default function actorReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
