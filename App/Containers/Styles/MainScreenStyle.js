import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  heading: {
    ...ApplicationStyles.screen.padding_lr,
    flex: 1
  },
  sv: {
    flex: 16,
    backgroundColor: Colors.banner
  }
})
