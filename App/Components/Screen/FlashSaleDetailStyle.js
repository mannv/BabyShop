import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'
import {getImageHeight} from '../../Lib/global'
const imageWidth = Metrics.screenWidth / 5;
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.border,
    padding: Metrics.baseMargin,
  },
  thumbnail: {
    flex: 1,
  },
  productInfo: {
    flex: 4
  },
  img: {
    width: imageWidth,
    height: getImageHeight(imageWidth, 100, 100)
  },
  productInfoWapper: {
    paddingLeft: 10
  },
  name: {
    ...Fonts.style.normal
  },
  oldPrice: {
    ...Fonts.style.normal,
    color: Colors.gray,
    fontSize: Fonts.size.small,
    textDecorationLine: 'line-through'
  },
  price: {
    ...Fonts.style.normal,
    color: Colors.organe
  },
  sale: {
    ...Fonts.style.normal,
    color: Colors.green
  }
})
