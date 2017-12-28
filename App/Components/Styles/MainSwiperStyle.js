import {StyleSheet} from 'react-native'
import {ApplicationStyles, Metrics} from '../../Themes'
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    height: 100
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  img: {
    width: Metrics.screenWidth,
    height: 100
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})
