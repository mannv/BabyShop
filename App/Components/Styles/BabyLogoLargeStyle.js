import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes'
let bannerWidth = Metrics.screenWidth - 20;
if(bannerWidth > 288 * 2) {
  bannerWidth = 288 * 2;
}
const bannerHeight = bannerWidth / 288 * 132;
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: bannerWidth,
    height: bannerHeight
  }
})
