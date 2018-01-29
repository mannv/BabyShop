import React from 'react'
import * as ReactNavigation from 'react-navigation'
import {connect} from 'react-redux'
import {Text} from 'react-native'
import MainNavigation from './MainNavigation'
import GuestNavigation from './GuestNavigation'

// here is our redux-aware smart component
function ReduxNavigation(props) {
  const {auth, rehydrated} = props;
  console.log('rehydrated: ' + rehydrated);
  if(!rehydrated) {
    return <Text></Text>
  }

  if (auth == undefined) {
    return <GuestNavigation />
  }
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
