import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'

// Styles
import styles from './Styles/RegisterScreenStyle'
import RegisterForm from '../Components/Screen/RegisterForm'
import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'

class RegisterScreen extends Component {


  componentDidMount() {
    this.props.setCurrentNavigation(this.props.navigation);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.auth != undefined) {
      this.props.navigation.navigate('MainScreen');
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.container, {padding: 25}]}>
          <RegisterForm />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps, {setCurrentNavigation})(RegisterScreen)
