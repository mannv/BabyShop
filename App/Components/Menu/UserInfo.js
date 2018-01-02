import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, Touch, Alert} from 'react-native'
import styles from './UserInfoStyle'
import {Images} from '../../Themes'
import I18n from '../../I18n'
import TextLink from '../TextLink'
export default class UserInfo extends Component {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  logoutAction = () => {
    Alert.alert('logout');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={Images.avatar}></Image>
        <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
          <Text style={[styles.registerDate, {flex: 2}]}>{I18n.t('register_date', {date: '2017/10'})}</Text>
          <TextLink textAlign='right' style={[styles.logout, {flex: 1}]} text={I18n.t('logOut')} onPress={() => this.logoutAction()}></TextLink>
        </View>
      </View>
    )
  }
}
