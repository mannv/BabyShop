/**
 * Created by man.nv on 1/11/18.
 */
export const DELETE_CART_ITEM = 'DELETE_CART_ITEM'
export const DELETE_CART_ITEM_CANCEL = 'DELETE_CART_ITEM_CANCEL'

export function deleteCartItem(id) {
  return {
    type: DELETE_CART_ITEM,
    id: id
  }
}

export function deleteCartItemCancel() {
  return {
    type: DELETE_CART_ITEM_CANCEL
  }
}

