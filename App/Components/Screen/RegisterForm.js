import React, {Component} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/RegisterFormStyle'
import I18n from '../../I18n'
import {connect} from 'react-redux'
import Register from '../../Redux/Form/Register'
import MyComponent from '../../Basic/MyComponent'
import UsersAPI from '../../Services/UsersAPI'
import {VALIDATE_CODE} from '../../Services/BaseAPI'
import {hideWaiting, showWaiting} from '../../Redux/Actions/PopupAction'
import {reset} from 'redux-form';
class RegisterForm extends MyComponent {
  api = null;
  constructor(props) {
    super(props);
    this.api = new UsersAPI(props);
    this.state = {
      errors: {}
    }
  }


  componentWillMount() {
    this.props.resetForm();
  }


  submitForm(values) {
    this.api.cancelToken = this.makeRequest();
    this.props.showWaiting();
    this.api.register(values, (json) => {
      this.props.hideWaiting();
      if(json.status) {
        this.setState({errors: {}});
        this.loginScreen();
      } else {
        if(json.status_code == VALIDATE_CODE) {
          let errors = {};
          for(const key in json.data.errors) {
            errors[key] = json.data.errors[key][0];
          }
          this.setState({errors});
        }
      }
    });
  }

  loginScreen() {
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('Heading_Register')}</Text>
        <Register
          errors={this.state.errors}
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

const mapDispatchToProps = (dispatch) => {
  return {
    hideWaiting: () => dispatch(hideWaiting()),
    showWaiting: () => dispatch(showWaiting()),
    resetForm: () => {
      console.log('Reset form');
      dispatch(reset('register'));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
