import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/FlashSaleScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { Metrics } from '../Themes'
import I18n from '../I18n'
import ListFlashSale from './ListFlashSale'

import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'

class FlashSaleScreen extends Component {
  componentDidMount() {
    this.props.setCurrentNavigation(this.props.navigation);
  }
  render () {
    const {navigation} = this.props;
    const navigate = navigation.navigate;
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchIconBack} onPress={() => {navigation.goBack()}}>
              <Icon style={styles.iconBack} name='ios-arrow-back' size={Metrics.icons.medium} />
            </TouchableOpacity>
            <Text style={styles.title}>{I18n.t('flash_sale')}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ListFlashSale></ListFlashSale>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps, {setCurrentNavigation})(FlashSaleScreen)
