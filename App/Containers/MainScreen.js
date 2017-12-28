import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import I18n from '../I18n'
import MainHeadingSearch from '../Components/Screen/MainHeadingSearch'

// Styles
import styles from './Styles/MainScreenStyle'

class MainScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.heading]}>
          <MainHeadingSearch></MainHeadingSearch>
        </View>
        <View style={styles.sv}>
          <Text>Noi dung con lai</Text>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
