import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native'
import styles from './Styles/TextLinkStyle'

export default class TextLink extends Component {
  // Defaults for props
  static defaultProps = {
    text: PropTypes.string,
    textAlign: 'center',
    onPress: PropTypes.func,
    style: null
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[this.props.style, styles.container]}>
        <Text style={[styles.link, {textAlign: this.props.textAlign}]}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}
