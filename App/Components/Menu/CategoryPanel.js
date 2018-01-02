import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import styles from './CategoryPanelStyle'
import I18n from '../../I18n'
export default class CategoryPanel extends Component {
  // Defaults for props
  static defaultProps = {
    items: [{
      id: 1,
      name: 'Category name'
    }],
    selectedCategory: PropTypes.func
  }

  selectedCategory = (id) => {
    Alert.alert('choose category: ' + id);
  }

  render () {
    const {items} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{I18n.t('list_category')}</Text>
        {
          items.map((item, index) => {
            return (
              <TouchableOpacity style={styles.categoryItem} key={index} onPress={() => this.selectedCategory(item.id)}>
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            );
          })
        }
      </View>
    )
  }
}
