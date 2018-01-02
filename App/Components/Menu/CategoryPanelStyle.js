import { StyleSheet } from 'react-native'
import {Metrics, Colors, ApplicationStyles, Fonts} from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  header: {
    ...ApplicationStyles.screen.padding_lr,
    ...Fonts.style.h5,
    backgroundColor: '#007bff',
    color: Colors.snow,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  categoryItem: {
    ...ApplicationStyles.screen.padding_lr,
    paddingTop: Metrics.baseMargin * 2,
    paddingBottom: Metrics.baseMargin * 2,
    borderBottomWidth: 1,
    borderColor: Colors.border
  },
  categoryName: {
    ...Fonts.style.normal
  }
})
