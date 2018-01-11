import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './CartItemStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Metrics} from '../../Themes'

import {increase, decrease, deleteProduct, emptyCart} from '../../Redux/Actions/CartAction'
import {connect} from 'react-redux'
class CartItem extends Component {
  // Defaults for props
  static defaultProps = {
    item: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: 0
    }
  }

  changeAmount = (add = true) => {
    const {item} = this.props;
    if (add == true) {
      this.props.increase(item.id);
    } else {
      this.props.decrease(item.id);
    }
  }


  componentDidMount() {
    const {item, cart} = this.props;
    if(cart != undefined) {
      let cartItem = cart.find((a) => {
        return a.id == item.id;
      });
      if (cartItem != undefined) {
        this.setState({amount: cartItem.amount});
      }
    }
  }


  render() {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.thumbnail}>
          <Image source={{uri: item.thumbnail}} style={styles.img}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.amount}>
            <TouchableOpacity style={styles.minusIcon} onPress={() => this.changeAmount(false)}>
              <FontAwesome style={styles.iconColor} name='minus' size={Metrics.icons.small}/>
            </TouchableOpacity>
            <Text style={styles.number}>{this.state.amount}</Text>
            <TouchableOpacity style={styles.plusIcon} onPress={() => this.changeAmount(true)}>
              <FontAwesome style={styles.iconColor} name='plus' size={Metrics.icons.small}/>
            </TouchableOpacity>
          </View>

          <View style={styles.pr}>
            {item.oldPrice > 0 ? <Text style={styles.oldPrice}>{item.oldPrice}</Text> : null}
            <Text style={styles.price}>
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  }
}

export default connect(mapStateToProps, {increase, decrease, deleteProduct, emptyCart})(CartItem);
