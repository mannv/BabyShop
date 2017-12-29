import { StyleSheet } from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes'
import Fonts from '../../Themes/Fonts'
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
  backLink: {
    ...ApplicationStyles.screen.link,
    paddingTop: 12,
    textAlign: 'right'
  },
  label: {
    ...Fonts.style.normal,
    textAlign: 'left'
  },
  inputText: {
    ...ApplicationStyles.screen.inputText,
    marginBottom: 20
  }
})
