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
      // 30 second timeout...
      timeout: 30000
    });
  }

  get = (endpoint, responseCallback) => {
    console.log(`GET: ${endpoint}`);
    this.api.get(endpoint).then((json) => {
      if(json.problem == NONE) {
        let response = {
          status: json.problem == NONE,
          data: json.data.data
        };
        if(json.data.hasOwnProperty('meta') && json.data.meta.hasOwnProperty('pagination')) {
          response.pagination = json.data.meta.pagination;
        }
        return response;
      } else {
        console.log(json);
        return {status: false};
      }
    }).then((json) => {
      responseCallback(json);
    }).catch((e) => {
      console.log('Error2: ' + e.message);
    });
  }
}
