/**
 * Created by man.nv on 1/11/18.
 */

import {DELETE_CART_ITEM, DELETE_CART_ITEM_CANCEL, SHOW_POPUP_WAITING, HIDE_POPUP_WAITING} from '../Actions/PopupAction'

const defaultState = {
  deleteCartItem: {
    visible: false,
    id: 0
  },
  waiting: false
}
export const reducer = (state = defaultState, action) => {
  if (action.type == DELETE_CART_ITEM) {
    return {
      ...state,
      deleteCartItem: {
        visible: true,
        id: action.id
      }
    }
  }

  if (action.type == DELETE_CART_ITEM_CANCEL) {
    return {
      ...state,
      deleteCartItem: {
        visible: false,
        id: 0
      }
    }
  }

  if (action.type == SHOW_POPUP_WAITING) {
    return {
      ...state,
      waiting: true
    }
  }

  if (action.type == HIDE_POPUP_WAITING) {
    return {
      ...state,
      waiting: false
    }
  }

  return state;
}
