import { StackNavigator } from 'react-navigation'
import View from '../Containers/FlashSale'
import CategoryScreen from '../Containers/CategoryScreen'
import MainScreen from '../Containers/MainScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  View: { screen: View },
  CategoryScreen: { screen: CategoryScreen },
  MainScreen: { screen: MainScreen },
  RegisterScreen: { screen: RegisterScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
