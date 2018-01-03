import { StyleSheet } from 'react-native'
import { ApplicationStyles, Colors, Fonts, Metrics } from '../../Themes/'
const bottomHeight = Metrics.screenHeight / 15;
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
  },
  addToCart: {
    ...ApplicationStyles.screen.padding_lr,
    height: bottomHeight,
    backgroundColor: '#fff3ef',
    flexDirection: 'row'
  },
  plusIcon: {
    alignSelf: 'center'
  },
  minusIcon: {
    alignSelf: 'center'
  },
  quanlity: {
    ...Fonts.style.normal,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  shoppingCartIcon: {
    alignSelf: 'center',
    flexDirection: 'row',
    position: 'absolute',
    right: Metrics.baseMargin
  },
  label_add_to_cart: {
    ...Fonts.style.normal,
  },
  icon_add_to_cart: {
    alignSelf: 'center',
    paddingRight: Metrics.baseMargin
  }
})
