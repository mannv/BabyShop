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

export const SHOW_POPUP_WAITING = 'SHOW_POPUP_WAITING'
export const HIDE_POPUP_WAITING = 'HIDE_POPUP_WAITING'

export function showWaiting() {
  return {
    type: SHOW_POPUP_WAITING
  }
}

export function hideWaiting() {
  return {
    type: HIDE_POPUP_WAITING
  }
}
