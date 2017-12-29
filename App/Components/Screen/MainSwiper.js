import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import styles from '../Styles/MainSwiperStyle'
import Swiper from 'react-native-swiper'
import {Metrics} from '../../Themes'

export default class MainSwiper extends Component {
  static defaultProps = {
    items: []
  }

  clickBanner = (id) => {
    Alert.alert(`Banner ID: ${id}`);
  }

  render() {
    const {items} = this.props;
    const imageRealWidth = 1242;
    const imageRealHeight = 373;
    const swiperWidth = Metrics.screenWidth / imageRealWidth * imageRealHeight;
    return (
      <Swiper autoplay={false} height={swiperWidth} paginationStyle={{bottom: 10}}
              activeDotStyle={{backgroundColor: '#ff5722'}} showsButtons={false}>
        {
          items.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => this.clickBanner(item.id)}>
                <Image style={styles.img} source={{uri: item.uri}}/>
              </TouchableOpacity>
            )
          })
        }
      </Swiper>
    )
  }
}
