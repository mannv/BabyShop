import {StyleSheet} from 'react-native'
import {ApplicationStyles, Fonts} from '../../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  heading: {
    ...Fonts.style.normal,
    textAlign: 'center'
  }
})
