import React, { Component } from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductDetailScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { Metrics } from '../Themes'

class ProductDetailScreen extends Component {
  render () {
    const {navigation} = this.props;
    const {params} = this.props.navigation.state;
    return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity style={styles.touchIconBack} onPress={() => {navigation.goBack()}}>
            <Icon style={styles.iconBack} name='ios-arrow-back' size={Metrics.icons.medium} />
          </TouchableOpacity>
          <Text style={styles.categoryName}>ID {params.name} -- {params.id} -- [{params.feature}]</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView>
          <Text>Noi dung</Text>
        </ScrollView>
      </View>
    </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen)
