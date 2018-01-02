import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes'
const itemWidth = (Metrics.screenWidth - 44) / 2;
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.snow
  },
  listContent: {
    ...ApplicationStyles.screen.padding_lr,
    marginTop: Metrics.baseMargin
  },
  item: {
    borderWidth: 1,
    borderColor: Colors.border,
    width: itemWidth,
    margin: 10,
    padding: 5
  },
  thumbnail: {
    width: itemWidth - 12,
    height: itemWidth - 12
  },
  title: {
    ...Fonts.style.normal
  },
  price: {
    color: Colors.organe
  }
})
