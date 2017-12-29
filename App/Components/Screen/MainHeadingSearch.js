import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/MainHeadingSearchStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import {Metrics} from '../../Themes'

export default class MainHeadingSearch extends Component {
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
  // openMenu

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.openMenu}>
          <Icon style={styles.icon} name='ios-menu' size={Metrics.icons.medium} color='white'/>
        </TouchableOpacity>
        <TextInput style={styles.searchInput}></TextInput>
      </View>
    )
  }
}
