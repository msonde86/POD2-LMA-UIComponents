import { LOGIN_SUCCESS } from "../app-strings/redux-action-types";


const initialState = {
  token: ""
}

const rootReducer = (state = initialState, action) => {

  if (action.type === LOGIN_SUCCESS) {
    console.log("action->",action)
    return Object.assign({}, state, {
      token: action.payload
    });
  }
  return state
}

export default rootReducer 