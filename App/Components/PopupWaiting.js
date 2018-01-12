import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import {View, ActivityIndicator, Modal, Text} from 'react-native'
import styles from './Styles/PopupWaitingStyle'
import {connect} from 'react-redux'
import { Colors } from '../Themes'
import I18n from '../I18n'
class PopupWaiting extends Component {
  // Defaults for props
  static defaultProps = {
    visible: false
  }

  render() {
    return (
      <Modal transparent={true} visible={this.props.visible}>
        <View style={styles.container}>
          <View style={styles.box}>
            <ActivityIndicator size="large" color={Colors.organe} />
            <Text style={styles.textWaiting}>{I18n.t('please_waiting')}</Text>
          </View>
        </View>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps)(PopupWaiting);
