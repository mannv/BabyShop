/**
 * Created by man.nv on 1/11/18.
 */

import {DELETE_CART_ITEM, DELETE_CART_ITEM_CANCEL} from '../Actions/PopupAction'

const defaultState = {
  deleteCartItem: {
    visible: false,
    id: 0
  }
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
  return state;
}
