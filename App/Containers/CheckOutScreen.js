import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CheckOutScreenStyle'
import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'
import BabyLogoLarge from '../Components/Screen/BabyLogoLarge'
import I18n from '../I18n'
class CheckOutScreen extends Component {

  componentDidMount() {
    this.props.setCurrentNavigation(this.props.navigation);
  }

  backtoHome = () => {
    this.props.navigation.navigate('MainScreen');
  }

  render () {
    return (
      <View style={styles.container}>
        <BabyLogoLarge style={{flex: 1}} />
        <View style={{flex: 1}}>
          <Text style={styles.success}>{I18n.t('checkout_done')}</Text>
          <TouchableOpacity onPress={() => this.backtoHome()}>
            <Text style={{textAlign: 'center'}}>{I18n.t('back_to_home')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {setCurrentNavigation})(CheckOutScreen)
