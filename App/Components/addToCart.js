/**
 * Created by man.nv on 1/4/18.
 */
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducers from './reducers'

module.exports = {
  add: function (productId) {
    const config = {
      key: 'add_to_cart',
      storage
    }

    const reducer = persistCombineReducers(config, reducers);
  }
}
