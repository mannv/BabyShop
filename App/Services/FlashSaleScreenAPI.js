// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class FlashSaleScreenAPI extends BaseAPI {

  flashSaleDetail = (page = 1, responseCallback) => {
    this.get('flashsale/detail?page=' + page, responseCallback);
  }
}
