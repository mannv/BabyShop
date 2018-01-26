/**
 * Created by man.nv on 1/11/18.
 */
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export function login(user = {}) {
  console.log('Login with params: ' + JSON.stringify(user));
  return {
    type: AUTH_LOGIN,
    auth: user
  }
}

export function logout() {
  return {
    type: AUTH_LOGOUT
  }
}
