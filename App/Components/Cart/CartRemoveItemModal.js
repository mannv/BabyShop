import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Modal} from 'react-native'
// import Modal from 'react-native-modalbox';
import styles from './CartRemoveItemModalStyle'
import I18n from '../../I18n'
import {connect} from 'react-redux'
import {deleteCartItem, deleteCartItemCancel} from '../../Redux/Actions/PopupAction'
import {deleteProduct} from '../../Redux/Actions/CartAction'
class CartRemoveItemModal extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // Defaults for props
  static defaultProps = {
    config: PropTypes.object
  }

  removeCartItem = () => {
    const {id} = this.props.config;
    this.props.deleteProduct(id);
    this.props.deleteCartItemCancel();
  }

  render() {
    console.log(JSON.stringify(this.props));
    return (
      <Modal
        transparent={true}
        animationType='fade'
        visible={this.props.config.visible}
        onRequestClose={() => this.props.deleteCartItemCancel()}
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Text style={styles.title}>{I18n.t('are_you_sure')}</Text>
            <View style={styles.btn}>
              <View style={styles.btnNo}>
                <TouchableOpacity onPress={() => this.props.deleteCartItemCancel()}>
                  <Text style={styles.btnText}>{I18n.t('btn_no')}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnYes}>
                <TouchableOpacity onPress={() => this.removeCartItem()}>
                  <Text style={styles.btnText}>{I18n.t('btn_yes')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    deleteCartItem: state.popup.deleteCartItem
  }
}

export default connect(mapStateToProps, {deleteCartItem, deleteCartItemCancel, deleteProduct})(CartRemoveItemModal)
