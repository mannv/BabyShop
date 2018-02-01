/**
 * Created by man.nv on 1/23/18.
 */
import React from 'react'
import {TextInput, View, Text, Picker} from 'react-native'
import styles from './control.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Metrics, Colors} from '../../Themes'
function renderError(message) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon style={{color: Colors.fire}} name={'error'} size={Metrics.icons.tiny}></Icon>
      <Text style={{color: Colors.fire}}>{message}</Text>
    </View>
  )
}

export function input(props) {
  const {input, meta, errors, ...inputProps} = props;
  let isError = meta.submitFailed && meta.error;
  let errorMessage = meta.error;
  if(errors != undefined && errors.hasOwnProperty(input.name)) {
    isError = true;
    errorMessage = errors[input.name];
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={[styles.inputText, isError ? {borderColor: Colors.fire} : {}]}
                 {...inputProps}
                 underlineColorAndroid={'transparent'}
                 onChangeText={input.onChange}
                 onBlur={input.onBlur}
                 onFocus={input.onFocus}
                 value={input.value}
      />
      {isError ? renderError(errorMessage) : null}
    </View>
  )
}

export function password(props) {
  const {input, meta, errors, ...inputProps} = props;
  let isError = meta.submitFailed && meta.error;
  let errorMessage = meta.error;
  if(errors != undefined && errors.hasOwnProperty(input.name)) {
    isError = true;
    errorMessage = errors[input.name];
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={[styles.inputText, isError ? {borderColor: Colors.fire} : {}]}
                 {...inputProps}
                 underlineColorAndroid={'transparent'}
                 secureTextEntry={true}
                 onChangeText={input.onChange}
                 onBlur={input.onBlur}
                 onFocus={input.onFocus}
                 value={input.value}
      />
      {isError ? renderError(errorMessage) : null}
    </View>
  )
}
export function picker(props) {
  const {input, meta, errors, options, ...inputProps} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <Picker
        {...inputProps}
        selectedValue={input.value}
        onValueChange={input.onChange}>
        {
          options.map((item, key) => {
            return (
              <Picker.Item key={key} label={item.language} value={item.locale} />
            )
          })
        }
      </Picker>
    </View>
  )
}
