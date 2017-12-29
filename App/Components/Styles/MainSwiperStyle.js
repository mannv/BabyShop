import {StyleSheet} from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes'

const imageRealWidth = 1242;
const imageRealHeight = 373;
const imageWidth = Metrics.screenWidth;
const imageHeight = (imageWidth / imageRealWidth) * imageRealHeight;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  img: {
    width: imageWidth,
    height: imageHeight
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
