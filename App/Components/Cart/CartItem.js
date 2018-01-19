import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './CartItemStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Metrics} from '../../Themes'

import {increase, decrease} from '../../Redux/Actions/CartAction'
import {deleteCartItem} from '../../Redux/Actions/PopupAction'
import {connect} from 'react-redux'
import {currency} from '../../Lib/global'
class CartItem extends Component {
  // Defaults for props
  static defaultProps = {
    item: {},
    product: {}
  }

  changeAmount = (add = true) => {
    const {item} = this.props;
    if(!add && item.amount == 1) {
      console.log('Amount min = 1');
      return;
    }
    if (add == true) {
      this.props.increase(item.id);
    } else {
      this.props.decrease(item.id);
    }
  }

  render() {
    const {item, product} = this.props;
    const amount = item.amount;

    return (
      <View style={styles.container}>
        <View style={styles.thumbnail}>
          <Image source={{uri: product.thumbnail}} style={styles.img}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>
          <View style={styles.amount}>
            <TouchableOpacity style={styles.minusIcon} onPress={() => this.changeAmount(false)}>
              <FontAwesome style={styles.iconColor} name='minus' size={Metrics.icons.small}/>
            </TouchableOpacity>
            <Text style={styles.number}>{amount}</Text>
            <TouchableOpacity style={styles.plusIcon} onPress={() => this.changeAmount(true)}>
              <FontAwesome style={styles.iconColor} name='plus' size={Metrics.icons.small}/>
            </TouchableOpacity>
          </View>

          <View style={styles.pr}>
            {product.old_price > 0 ? <Text style={styles.oldPrice}>{currency(product.old_price)}</Text> : null}
            <Text style={styles.price}>
              {currency(product.price)}
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.props.deleteCartItem(product.id)} style={styles.removeIcon}>
          <FontAwesome style={styles.removeIconFont} name="remove" size={Metrics.icons.tiny}></FontAwesome>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {increase, decrease, deleteCartItem})(CartItem);
