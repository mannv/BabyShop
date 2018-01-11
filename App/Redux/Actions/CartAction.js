/**
 * Created by man.nv on 1/11/18.
 */
export const CART_ADD = 'CART_ADD'
export const CART_INCREASE = 'CART_INCREASE'
export const CART_DECREASE = 'CART_DECREASES'
export const CART_DELETE = 'CART_DELETE'
export const CART_EMPTY = 'CART_EMPTY'

export function addToCart(id, amount) {
  return {
    type: CART_ADD,
    id: id,
    amount: amount
  }
}

export function increase(id) {
  return {
    type: CART_INCREASE,
    id: id
  }
}

export function decrease(id) {
  return {
    type: CART_DECREASE,
    id: id
  }
}

export function deleteProduct(id) {
  return {
    type: CART_DELETE,
    id: id
  }
}

export function emptyCart() {
  return {
    type: CART_EMPTY
  }
}
