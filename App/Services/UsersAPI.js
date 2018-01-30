// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class UsersAPI extends BaseAPI {
  login = (params = {}, responseCallback) => {
    this.post('auth/login', params, responseCallback);
  }
  register = (params = {}, responseCallback) => {
    this.post('users', params, responseCallback);
  }
  update = (params = {}, responseCallback) => {
    this.put('users', params, responseCallback);
  }
}
