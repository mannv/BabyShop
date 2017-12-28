import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
// import I18n from '../I18n'
import MainSwiper from '../Components/Screen/MainSwiper'
import MainHeadingSearch from '../Components/Screen/MainHeadingSearch'
import FlashSale from './FlashSale'
import CategoryFeature from './CategoryFeature'

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
          <ScrollView>
            <MainSwiper></MainSwiper>
            <FlashSale></FlashSale>
            <CategoryFeature title="Me & be"></CategoryFeature>
            <CategoryFeature title="Do choi cho be"></CategoryFeature>
            <CategoryFeature title="Be an dam"></CategoryFeature>
            <CategoryFeature></CategoryFeature>
            <CategoryFeature></CategoryFeature>
          </ScrollView>
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
