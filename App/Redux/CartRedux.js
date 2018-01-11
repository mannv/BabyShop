/**
 * Created by man.nv on 1/11/18.
 */

import Immutable from 'seamless-immutable'
import {CART_ADD, CART_DECREASE, CART_INCREASE, CART_DELETE, CART_EMPTY} from './Actions/CartAction'

const cartDefault = {cart: []};

const increase = (cart, id, amount) => {
  cart.map((e) => {
    if(e.id != id) {
      return e;
    }
    return {...e, amount: e.amount + amount}
  });
  return cart;
}

export const reducer = (state = cartDefault, action) => {
  if (action.type == CART_ADD) {
    let cart = Immutable.asMutable(state.cart);
    let eixst = cart.filter((item) => {
      return item.id == action.id
    });
    if (eixst.length) {
      //increase
      return {
        ...state,
        cart: state.cart.map(e => {
          if(e.id != action.id) {
            return e;
          }
          return {...e, amount: e.amount + action.amount};
        })
      }
    } else {
      return {
        ...state,
        cart: [{id: action.id, amount: action.amount}].concat(state.cart)
      }
    }

  }

  if (action.type == CART_INCREASE) {
    return {
      ...state,
      cart: state.cart.map(e => {
        if(e.id != action.id) {
          return e;
        }
        return {...e, amount: e.amount + 1};
      })
    }
  }

  if (action.type == CART_DECREASE) {
    return {
      ...state,
      cart: state.cart.map(e => {
        if(e.id != action.id) {
          return e;
        }
        return {...e, amount: e.amount - 1};
      })
    }
  }

  if (action.type == CART_DELETE) {
    let cart = Immutable.asMutable(state.cart);
    let pIndex = -1;
    cart.map((item, index) => {
      if (item.id == action.id) {
        pIndex = index;
      }
    });
    if (pIndex > -1) {
      cart.splice(pIndex, 1);
    }
    return {
      ...state,
      cart: cart
    }
  }

  if (action.type == CART_EMPTY) {
    return {
      ...state,
      cart: []
    }
  }

  return state;
}
