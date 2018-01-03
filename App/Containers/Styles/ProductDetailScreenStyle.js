import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'

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
    justifyContent: 'center',
    paddingLeft: Metrics.baseMargin
  },
  title: {
    ...Fonts.style.normal,
    flex: 11,
    color: Colors.snow,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  image: {
    width: Metrics.screenWidth,
    height: Metrics.screenWidth,
  },
  productName: {
    ...Fonts.style.normal
  },
  productInfoWapper: {
    padding: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    marginBottom: Metrics.baseMargin
  },
  oldPrice: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.gray,
    textDecorationLine: 'line-through'
  },
  price: {
    ...Fonts.style.normal,
    color: Colors.organe
  },
  descriptionLabel: {
    fontWeight: 'bold',
    fontSize: Fonts.size.regular
  },
  descriptionWapper: {
    backgroundColor: Colors.snow,
    padding: Metrics.baseMargin
  },
  description: {
    ...Fonts.style.normal,
    textAlign: 'justify'
  }
})
