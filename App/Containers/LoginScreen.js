import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import BabyLogoLarge from '../Components/Screen/BabyLogoLarge'
import LoginForm from '../Components/Screen/LoginForm'

// Styles
import styles from './Styles/LoginScreenStyle'
import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'
class LoginScreen extends Component {

  componentDidMount() {
    this.props.setCurrentNavigation(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1}}>
          <BabyLogoLarge />
        </View>
        <View style={[styles.container, {flex: 2, padding: 50}]}>
          <LoginForm />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {setCurrentNavigation})(LoginScreen)
