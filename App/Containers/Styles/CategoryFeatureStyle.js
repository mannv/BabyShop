import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    paddingBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin
  },
  heading: {
    ...ApplicationStyles.screen.padding_lr,
    flexDirection: 'row',
    paddingTop: Metrics.baseMargin
  },
  title: {
    ...Fonts.style.normal,
    flex: 1
  },
  more: {
    ...ApplicationStyles.screen.link,
    flex: 1,
    textAlign: 'right'
  }
})
