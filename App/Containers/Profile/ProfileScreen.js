import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
// Styles
import styles from './Styles/ProfileScreenStyle'
import I18n from '../../I18n'
import EditProfile from './Form/EditProfile'
import MyComponent from '../../Basic/MyComponent'
import UsersAPI from '../../Services/UsersAPI'
import {showWaiting, hideWaiting} from '../../Redux/Actions/PopupAction'
import {login} from '../../Redux/Actions/AuthAction'
class ProfileScreen extends MyComponent {
  api = null;

  constructor(props) {
    super(props);
    this.state = {
      errors: []
    }
    this.api = new UsersAPI(props);
  }

  submitForm(values) {
    this.props.showWaiting();
    this.api.cancelToken = this.makeRequest();
    this.api.update(values, (json) => {
      this.props.hideWaiting();
      setTimeout(() => {
        I18n.locale = json.data.locale;
        this.props.login(json.data);
      }, 100);
    })
  }

  render() {
    console.log(JSON.stringify(this.props.auth));
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>{I18n.t('profile')}</Text>
        <EditProfile
          errors={this.state.errors}
          onSubmit={(values) => this.submitForm(values)}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth
  }
}

export default connect(mapStateToProps, {showWaiting, hideWaiting, login})(ProfileScreen)
