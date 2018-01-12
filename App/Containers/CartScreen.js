import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CartScreenStyle'
import CartList from './CartList'
import CartRemoveItemModal from '../Components/Cart/CartRemoveItemModal'

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

  render() {
    console.log(JSON.stringify(this.props.cart));
    const {deleteCartItem} = this.props;
    return (
      <View style={styles.container}>
        <CartList items={this.state.items}></CartList>
        <CartRemoveItemModal config={deleteCartItem}></CartRemoveItemModal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    deleteCartItem: state.popup.deleteCartItem
  }
}

export default connect(mapStateToProps)(CartScreen)
