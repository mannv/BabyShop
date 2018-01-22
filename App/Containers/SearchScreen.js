import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import { Metrics } from '../Themes'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchScreenStyle'
import ProductListView from './ProductListView'
class SearchScreen extends Component {

  render () {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchIconBack} onPress={() => {this.props.navigation.goBack()}}>
              <Icon style={styles.iconBack} name='ios-arrow-back' size={Metrics.icons.medium} />
            </TouchableOpacity>
            <Text style={styles.categoryName}>{params.name}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ProductListView params={params}></ProductListView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(SearchScreen)
