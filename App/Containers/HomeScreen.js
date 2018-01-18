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
    this.setState({
      flashSaleData: [
        {id: 1, price: '99000', purchase: 1, uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'},
        {id: 2, price: '180000', purchase: 10, uri: 'https://cf.shopee.vn/file/635987fe44199841a6af8295ce5a7fe7_tn'},
        {id: 3, price: '99000', purchase: 1, uri: 'https://cf.shopee.vn/file/7e9fc945c8d650ef618cf678074b7072_tn'},
        {id: 4, price: '116000', purchase: 1, uri: 'https://cf.shopee.vn/file/8e84afdf8bc534ec4f525b9e8aa5b4ca_tn'},
        {id: 5, price: '39000', purchase: 1, uri: 'https://cf.shopee.vn/file/ce628de4c6eb9408d99005d66d6f27a1_tn'},
        {id: 6, price: '46000', purchase: 1, uri: 'https://cf.shopee.vn/file/0c6dfa305b72950843003e611d8fde8b_tn'}
      ]
    });
  }

  loadCategoryFeatureData() {
    const data = [
      {
        id: 1,
        name: 'Bé ăn - bé uống',
        items: [
          {id: 4, price: '116000', uri: 'https://cf.shopee.vn/file/8e84afdf8bc534ec4f525b9e8aa5b4ca_tn'},
          {id: 1, price: '99000', uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'},
          {id: 6, price: '46000', uri: 'https://cf.shopee.vn/file/0c6dfa305b72950843003e611d8fde8b_tn'},
          {id: 2, price: '180000', uri: 'https://cf.shopee.vn/file/635987fe44199841a6af8295ce5a7fe7_tn'},
          {id: 3, price: '99000', uri: 'https://cf.shopee.vn/file/7e9fc945c8d650ef618cf678074b7072_tn'},
          {id: 5, price: '39000', uri: 'https://cf.shopee.vn/file/ce628de4c6eb9408d99005d66d6f27a1_tn'}
        ]
      },
      {
        id: 2,
        name: 'Vệ sinh cho bé',
        items: [
          {id: 4, price: '220000', uri: 'https://k.r.worldssl.net/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/t/a/ta-bim-quan-merries-s62.jpg'},
          {id: 1, price: '99000', uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'},
          {id: 6, price: '46000', uri: 'https://cf.shopee.vn/file/0c6dfa305b72950843003e611d8fde8b_tn'},
          {id: 2, price: '180000', uri: 'https://cf.shopee.vn/file/635987fe44199841a6af8295ce5a7fe7_tn'},
          {id: 3, price: '99000', uri: 'https://cf.shopee.vn/file/7e9fc945c8d650ef618cf678074b7072_tn'},
          {id: 5, price: '39000', uri: 'https://cf.shopee.vn/file/ce628de4c6eb9408d99005d66d6f27a1_tn'}
        ]
      },
      {
        id: 3,
        name: 'Bé ra ngoài',
        items: [
          {id: 4, price: '220000', uri: 'https://k.r.worldssl.net/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/x/e/xe-day-sieu-thi-co-to-668-14-3.jpg'},
          {id: 1, price: '99000', uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'},
          {id: 6, price: '46000', uri: 'https://cf.shopee.vn/file/0c6dfa305b72950843003e611d8fde8b_tn'},
          {id: 2, price: '180000', uri: 'https://cf.shopee.vn/file/635987fe44199841a6af8295ce5a7fe7_tn'},
          {id: 3, price: '99000', uri: 'https://cf.shopee.vn/file/7e9fc945c8d650ef618cf678074b7072_tn'},
          {id: 5, price: '39000', uri: 'https://cf.shopee.vn/file/ce628de4c6eb9408d99005d66d6f27a1_tn'}
        ]
      },
      {
        id: 4,
        name: 'Quần áo - thời trang',
        items: [
          {id: 4, price: '220000', uri: 'https://k.r.worldssl.net/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/o/ao-gile-phao-co-mu-dap-mat-gau-than-truoc-1.jpg'},
          {id: 1, price: '99000', uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'},
          {id: 6, price: '46000', uri: 'https://cf.shopee.vn/file/0c6dfa305b72950843003e611d8fde8b_tn'},
          {id: 2, price: '180000', uri: 'https://cf.shopee.vn/file/635987fe44199841a6af8295ce5a7fe7_tn'},
          {id: 3, price: '99000', uri: 'https://cf.shopee.vn/file/7e9fc945c8d650ef618cf678074b7072_tn'},
          {id: 5, price: '39000', uri: 'https://cf.shopee.vn/file/ce628de4c6eb9408d99005d66d6f27a1_tn'}
        ]
      }
    ];
    this.setState({categoryFeatureData: data});
  }

  componentDidMount() {

    this.loadSwiperData();
    // this.loadFlashSaleData();
    // this.loadCategoryFeatureData();
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
            <FlashSale items={this.state.flashSaleData}></FlashSale>
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
