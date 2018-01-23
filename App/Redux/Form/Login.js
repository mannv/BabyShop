/**
 * Created by man.nv on 1/23/18.
 */
import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {input, password} from './control'
import I18n from '../../I18n'
import RoundedButton from '../../Components/RoundedButton'
import styles from '../../Components/Styles/LoginFormStyle'
import {required, email, max32, min6} from './validate'
const lower = value => value && value.toLowerCase()
function Login(props) {
  return (
    <View>
      <Field
        name={'email'}
        label={I18n.t('Label_Email_address')}
        component={input}
        keyboardType={'email-address'}
        validate={[required, email]}
        normalize={lower}
      />
      <Field
        name={'password'}
        label={I18n.t('Label_Password')}
        component={password}
        validate={[required, max32, min6]}
      />
      <View style={{paddingTop: 20, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <RoundedButton text={I18n.t('signIn')} onPress={props.handleSubmit}/>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={props.registerScreen}>
            <Text style={styles.registerLink}>{I18n.t('Link_Register_New_Account')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default reduxForm({
  form: 'login'
})(Login);
