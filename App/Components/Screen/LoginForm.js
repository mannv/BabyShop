import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import styles from '../Styles/LoginFormStyle'
import I18n from '../../I18n'
import Login from '../../Redux/Form/Login'
import {connect} from 'react-redux'
import UsersAPI from '../../Services/UsersAPI'
import {hideWaiting, showWaiting} from '../../Redux/Actions/PopupAction'
import {login} from '../../Redux/Actions/AuthAction'
class LoginForm extends Component {
  api = null;
  constructor(props) {
    super(props);
    this.api = new UsersAPI(props);
  }

  submitForm = (values) => {
    this.props.showWaiting();
    this.api.login(values, (json) => {
      this.props.hideWaiting();
      if(json.data.hasOwnProperty('status') && json.data.status == -1) {
        setTimeout(() => {
          Alert.alert(I18n.t('email_or_password_is_incorrect'));
        }, 100);
      } else {
        this.props.login(json.data);
      }
    });
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
  return {
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps, {hideWaiting, showWaiting, login})(LoginForm)
