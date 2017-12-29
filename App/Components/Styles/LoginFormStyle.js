import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import { ApplicationStyles, Metrics } from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  heading: {
    ...Fonts.style.h1,
    fontSize: 30 * Metrics.fontScale,
    textAlign: 'center'
  },
  form: {
  },
  registerLink: {
    ...ApplicationStyles.screen.link,
    paddingTop: 12,
    textAlign: 'right'
  }
})
