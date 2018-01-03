import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from '../Styles/CategoryFeatureItemStyle'

export default class CategoryFeatureItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  static defaultProps = {
    item: {
      id: 4,
      price: '116000',
      uri: 'https://cf.shopee.vn/file/8e84afdf8bc534ec4f525b9e8aa5b4ca_tn'
    },
  }

  openProjectDetail = () => {
    const {navigate} = this.props;
    navigate('ProductDetailScreen', {id: this.props.item.id});
  }

  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.openProjectDetail()}>
        <Image source={{url: item.uri}} style={styles.thumbnail}></Image>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    )
  }
}
