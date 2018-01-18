// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class MainScreenAPI extends BaseAPI {

  banners = (responseCallback) => {
    this.get('banners', responseCallback);
  }

  categories = (responseCallback) => {
    this.get('categories', responseCallback);
  }

  flashSale = (responseCallback) => {
    this.get('flashsale', responseCallback);
  }

  categoriesFeature = (responseCallback) => {
    this.get('categories/feature', responseCallback);
  }
}
