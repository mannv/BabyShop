// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class CartScreenAPI extends BaseAPI {

  getCartDetail = (ids = [], responseCallback) => {
    this.get('cart?id=' + ids.join(','), responseCallback);
  }

  checkout = (carts = [], responseCallback) => {
    this.post('cart', {cart: JSON.stringify(carts)}, responseCallback);
  }
}
