import { StackNavigator } from 'react-navigation'
import SearchScreen from '../Containers/SearchScreen'
import CheckOutScreen from '../Containers/CheckOutScreen'
import CartList from '../Containers/CartList'
import ProductDetailScreen from '../Containers/ProductDetailScreen'
import ListFlashSale from '../Containers/ListFlashSale'
import FlashSaleScreen from '../Containers/FlashSaleScreen'
import CategoryScreen from '../Containers/CategoryScreen'
import MainScreen from '../Containers/MainScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SearchScreen: { screen: SearchScreen },
  CheckOutScreen: { screen: CheckOutScreen },
  ProductDetailScreen: { screen: ProductDetailScreen },
  FlashSaleScreen: { screen: FlashSaleScreen },
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
