import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './ControlPanelStyle'

export default class ControlPanel extends Component {
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

  render () {
    return (
      <View style={styles.container}>
        <Text>ControlPanel Component</Text>
        <TouchableOpacity onPress={this.props.closeMenu}>
          <Text style={styles.txtClose}>Close</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
