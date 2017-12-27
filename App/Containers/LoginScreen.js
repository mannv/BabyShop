import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import BabyLogoLarge from '../Components/BabyLogoLarge'
import LoginForm from '../Components/LoginForm'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <BabyLogoLarge></BabyLogoLarge>
        </View>
        <View style={[styles.container, {flex: 2, padding: 50}]}>
          <LoginForm></LoginForm>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
