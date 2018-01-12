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
import {deleteCartItem} from '../Redux/Actions/PopupAction'
class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],

    }
  }

  componentDidMount() {
    console.log(this.props.cart);
  }

  checkOut = () => {
    console.log('Check out');
  }

  render() {
    console.log(JSON.stringify(this.props.cart));
    const {deleteCart} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>{I18n.t('cart_title')}</Text>
          <View style={styles.topBtn}>
            <TouchableOpacity style={styles.touchIcon} onPress={() => this.props.deleteCartItem(0)}>
              <FontAwesome style={styles.iconTrash} name="trash" size={Metrics.icons.small}></FontAwesome>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <CartList items={this.state.items}></CartList>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.labelTotalPrice}>{I18n.t('total_price')}: </Text>
          <Text style={styles.price}>1.000.000 VND</Text>
          <View style={styles.btnCheckout}>
            <TouchableOpacity onPress={() => this.checkOut()}>
              <Text style={styles.checkOut}>{I18n.t('btn_check_out')}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <CartRemoveItemModal config={deleteCart}></CartRemoveItemModal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    deleteCart: state.popup.deleteCartItem
  }
}

export default connect(mapStateToProps, {deleteCartItem})(CartScreen)
