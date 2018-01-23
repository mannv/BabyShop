import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../Styles/LoginFormStyle'
import I18n from '../../I18n'
import Login from '../../Redux/Form/Login'
import {connect} from 'react-redux'

class LoginForm extends Component {
  submitForm = (values) => {
    console.log(JSON.stringify(values));
  }

  registerScreen() {
    this.props.navigation.navigate('RegisterScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('Heading_Login')}</Text>
        <Login
          registerScreen={() => this.registerScreen()}
          onSubmit={(values) => this.submitForm(values)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {navigation: state.navigate.navigation}
}

export default connect(mapStateToProps)(LoginForm)
