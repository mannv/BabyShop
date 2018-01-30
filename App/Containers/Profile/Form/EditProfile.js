/**
 * Created by man.nv on 1/23/18.
 */
import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {reduxForm, Field} from 'redux-form'
import {connect} from 'react-redux'
import {input, picker} from '../../../Redux/Form/control'
import I18n from '../../../I18n'
import RoundedButton from '../../../Components/RoundedButton'
import {required, email} from '../../../Redux/Form/validate'

const lower = value => value && value.toLowerCase()

function InitializeFromStateForm(props) {
  const locales = [
    {locale: 'en', language: 'English'},
    {locale: 'vi', language: 'Viet Nam'}
  ]
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
        editable={false}
      />
      <Field
        errors={props.errors}
        name={'locale'}
        label={I18n.t('language')}
        component={picker}
        options={locales}
      />
      <View style={{paddingTop: 20, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <RoundedButton text={I18n.t('btn_update')} onPress={props.handleSubmit}/>
        </View>
      </View>
    </View>
  )
}

EditProfile = reduxForm({
  form: 'EditProfile'
})(InitializeFromStateForm);

const mapStateToProps = (state) => {
  return {
    initialValues: state.auth.auth
  }
}

EditProfile = connect(mapStateToProps)(EditProfile);

export default EditProfile;

