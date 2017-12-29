import { StyleSheet } from 'react-native'
import {Metrics, Colors, ApplicationStyles} from '../../Themes'

const btnWidth = Metrics.screenWidth * 0.8 * 0.3;
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  btn: {
    backgroundColor: Colors.steel,
    width: btnWidth,
    alignSelf: 'center'
  }
})
