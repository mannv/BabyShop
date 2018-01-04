import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './CartItemStyle'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Metrics} from '../../Themes'

export default class CartItem extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  static defaultProps = {
    item: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: 1
    }
  }

  changeAmount = (add = true) => {
    let {amount} = this.state;
    if (add == true) {
      amount++;
    } else {
      amount--;
    }
    if (amount < 1) {
      amount = 1;
    }
    this.setState({amount, amount});
  }

  render () {
    const {item} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.thumbnail}>
          <Image source={{uri: item.thumbnail}} style={styles.img} />
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
