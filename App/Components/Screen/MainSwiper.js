import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import styles from '../Styles/MainSwiperStyle'
import Swiper from 'react-native-swiper'
import {Metrics} from '../../Themes'
import global from '../global'
export default class MainSwiper extends Component {
  static defaultProps = {
    items: []
  }

  clickBanner = (id) => {
    Alert.alert(`Banner ID: ${id}`);
  }

  render() {
    const {items} = this.props;
    const swiperWidth = global.getImageHeight(Metrics.screenWidth, 1242, 373);
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
