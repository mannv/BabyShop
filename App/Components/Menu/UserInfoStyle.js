import {StyleSheet} from 'react-native'
import {ApplicationStyles, Colors, Metrics, Fonts} from '../../Themes'

const avatarWidth = Metrics.screenHeight / 5 * 0.7;
const avavtarHeight = avatarWidth;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: '#ffa5f3'
  },
  avatar: {
    width: avatarWidth,
    height: avavtarHeight,
    alignSelf: 'center',
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin
  },
  registerDate: {
    ...Fonts.style.normal,
    paddingLeft: Metrics.baseMargin
  },
  logout: {
    paddingRight: Metrics.baseMargin
  }
})
