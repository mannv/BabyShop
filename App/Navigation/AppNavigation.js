import { StackNavigator } from 'react-navigation'
import ProfileScreen from '../Containers/ProfileScreen'
import HomeScreen from '../Containers/HomeScreen'
import CategoryScreen from '../Containers/CategoryScreen'
import MainScreen from '../Containers/MainScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ProfileScreen: { screen: ProfileScreen },
  HomeScreen: { screen: HomeScreen },
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
