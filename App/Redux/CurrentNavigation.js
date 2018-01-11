/**
 * Created by man.nv on 1/11/18.
 */

import {CURRENT_NAVIGATION} from './Actions/NavigationAction'

export const reducer = (state = {}, action) => {
  if (action.type == CURRENT_NAVIGATION) {
    return {
      ...state,
      navigation: action.navigation
    }
  }
  return state;
}
