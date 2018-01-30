/**
 * Created by man.nv on 1/30/18.
 */
import React, {Component} from "react";
import axios from 'axios';

export default class MyComponent extends Component {
  listRequest = [];

  makeRequest() {
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    this.listRequest.push(source);
    return {
      cancelToken: source.token
    };
  }

  componentWillUnmount() {
    if (this.listRequest.length == 0) {
      console.log('khong co request nao');
      return;
    }
    this.listRequest.map(request => request.cancel());
  }

}
