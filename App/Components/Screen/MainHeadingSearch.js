import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import styles from '../Styles/MainHeadingSearchStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import {Metrics} from '../../Themes'
import { connect } from 'react-redux'
class MainHeadingSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyWord: ''
    }
  }

  // Defaults for props
  static defaultProps = {
    openMenu: PropTypes.func
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconTouchable} onPress={this.props.openMenu}>
          <Icon name='ios-menu' size={Metrics.icons.medium} color='white'/>
        </TouchableOpacity>
        <TextInput onChangeText={(text) => this.setState({keyWord: text})} onBlur={() => this.searchProduct()} style={styles.searchInput}></TextInput>
      </View>
    )
  }

  searchProduct() {
    this.props.navigation.navigate('SearchScreen', {name: this.state.keyWord});
  }
}

const mapStateToProps = (state) => {
  return {navigation: state.navigate.navigation}
}

export default connect(mapStateToProps)(MainHeadingSearch)
