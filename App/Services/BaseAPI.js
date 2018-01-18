// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import {NONE} from 'apisauce'
import Config from 'react-native-config'

const API_URL = Config.API_URL;
export default class BaseAPI {
  api = null;

  init = () => {
    this.api = apisauce.create({
      // base URL is read from the "constructor"
      API_URL,
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
      console.log('Error: ' + e.message);
    });
  }
}

// let's return back our create method as the default.
// export default {
//   create
// }
