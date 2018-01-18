import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, ScrollView, Alert} from 'react-native'
import styles from './ControlPanelStyle'
import UserInfo from './UserInfo'
import CategoryPanel from './CategoryPanel'

import RoundedButton from '../RoundedButton'
import I18n from '../../I18n'
import {connect} from 'react-redux'
import MainScreenAPI from '../../Services/MainScreenAPI'


class ControlPanel extends Component {

  api = {};
  constructor(props) {
    super(props);
    this.state = {
      cateItems: []
    }
    this.api = new MainScreenAPI();
  }

  // Defaults for props
  static defaultProps = {
    closeMenu: PropTypes.func
  }


  componentDidMount() {
    this.api.categories((json) => {
      if(json.status) {
        this.setState({cateItems: json.data});
      }
    });
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 3}}>
          <UserInfo></UserInfo>
        </View>
        <View style={{flex: 9}}>
          <ScrollView>
            <CategoryPanel items={this.state.cateItems}></CategoryPanel>
          </ScrollView>
        </View>
        <View style={[{flex: 1}, styles.footer]}>
          <RoundedButton style={styles.btn} onPress={this.props.closeMenu} text={I18n.t('close')}></RoundedButton>
        </View>
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(ControlPanel)
