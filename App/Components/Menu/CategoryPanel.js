import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './CategoryPanelStyle'
import {connect} from 'react-redux'
class CategoryPanel extends Component {
  // Defaults for props
  static defaultProps = {
    items: [{
      id: 1,
      name: 'Category name'
    }],
    selectedCategory: PropTypes.func,
    navigate: null,
  }

  selectedCategory = (item) => {
    this.props.navigation.navigate('CategoryScreen', item);
  }

  render () {
    const {items} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.title}</Text>
        {
          items.map((item, index) => {
            return (
              <TouchableOpacity style={styles.categoryItem} key={index} onPress={() => this.selectedCategory(item)}>
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    )
  }
}
const mapStateToProps = (state) => {
  return {navigation: state.navigate.navigation}
}

export default connect(mapStateToProps)(CategoryPanel)
