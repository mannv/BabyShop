import React, { Component } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import MainSwiper from '../Components/Screen/MainSwiper'
import MainHeadingSearch from '../Components/Screen/MainHeadingSearch'
import FlashSale from './FlashSale'
import CategoryFeature from './CategoryFeature'

// Styles
import styles from './Styles/HomeScreenStyle'

import MainScreenAPI from '../Services/MainScreenAPI'

class HomeScreen extends Component {
  api = {};
  constructor(props) {
    super(props);
    this.state = {
      swiperData: [],
      flashSaleData: [],
      categoryFeatureData: []
    }
    this.api = new MainScreenAPI();
  }

  loadSwiperData() {
    this.api.banners((json) => {
      if(!json.status) {
        return;
      }
      this.setState({swiperData: json.data});
    });
  }

  loadFlashSaleData() {
    this.api.flashsale((json) => {
      if(!json.status) {
        return;
      }
      this.setState({flashSaleData: json.data});
    });
  }

  loadCategoryFeatureData() {
    this.api.categoriesFeature((json) => {
      if(!json.status) {
        return;
      }
      this.setState({categoryFeatureData: json.data});
    });
  }

  componentDidMount() {

    this.loadSwiperData();
    this.loadFlashSaleData();
    this.loadCategoryFeatureData();
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.heading]}>
          <MainHeadingSearch openMenu={() => this.props.openMenu()}></MainHeadingSearch>
        </View>
        <View style={styles.sv}>
          <ScrollView>
            <MainSwiper items={this.state.swiperData}></MainSwiper>
            {
              this.state.flashSaleData.length > 0 ? <FlashSale items={this.state.flashSaleData}></FlashSale> : null
            }
            {
              this.state.categoryFeatureData.map((item, index) => {
                return (
                  <CategoryFeature category={item} key={index}></CategoryFeature>
                )
              })
            }
          </ScrollView>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {navigation: state.navigate.navigation}
}

export default connect(mapStateToProps)(HomeScreen)
