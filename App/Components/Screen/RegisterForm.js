import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/RegisterFormStyle'
import I18n from '../../I18n'
import {connect} from 'react-redux'
import Register from '../../Redux/Form/Register'
class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  submitForm(values) {
    console.log(JSON.stringify(values));
  }

  loginScreen() {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('Heading_Register')}</Text>
        <Register
          onSubmit={(values) => this.submitForm(values)}
          loginScreen={() => this.loginScreen()}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps)(RegisterForm);
