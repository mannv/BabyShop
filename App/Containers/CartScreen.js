import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CartScreenStyle'

class CartScreen extends Component {
  render () {
    const cart = async () => {
      try {
        const value = await AsyncStorage.getItem('@shoping_cart');
        return value;
      } catch (error) {
        return '';
      }
    };
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <Text>{cart}</Text>
        </KeyboardAvoidingView>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)
