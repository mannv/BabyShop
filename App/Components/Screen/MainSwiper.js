import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import styles from '../Styles/MainSwiperStyle'
import Swiper from 'react-native-swiper'
import {Metrics} from '../../Themes'
import {getImageHeight} from '../../Lib/global'
export default class MainSwiper extends Component {
  static defaultProps = {
    items: []
  }

  clickBanner = (id) => {
    Alert.alert(`Banner ID: ${id}`);
  }

  render() {
    const {items} = this.props;
    const swiperHeight = getImageHeight(Metrics.screenWidth, 375, 113);
    if(items.length > 0) {
      return (
        <Swiper autoplay={true} height={swiperHeight} paginationStyle={{bottom: 10}}
                activeDotStyle={{backgroundColor: '#ff5722'}} showsButtons={false}>
          {
            items.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => this.clickBanner(item.name)}>
                  <Image style={styles.img} source={{uri: item.image}}/>
                </TouchableOpacity>
              )
            })
          }
        </Swiper>
      )
    } else {
      return (
        <View style={{width: Metrics.screenWidth, height: swiperHeight}}></View>
      )
    }
  }
}
