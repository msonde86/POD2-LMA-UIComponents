import { LOGIN_SUCCESS } from "../app-strings/redux-action-types";

export function loginSuccess(token) {
    return { type: LOGIN_SUCCESS, payload: token }
};