import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'
import global from '../../Components/global'
const thumbnailWidth = (Metrics.screenWidth - (Metrics.baseMargin * 2)) / 5;
const thumbnailHeight = global.getImageHeight(thumbnailWidth, 1, 1);
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.snow,
    marginBottom: Metrics.baseMargin
  },
  thumbnail: {
    flex: 1
  },
  info: {
    ...ApplicationStyles.screen.padding_lr,
    ...ApplicationStyles.screen.padding_tb,
    flex: 4,
  },
  img: {
    width: thumbnailWidth,
    height: thumbnailHeight,
  },
  name: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small
  },
  pr: {
    flexDirection: 'row'
  },
  price: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.organe
  },
  oldPrice: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.gray,
    marginRight: Metrics.baseMargin,
    textDecorationLine: 'line-through'
  },
  amount: {
    flexDirection: 'row'
  },
  number: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
  },
  plusIcon: {
    alignSelf: 'center'
  },
  minusIcon: {
    alignSelf: 'center'
  },
  iconColor: {
    color: Colors.gray
  },
  removeIcon: {
    position: 'absolute',
    top: Metrics.baseMargin,
    right: Metrics.baseMargin
  },
  removeIconFont: {
    color: Colors.organe,
  }
})
