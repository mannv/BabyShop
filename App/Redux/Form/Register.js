/**
 * Created by man.nv on 1/23/18.
 */
import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {input, password} from './control'
import I18n from '../../I18n'
import RoundedButton from '../../Components/RoundedButton'
import styles from '../../Components/Styles/RegisterFormStyle'
import {required, email, max32, min6, confirmPassword} from './validate'

const lower = value => value && value.toLowerCase()

function Register(props) {
  return (
    <View>
      <Field
        errors={props.errors}
        name={'name'}
        label={I18n.t('Label_Fullname')}
        component={input}
        validate={[required]}
      />
      <Field
        errors={props.errors}
        name={'phone'}
        label={I18n.t('Label_Phone_number')}
        component={input}
        keyboardType={'phone-pad'}
        validate={[required]}
      />
      <Field
        errors={props.errors}
        name={'email'}
        label={I18n.t('Label_Email_address')}
        component={input}
        keyboardType={'email-address'}
        validate={[required, email]}
        normalize={lower}
      />
      <Field
        errors={props.errors}
        name={'password'}
        label={I18n.t('Label_Password')}
        component={password}
        validate={[required, max32, min6]}
      />
      <Field
        errors={props.errors}
        name={'password_confirmation'}
        label={I18n.t('Label_Enter_password_again')}
        component={password}
        validate={[required, max32, min6, confirmPassword]}
      />
      <View style={{paddingTop: 20, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <RoundedButton text={I18n.t('signUp')} onPress={props.handleSubmit}/>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity onPress={props.loginScreen}>
            <Text style={styles.backLink}>{I18n.t('signIn')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default reduxForm({
  form: 'register',
  // validate: (values) => {
  //   const errors = {};
  //   if (values.rePassword && values.rePassword != values.password) {
  //     errors.rePassword = 'Re password match same password'
  //   }
  //   return errors;
  // }
})(Register);
