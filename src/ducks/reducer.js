const UPDATE_NAME = "UPDATE_NAME";

const initialState = {
  name: ""
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export default reducer;
// initial state

// constants

// action creators

// reducer
