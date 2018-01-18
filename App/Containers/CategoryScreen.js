import React, {Component} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/CategoryScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import { Metrics } from '../Themes'
import CategoryListView from './CategoryListView'
import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'

class CategoryScreen extends Component {
  componentDidMount() {
    this.props.setCurrentNavigation(this.props.navigation);
  }

  render() {
    const {navigation} = this.props;
    const {navigate} = navigation;
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchIconBack} onPress={() => {navigation.goBack()}}>
              <Icon style={styles.iconBack} name='ios-arrow-back' size={Metrics.icons.medium} />
            </TouchableOpacity>
            <Text style={styles.categoryName}>{params.name}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <CategoryListView params={params}></CategoryListView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}
export default connect(mapStateToProps, {setCurrentNavigation})(CategoryScreen)
