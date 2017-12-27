import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../Styles/RegisterFormStyle'
import I18n from '../../I18n'
import RoundedButton from '../RoundedButton'

export default class RegisterForm extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

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

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('Register_Heading')}</Text>
        <View style={styles.form}>
          <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email}
                     keyboardType='email-address' style={[styles.inputText, {marginTop: 20}]}
                     placeholder={I18n.t('Placeholder_Email_Address')}/>
          <TextInput onChangeText={(password) => this.setState({password})}
                     value={this.state.password} style={[styles.inputText, {marginTop: 20}]}
                     placeholder={I18n.t('Placeholder_Password')} secureTextEntry={true}/>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <RoundedButton style={{width: 80}} text={I18n.t('signUp')} onPress={() => this._loginAction()}/>
            </View>
            <View style={{flex: 2}}>
              <TouchableOpacity onPress={() => this.props.backLoginScreen()}>
                <Text style={styles.backLink}>{I18n.t('signIn')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
