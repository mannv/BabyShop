// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import {NONE} from 'apisauce'
import Config from 'react-native-config'

const API_URL = Config.API_URL;
export default class BaseAPI {
  api = null;

  constructor(props) {
    header = {};
    if(props.hasOwnProperty('auth') && props.auth.token != undefined) {
      console.log('Token: ' + props.auth.token);
      header['Authorization'] = `Bearer ${props.auth.token}`;
    }
    this.api = apisauce.create({
      // base URL is read from the "constructor"
      baseURL: API_URL,
      // here are some default headers
      headers: {
        ...header,
        'Cache-Control': 'no-cache',
        'Accept': 'application/babyshop.api.v1+json'
      },
      // 30 second timeout...
      timeout: 30000
    });
  }

  processResponse(json) {
    if (json.problem == NONE) {
      let response = {
        status: json.problem == NONE,
        data: json.data.data
      };
      if (json.data.hasOwnProperty('meta') && json.data.meta.hasOwnProperty('pagination')) {
        response.pagination = json.data.meta.pagination;
      }
      return response;
    } else {
      console.log('problem: ' + json.problem);
      return {status: false};
    }
  }

  get = (endpoint, responseCallback, config = undefined) => {
    console.log(`GET: ${endpoint}`);
    this.api.get(endpoint, undefined, config).then((json) => this.processResponse(json)).then((json) => {
      responseCallback(json);
    }).catch((e) => {
      console.log('Error: ' + e.message);
    });
  }

  post = (endpoint, params = {}, responseCallback) => {
    console.log(`POST: ${endpoint}`);
    this.api.post(endpoint, params).then((json) => this.processResponse(json)).then((json) => {
      responseCallback(json);
    }).catch((e) => {
      console.log('Error: ' + e.message);
    });
  }
}
