import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')
const aspectRatio = height / width;
const fontScale = aspectRatio > 1.6 ? 1 : 1.5;
// Used via Metrics.baseMargin
const metrics = {
  isPhone: aspectRatio > 1.6,
  fontScale: fontScale,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 5,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  borderRadius: 4,
  icons: {
    tiny: 15 * fontScale,
    small: 20 * fontScale,
    medium: 30 * fontScale,
    large: 45 * fontScale,
    xl: 50 * fontScale,
    nav: 30
  },
  images: {
    small: 20 * fontScale,
    medium: 40 * fontScale,
    large: 60 * fontScale,
    logo: 200 * fontScale
  }
}

export default metrics
