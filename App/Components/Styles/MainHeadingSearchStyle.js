import {StyleSheet} from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    ...ApplicationStyles.screen.inputText,
    flex: 11,
    justifyContent: 'center',

  }
})
