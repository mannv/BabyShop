import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from '../Styles/CategoryFeatureItemStyle'
import {connect} from 'react-redux'
import {currency} from '../../Lib/global'
class CategoryFeatureItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  static defaultProps = {
    item: {},
  }

  openProjectDetail = () => {
    const {navigate} = this.props.navigation;
    navigate('ProductDetailScreen', {id: this.props.item.id});
  }

  render() {
    const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.openProjectDetail()}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail}></Image>
        <Text style={styles.price}>{currency(item.price)}</Text>
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps)(CategoryFeatureItem)
