import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, Touch, Alert} from 'react-native'
import styles from './UserInfoStyle'
import {Images} from '../../Themes'
import I18n from '../../I18n'
import TextLink from '../TextLink'
import {connect} from 'react-redux'
import {logout} from '../../Redux/Actions/AuthAction'
import {emptyCart} from '../../Redux/Actions/CartAction'
class UserInfo extends Component {
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  logoutAction = () => {
    this.props.emptyCart();
    this.props.logout();
    setTimeout(() => {
      this.props.navigation.navigate('LoginScreen');
    }, 100);
  }

  render() {
    const registerDate = this.props.auth.created_at.substr(0, 10);
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={Images.avatar}></Image>
        <View style={{flexDirection: 'row', position: 'absolute', bottom: 0}}>
          <Text style={[styles.registerDate, {flex: 2}]}>{I18n.t('register_date', {date: registerDate})}</Text>
          <TextLink textAlign='right' style={[styles.logout, {flex: 1}]} text={I18n.t('logOut')}
                    onPress={() => this.logoutAction()}></TextLink>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigate.navigation,
    auth: state.auth.auth,
  }
}

export default connect(mapStateToProps, {logout, emptyCart})(UserInfo);
