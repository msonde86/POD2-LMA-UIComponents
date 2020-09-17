import { LOGIN_SUCCESS, LOGOUT } from "../app-strings/redux-action-types";

export function loginSuccess(token) {
    return { type: LOGIN_SUCCESS, payload: token }
};

export function logout(){
    return {type: LOGOUT}
}