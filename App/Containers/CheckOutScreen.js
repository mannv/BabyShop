import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CheckOutScreenStyle'
import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'
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
        <Text>Check out success</Text>
        <TouchableOpacity onPress={() => this.backtoHome()}>
          <Text>Back to HOME</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, {setCurrentNavigation})(CheckOutScreen)
