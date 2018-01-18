// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class FlashSaleScreenAPI extends BaseAPI {

  flashSaleDetail = (responseCallback) => {
    this.get('flashsale/detail', responseCallback);
  }
}
