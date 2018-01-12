import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/MainHeadingSearchStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import {Metrics} from '../../Themes'

export default class MainHeadingSearch extends Component {
  // Defaults for props
  static defaultProps = {
    openMenu: PropTypes.func
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconTouchable} onPress={this.props.openMenu}>
          <Icon name='ios-menu' size={Metrics.icons.medium} color='white'/>
        </TouchableOpacity>
        <TextInput style={styles.searchInput}></TextInput>
      </View>
    )
  }
}
