import { LOGIN_SUCCESS, LOGOUT } from "../app-strings/redux-action-types";


const initialState = {
  token: ""
}

const rootReducer = (state = initialState, action) => {

  if (action.type === LOGIN_SUCCESS) {
    return Object.assign({}, state, {
      token: action.payload
    });
  }else if(action.type === LOGOUT){
    console.log("Logging out")
    return initialState
  }

  return state
}

export default rootReducer 