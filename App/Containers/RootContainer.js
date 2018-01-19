import React, {Component} from 'react'
import {View, StatusBar} from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'
import {connect} from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import PopupWaiting from '../Components/PopupWaiting'
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar hidden={true} barStyle='light-content'/>
        <ReduxNavigation />
        <PopupWaiting visible={this.props.waiting}/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    waiting: state.popup.waiting
  }
}
// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)
