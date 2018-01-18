// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class CategoryScreenAPI extends BaseAPI {

  categoryProduct = (categoryId, responseCallback) => {
    this.get(`categories/${categoryId}/products`, responseCallback);
  }
}
