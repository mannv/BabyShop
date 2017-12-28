import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from '../Styles/MainSwiperStyle'
import Swiper from 'react-native-swiper'

export default class MainSwiper extends Component {
  render() {
    const banners = [
      {
        uri: 'http://cf.shopee.vn/file/6fee4ee17e49441b24fd774ed9330fcc',
        id: 2,
      },
      {
        uri: 'https://cf.shopee.vn/file/c97608c924754e3304e8ea20d46d6ad8',
        id: 3,
      },
      {
        uri: 'https://cf.shopee.vn/file/c970fc5bd09fc45744e56be0aae62a00',
        id: 1,
      }
    ];
    return (
      <Swiper autoplay={true} style={styles.wrapper} height={100} paginationStyle={{bottom: 10}}
              activeDotStyle={{backgroundColor: '#ff5722'}} showsButtons={false}>
        <View style={styles.slide}>
          <Image style={styles.img} source={{uri: banners[0].uri}} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.img} source={{uri: banners[1].uri}} />
        </View>
        <View style={styles.slide}>
          <Image style={styles.img} source={{uri: banners[2].uri}} />
        </View>
      </Swiper>
    )
  }
}
