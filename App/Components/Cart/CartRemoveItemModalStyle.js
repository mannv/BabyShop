import { StyleSheet } from 'react-native'
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../Themes'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.modal,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    backgroundColor: Colors.snow,
    width: Metrics.screenWidth * 0.85,
    borderRadius: Metrics.borderRadius
  },
  title: {
    margin: Metrics.baseMargin,
    ...Fonts.style.normal,
    fontSize: Fonts.size.medium,
    textAlign: 'center'
  },
  btn: {
    borderTopWidth: 1,
    borderColor: Colors.border,
    flexDirection: 'row'
  },
  btnNo: {
    flex: 1,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: Colors.border,
    ...ApplicationStyles.screen.padding_tb
  },
  btnYes: {
    flex: 1,
    justifyContent: 'center'
  },
  btnText: {
    color: Colors.organe,
    textAlign: 'center',
  }
})
