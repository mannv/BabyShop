import { StyleSheet } from 'react-native'
import Fonts from '../../Themes/Fonts'
import ApplicationStyles from '../../Themes/ApplicationStyles'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  heading: {
    ...Fonts.style.h1,
    fontSize: 30,
    textAlign: 'center'
  },
  form: {
    backgroundColor: '#6b52ae'
  },
  registerLink: {
    ...ApplicationStyles.screen.link,
    paddingTop: 12,
    textAlign: 'right'
  }
})
