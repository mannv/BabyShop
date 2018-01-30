/**
 * Created by man.nv on 1/11/18.
 */

import {AUTH_LOGIN, AUTH_LOGOUT} from '../Actions/AuthAction'

const defaultState = {auth: undefined};

export const reducer = (state = defaultState, action) => {
  if (action.type == AUTH_LOGIN) {
    return {
      ...state,
      auth: action.auth
    }
  }

  if (action.type == AUTH_LOGOUT) {
    return {
      ...state,
      auth: undefined
    }
  }

  return state;
}
