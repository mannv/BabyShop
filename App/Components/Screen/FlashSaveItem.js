import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from '../Styles/FlashSaveItemStyle'

import {connect} from 'react-redux'

class FlashSaveItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  static defaultProps = {
    item: {
      id: 1,
      price: '99000',
      purchase: 1,
      uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'
    }
  }

  openProjectDetail = () => {
    const {navigate} = this.props.navigation;
    navigate('ProductDetailScreen', {id: this.props.item.id});
  }

  /**
   id: 499,
   name: 'Et impedit consequuntur excepturi qui ut sint.',
   old_price: 615354,
   price: 430748,
   percent: '30%',
   thumbnail: 'https://lorempixel.com/400/400/?57497',
   sold: 3
   */
  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.openProjectDetail()}>
        <Image source={{url: item.thumbnail}} style={styles.thumbnail}></Image>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.purchase}>
          <Text style={styles.purchase_text}>{item.sold}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps)(FlashSaveItem);
