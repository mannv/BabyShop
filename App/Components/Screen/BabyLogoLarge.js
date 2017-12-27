import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image } from 'react-native'
import styles from '../Styles/BabyLogoLargeStyle'
import Images from '../../Themes/Images'
export default class BabyLogoLarge extends Component {
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
        <Image source={Images.logo} resizeMode='stretch' />
      </View>
    )
  }
}
