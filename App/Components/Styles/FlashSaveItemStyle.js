import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginLeft: Metrics.baseMargin,
    marginRight: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.border
  },
  thumbnail: {

  },
  price: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    color: Colors.organe,
    textAlign: 'center'
  },
  purchase: {
    backgroundColor: 'green',
    padding: Metrics.baseMargin,
    borderRadius: Metrics.borderRadius,
    position: 'absolute',
    top: 0,
    right: 0
  },
  purchase_text: {
    ...Fonts.size.normal,
    fontWeight: 'bold',
    color: Colors.organe,
  }
})
