import React, {Component} from 'react'
import {View} from 'react-native'
import {connect} from 'react-redux'
// import I18n from '../I18n'
import Drawer from 'react-native-drawer'
import ControlPanel from '../Components/Menu/ControlPanel'
import TabNavigator from 'react-native-tab-navigator';

import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'

class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  render() {
    return (

    <Drawer openDrawerOffset={0.2} tapToClose
      ref={(ref) => this._drawer = ref}
      content={<ControlPanel closeMenu={() => this.closeControlPanel()} />}
    >

      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          badgeText="1"
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <HomeScreen></HomeScreen>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="Profile"
          onPress={() => this.setState({ selectedTab: 'profile' })}>
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

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
