import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CartScreenStyle'
import CartList from './CartList'

class CartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    console.log('cart');
    console.log(this.props.cart);
  }

  render () {
    return (
      <View style={styles.container}>
        <CartList items={this.state.items}></CartList>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    demo: state.cart.demo,
  }
}

export default connect(mapStateToProps)(CartScreen)
