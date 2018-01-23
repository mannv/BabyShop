/**
 * Created by man.nv on 1/23/18.
 */
import {StyleSheet} from 'react-native'
import {Colors, Fonts, ApplicationStyles, Metrics} from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: Metrics.baseMargin
  },
  label: {
    ...Fonts.style.normal
  }
})
