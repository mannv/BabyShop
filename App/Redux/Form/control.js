/**
 * Created by man.nv on 1/23/18.
 */
import React from 'react'
import {TextInput, View, Text} from 'react-native'
import styles from './control.styles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import {Metrics, Colors} from '../../Themes'
function renderError(message) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon style={{color: Colors.fire}} name='error' size={Metrics.icons.tiny}></Icon>
      <Text style={{color: Colors.fire}}>{message}</Text>
    </View>
  )
}

export function input(props) {
  const {input, meta, ...inputProps} = props;
  const isError = meta.submitFailed && meta.error;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={[styles.inputText, isError ? {borderColor: Colors.fire} : {}]}
                 {...inputProps}
                 onChangeText={input.onChange}
                 onBlur={input.onBlur}
                 onFocus={input.onFocus}
                 value={input.value}
      />
      {isError ? renderError(meta.error) : null}
    </View>
  )
}

export function password(props) {
  const {input, meta, ...inputProps} = props;
  const isError = meta.submitFailed && meta.error;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={[styles.inputText, isError ? {borderColor: Colors.fire} : {}]}
                 {...inputProps}
                 secureTextEntry={true}
                 onChangeText={input.onChange}
                 onBlur={input.onBlur}
                 onFocus={input.onFocus}
                 value={input.value}
      />
      {isError ? renderError(meta.error) : null}
    </View>
  )
}
