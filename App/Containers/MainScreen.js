import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
// import I18n from '../I18n'
import Drawer from 'react-native-drawer'
import ControlPanel from '../Components/Menu/ControlPanel'
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import CartScreen from './CartScreen'
import {Metrics, Colors} from '../Themes'
import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'

import Config from 'react-native-config'

class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  componentWillMount() {
    console.log('API_URL: ' + Config.API_URL);
    this.props.setCurrentNavigation(this.props.navigation);
    this.selectedTab();
  }

  selectedTab() {
    const {state} = this.props.navigation;
    if (state.hasOwnProperty('params')) {
      const {params} = state;
      if(params != undefined && params.hasOwnProperty('tab')) {
        this.setState({selectedTab: params.tab});
      }
    }
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  renderIcon = (iconName, selected = false) => {
    const color = selected ? Colors.organe : Colors.gray;
    return (
      <Icon style={{color: color}} name={iconName} size={Metrics.icons.nav}/>
    )
  }

  render() {
    const {navigate} = this.props.navigation;
    return (

      <Drawer openDrawerOffset={0.2} tapToClose
              ref={(ref) => this._drawer = ref}
              content={<ControlPanel closeMenu={() => this.closeControlPanel()}/>}
      >

        <TabNavigator>
          <TabNavigator.Item
            renderIcon={() => this.renderIcon('home')}
            renderSelectedIcon={() => this.renderIcon('home', true)}
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({selectedTab: 'home'})}>
            <HomeScreen openMenu={() => this.openControlPanel()}></HomeScreen>
          </TabNavigator.Item>
          <TabNavigator.Item
            badgeText={1}
            renderIcon={() => this.renderIcon('shopping-cart')}
            renderSelectedIcon={() => this.renderIcon('shopping-cart', true)}
            selected={this.state.selectedTab === 'cart'}
            onPress={() => this.setState({selectedTab: 'cart'})}>
            <CartScreen></CartScreen>
          </TabNavigator.Item>
          <TabNavigator.Item
            renderIcon={() => this.renderIcon('user')}
            renderSelectedIcon={() => this.renderIcon('user', true)}
            selected={this.state.selectedTab === 'profile'}
            onPress={() => this.setState({selectedTab: 'profile'})}>
            <ProfileScreen></ProfileScreen>
          </TabNavigator.Item>
        </TabNavigator>
      </Drawer>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {setCurrentNavigation})(MainScreen)
