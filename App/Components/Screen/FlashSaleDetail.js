import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import styles from './FlashSaleDetailStyle'
import { connect } from 'react-redux'
class FlashSaleDetail extends Component {
  // Defaults for props
  static defaultProps = {
    item: {}
  }

  gotoDetail = (id) => {
    const {navigate} = this.props.navigation;
    navigate('ProductDetailScreen', {id: id});
  }

  render () {
    const {item} = this.props;
    return (
      <TouchableOpacity onPress={() => {this.gotoDetail(item.id)}} style={styles.container}>
        <View style={styles.thumbnail}>
          <Image style={styles.img} source={{uri: item.uri}} />
        </View>
        <View style={styles.productInfo}>
          <View style={styles.productInfoWapper}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.oldPrice}>{item.old_price}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.sale}>{item.purchase}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {navigation: state.navigate.navigation}
}

export default connect(mapStateToProps)(FlashSaleDetail)
