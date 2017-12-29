import {StyleSheet} from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconTouchable: {
    flex: 1,
    // width: Metrics.screenWidth / 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    ...ApplicationStyles.screen.inputText,
    // width: Metrics.screenWidth / 12 * 11,
    flex: 11,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
