import {StyleSheet} from 'react-native'
import {ApplicationStyles, Colors, Fonts, Metrics} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.organe,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    ...Fonts.style.normal,
    color: Colors.snow,
    flex: 5,
    alignItems: 'flex-start',
    marginLeft: Metrics.baseMargin
  },
  topBtn: {
    flex: 1,
    alignItems: 'flex-end'
  },
  touchIcon: {
    marginRight: Metrics.baseMargin
  },
  iconTrash: {
    color: Colors.snow
  },
  body: {
    flex: 15,
    ...ApplicationStyles.screen.padding_lr
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.snow,
    borderTopWidth: 1,
    borderColor: Colors.border,
    ...ApplicationStyles.screen.padding_lr,
    alignItems: 'center'
  },
  labelTotalPrice: {
    ...Fonts.style.normal
  },
  price: {
    ...Fonts.style.normal,
    color: Colors.organe
  },
  btnCheckout: {
    padding: 2,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 2,
    backgroundColor: Colors.organe,
    position: 'absolute',
    right: Metrics.baseMargin
  },
  checkOut: {
    ...Fonts.style.normal,
    fontSize: Fonts.size.small,
    color: Colors.snow
  }
})
