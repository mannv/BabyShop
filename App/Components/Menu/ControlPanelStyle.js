import { StyleSheet } from 'react-native'
import {Metrics, Colors, ApplicationStyles} from '../../Themes'

const btnWidth = Metrics.screenWidth * 0.8 * 0.3;
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    borderRightWidth: 1,
    borderColor: Colors.border
  },
  btn: {
    backgroundColor: '#868e96',
    width: btnWidth,
    alignSelf: 'center'
  },
  footer: {
    backgroundColor: 'gray',
    justifyContent: 'center'
  }
})
