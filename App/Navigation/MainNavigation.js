import {StackNavigator} from "react-navigation";
import styles from "./Styles/NavigationStyles";
import AllScreen from './Screen'

// Manifest of possible screens
const PrimaryNav = StackNavigator(AllScreen, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
