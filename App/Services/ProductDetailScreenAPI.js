// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class ProductDetailScreenAPI extends BaseAPI {

  productDetail = (id, responseCallback) => {
    this.get(`products/${id}`, responseCallback);
  }
}
