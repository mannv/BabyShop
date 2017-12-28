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
      fullname: '',
      phoneNumber: '',
      email: '',
      password: '',
      rePassword: ''
    }
  }

  registerAction = () => {
    console.log(this.state);
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('Heading_Register')}</Text>
        <View style={styles.form}>

          <Text style={styles.label}>{I18n.t('Label_Fullname')}</Text>
          <TextInput onChangeText={(fullname) => this.setState({fullname})} value={this.state.fullname}
                    style={styles.inputText} />

          <Text style={styles.label}>{I18n.t('Label_Phone_number')}</Text>
          <TextInput onChangeText={(phoneNumber) => this.setState({phoneNumber})} value={this.state.phoneNumber}
                     keyboardType='phone-pad' style={styles.inputText}
          />

          <Text style={styles.label}>{I18n.t('Label_Email_address')}</Text>
          <TextInput onChangeText={(email) => this.setState({email})} value={this.state.email}
                     keyboardType='email-address' style={styles.inputText}
                     />

          <Text style={styles.label}>{I18n.t('Label_Password')}</Text>
          <TextInput onChangeText={(password) => this.setState({password})}
                     value={this.state.password} style={styles.inputText}
                     secureTextEntry={true}/>

          <Text style={styles.label}>{I18n.t('Label_Enter_password_again')}</Text>
          <TextInput onChangeText={(rePassword) => this.setState({rePassword})}
                     value={this.state.rePassword} style={styles.inputText}
                     secureTextEntry={true}/>

          <View style={{paddingTop: 20, flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <RoundedButton style={{width: 80}} text={I18n.t('signUp')} onPress={() => this.registerAction()}/>
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
