import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './ControlPanelStyle'
import UserInfo from './UserInfo'

import RoundedButton from '../RoundedButton'
import I18n from '../../I18n'

export default class ControlPanel extends Component {
  // Defaults for props
  static defaultProps = {
    closeMenu: PropTypes.func
  }

  render () {
    return (
      <View style={styles.container}>
        <UserInfo style={{flex: 1}}></UserInfo>
        <View style={{flex: 4}}>
          <Text>{I18n.t('list_category')}</Text>
          <RoundedButton style={styles.btn} onPress={this.props.closeMenu} text={I18n.t('close')}></RoundedButton>
        </View>
      </View>
    )
  }
}
