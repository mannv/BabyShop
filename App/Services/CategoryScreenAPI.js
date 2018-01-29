// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'
export default class CategoryScreenAPI extends BaseAPI {

  categoryProduct = (categoryId, page = 1, config, responseCallback) => {
    this.get(`categories/${categoryId}/products?page=${page}`, responseCallback, config);
  }

  searchProduct = (name, page = 1, responseCallback) => {
    this.get(`products?name=${name}&page=${page}`, responseCallback);
  }
}
