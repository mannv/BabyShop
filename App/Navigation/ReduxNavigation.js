import React from 'react'
import * as ReactNavigation from 'react-navigation'
import {connect} from 'react-redux'
import {Text} from 'react-native'
import MainNavigation from './MainNavigation'
import GuestNavigation from './GuestNavigation'
import I18n from '../I18n'
// here is our redux-aware smart component
function ReduxNavigation(props) {
  const {auth, rehydrated} = props;
  if(!rehydrated) {
    return <Text></Text>
  }
  if (auth == undefined) {
    I18n.locale = 'en';
    return <GuestNavigation />
  }
  I18n.locale = auth.locale;
  return <MainNavigation />
}

const mapStateToProps = (state) => {
  let rehydrated = undefined;
  if(state._persist != undefined) {
    rehydrated = state._persist.rehydrated;
  }
  return {
    auth: state.auth.auth,
    rehydrated
  };
}
export default connect(mapStateToProps)(ReduxNavigation)
