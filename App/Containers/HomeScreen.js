import React, {Component} from 'react'
import {View, ScrollView, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

import MainSwiper from '../Components/Screen/MainSwiper'
import MainHeadingSearch from '../Components/Screen/MainHeadingSearch'
import FlashSale from './FlashSale'
import CategoryFeature from './CategoryFeature'

// Styles
import styles from './Styles/HomeScreenStyle'

import MainScreenAPI from '../Services/MainScreenAPI'
import {showWaiting, hideWaiting} from '../Redux/Actions/PopupAction'
import MyComponent from '../Basic/MyComponent'
import I18n from '../I18n'
class HomeScreen extends MyComponent {
  api = {};

  constructor(props) {
    super(props);
    this.state = {
      swiperData: [],
      flashSaleData: [],
      categoryFeatureData: [],
      fetchAPI: 0
    }
    this.api = new MainScreenAPI(props);
  }

  loadSwiperData() {
    this.api.cancelToken = this.makeRequest();
    this.api.banners((json) => {
      if (!json.status) {
        return;
      }
      this.fetchCountAPI();
      this.setState({swiperData: json.data});
    });
  }

  loadFlashSaleData() {
    this.api.cancelToken = this.makeRequest();
    this.api.flashSale((json) => {
      if (!json.status) {
        return;
      }
      this.fetchCountAPI();
      this.setState({flashSaleData: json.data});
    });
  }

  loadCategoryFeatureData() {
    this.api.cancelToken = this.makeRequest();
    this.api.categoriesFeature((json) => {
      if (!json.status) {
        return;
      }
      this.fetchCountAPI();
      this.setState({categoryFeatureData: json.data});
    });
  }

  fetchCountAPI() {
    this.setState({fetchAPI: this.state.fetchAPI + 1});
    console.log('this.state.fetchAPI: ' + this.state.fetchAPI);
    if (this.state.fetchAPI == 3) {
      this.props.hideWaiting();
    }
  }

  componentDidMount() {
    this.props.showWaiting();
    this.loadSwiperData();
    this.loadFlashSaleData();
    this.loadCategoryFeatureData();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.heading]}>
          <MainHeadingSearch openMenu={() => this.props.openMenu()}></MainHeadingSearch>
        </View>
        <View style={styles.sv}>
          <ScrollView>
            <MainSwiper items={this.state.swiperData}></MainSwiper>
            {
              this.state.flashSaleData.length > 0 ? <FlashSale title={I18n.t('flash_sale')} moreText={I18n.t('more')} items={this.state.flashSaleData}></FlashSale> : null
            }
            {
              this.state.categoryFeatureData.map((item, index) => {
                return (
                  <CategoryFeature moreText={I18n.t('more')} category={item} key={index}></CategoryFeature>
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
  return {
    navigation: state.navigate.navigation,
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps, {showWaiting, hideWaiting})(HomeScreen)
