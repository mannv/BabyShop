import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/RegisterScreenStyle'
import BabyLogoLarge from '../Components/Screen/BabyLogoLarge'
import RegisterForm from '../Components/Screen/RegisterForm'

class RegisterScreen extends Component {

  backLoginScreen = () => {
    this.props.navigation.goBack();
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.container, {padding: 50}]}>
          <RegisterForm backLoginScreen={() => this.backLoginScreen()}></RegisterForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
