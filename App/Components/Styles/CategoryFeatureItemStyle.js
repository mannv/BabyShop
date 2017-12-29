import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'

const imagePerPage = Metrics.isPhone ? 3 : 4;
const imagePadding = imagePerPage *  Metrics.baseMargin * 2;
const borderPadding = imagePerPage * 2;
const imageWidth = (Metrics.screenWidth - (imagePadding + borderPadding)) / imagePerPage;

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
    width: imageWidth,
    height: imageWidth
  },
  price: {
    ...Fonts.style.normal,
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
    color: Colors.organe,
    textAlign: 'center'
  },
  purchase_text: {
    ...Fonts.style.normal,
    fontWeight: 'bold',
    color: Colors.organe,
  }
})
