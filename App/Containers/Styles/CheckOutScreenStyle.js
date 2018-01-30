import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  success: {
    ...Fonts.style.h4,
    color: Colors.fire,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center'
  }
})
