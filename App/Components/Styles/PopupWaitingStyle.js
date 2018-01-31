import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.modal,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth / 3,
    height: Metrics.screenWidth / 4,
    backgroundColor: Colors.snow,
    padding: Metrics.baseMargin
  },
  textWaiting: {
    ...Fonts.style.normal,
    color: Colors.organe
  }
})
