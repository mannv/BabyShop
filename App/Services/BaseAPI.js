// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import {NONE} from 'apisauce'
import Config from 'react-native-config'

const API_URL = Config.API_URL;
export default class BaseAPI {
  api = null;
  constructor() {
    this.api = apisauce.create({
      // base URL is read from the "constructor"
      baseURL: API_URL,
      // here are some default headers
      headers: {
        'Cache-Control': 'no-cache',
        'Accept': 'application/babyshop.api.v1+json'
      },
      // 10 second timeout...
      timeout: 10000
    });
  }

  get = (endpoint, responseCallback) => {
    this.api.get(endpoint).then((data) => {
      return {status: data.problem == NONE, data: data.data.data};
    }).then((json) => {
      responseCallback(json);
    }).catch((e) => {
      console.log('Error2: ' + e.message);
    });
  }
}
