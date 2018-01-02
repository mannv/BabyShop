import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  heading: {
    flex: 1,
    backgroundColor: Colors.organe
  },
  content: {
    flex: 14,
  },
  iconBack: {
    color: Colors.snow
  },
  touchIconBack: {
    flex: 1,
    justifyContent: 'center'
  },
  categoryName: {
    ...Fonts.style.normal,
    flex: 11,
    color: Colors.snow,
    justifyContent: 'center',
    alignSelf: 'center'
  }
})
