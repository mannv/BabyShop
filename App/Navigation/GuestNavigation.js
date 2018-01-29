import {StackNavigator} from "react-navigation";
import styles from "./Styles/NavigationStyles";
import AllScreen from './Screen'

// Manifest of possible screens
const GuestNav = StackNavigator(AllScreen, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LoginScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default GuestNav
