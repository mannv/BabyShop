import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CartScreenStyle'
import CartList from './CartList'
import CartRemoveItemModal from '../Components/Cart/CartRemoveItemModal'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Metrics} from '../Themes'
import I18n from '../I18n'
import {deleteCartItem, showWaiting, hideWaiting} from '../Redux/Actions/PopupAction'
import CartScreenAPI from '../Services/CartScreenAPI'

import {currency} from '../Lib/global'

class CartScreen extends Component {
  api = null;

  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.api = new CartScreenAPI(props);
  }

  componentDidMount() {
    if(this.checkCartEmpty()) {
      return;
    }
    const {cart} = this.props;
    let ids = [];
    cart.forEach((item) => {
      ids.push(item.id);
    });

    this.props.showWaiting();
    this.api.getCartDetail(ids, (json) => {
      this.props.hideWaiting();
      if (!json.status) {
        return;
      }
      this.setState({products: json.data});
    });
  }

  checkOut = () => {
    this.props.showWaiting();
    setTimeout(() => {
      this.props.hideWaiting();
      this.props.navigation.navigate('CheckOutScreen');
    }, 5000);
  }

  checkCartEmpty() {
    const {cart} = this.props;
    if(cart.length == 0) {
      return true;
    }
    return false;
  }

  renderCartBottom = () => {
    if(this.checkCartEmpty() || this.state.products.length == 0) {
      return null;
    }

    const {cart} = this.props;
    let totalPrice = 0;
    this.state.products.forEach((item) => {
      const cartItem = cart.find(o => o.id == item.id);
      if (cartItem != undefined) {
        totalPrice += item.price * cartItem.amount;
      }
    });

    return (
      <View style={styles.bottom}>
        <Text style={styles.labelTotalPrice}>{I18n.t('total_price')}: </Text>
        <Text style={styles.price}>{currency(totalPrice)}</Text>
        {
          totalPrice > 0 ? this.renderCheckOutButton() : null
        }
      </View>
    );
  }

  renderCheckOutButton() {
    return (
      <View style={styles.btnCheckout}>
        <TouchableOpacity onPress={() => this.checkOut()}>
          <Text style={styles.checkOut}>{I18n.t('btn_check_out')}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  removeCartIcon() {
    if(this.checkCartEmpty() || this.state.products.length == 0) {
      return;
    }
    return (
      <TouchableOpacity style={styles.touchIcon} onPress={() => this.props.deleteCartItem(0)}>
        <FontAwesome style={styles.iconTrash} name="trash" size={Metrics.icons.small}></FontAwesome>
      </TouchableOpacity>
    );
  }

  renderCartDetail() {
    if(this.checkCartEmpty()) {
        return (
          <View style={{justifyContent: 'center', marginTop: Metrics.screenHeight / 4}}>
            <Text style={{textAlign: 'center'}}>{I18n.t('cart_empty')}</Text>
          </View>
        )
    }

    if(this.state.products.length > 0) {
      return (
        <CartList products={this.state.products}></CartList>
      )
    }
    return null;
  }

  render() {
    const {deleteCart} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>{I18n.t('cart_title')}</Text>
          <View style={styles.topBtn}>
            {this.removeCartIcon()}
          </View>
        </View>
        <View style={styles.body}>
          {this.renderCartDetail()}
        </View>

        {this.renderCartBottom()}


        <CartRemoveItemModal config={deleteCart}></CartRemoveItemModal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    auth: state.auth.auth,
    deleteCart: state.popup.deleteCartItem,
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps, {deleteCartItem, showWaiting, hideWaiting})(CartScreen)
