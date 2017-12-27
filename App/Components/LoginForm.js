import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from './Styles/LoginFormStyle'
import I18n from '../I18n'
import RoundedButton from '../Components/RoundedButton'


export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  _loginAction = () => {
    console.log(this.state.email.toLowerCase());
    console.log(this.state.password);
  }

  _openRegisterForm = () => {
    this.props.navigation.navigate('RegisterScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('Login_Heading')}</Text>
        <View style={styles.form}>
          <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email}
                     keyboardType='email-address' style={[styles.inputText, {marginTop: 20}]}
                     placeholder={I18n.t('Placeholder_Email_Address')}/>
          <TextInput onChangeText={(password) => this.setState({password})}
                     value={this.state.password} style={[styles.inputText, {marginTop: 20}]}
                     placeholder={I18n.t('Placeholder_Password')} secureTextEntry={true}/>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <RoundedButton style={{width: 80}} text={I18n.t('signIn')} onPress={() => this._loginAction()}/>
            </View>
            <View style={{flex: 2}}>
              <TouchableOpacity onPress={() => this._openRegisterForm()}>
                <Text style={styles.registerLink}>{I18n.t('Link_Register_New_Account')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
