import React, {Component} from 'react'
import {ScrollView, Text, View, TouchableOpacity, Image, Alert} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductDetailScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Metrics} from '../Themes'
import Swiper from 'react-native-swiper'
import I18n from '../I18n'

import {setCurrentNavigation} from '../Redux/Actions/NavigationAction'
import {addToCart} from '../Redux/Actions/CartAction'
import ProductDetailScreenAPI from '../Services/ProductDetailScreenAPI'
import {currency} from '../Lib/global'
import {showWaiting, hideWaiting} from '../Redux/Actions/PopupAction'
class ProductDetailScreen extends Component {
  api = null;

  constructor(props) {
    super(props);
    this.api = new ProductDetailScreenAPI();
    this.state = {
      amount: 1,
      product: null
    }
  }

  changeAmount = (add = true) => {
    let {amount} = this.state;
    if (add == true) {
      amount++;
    } else {
      amount--;
    }
    if (amount < 1) {
      amount = 1;
    }
    this.setState({amount, amount});
  }


  componentDidMount() {
    this.props.setCurrentNavigation(this.props.navigation);
    const {params} = this.props.navigation.state;
    this.props.showWaiting();
    this.api.productDetail(params.id, (json) => {
      this.props.hideWaiting();
      if (!json.status) {
        return;
      }
      this.setState({product: json.data});
    });
  }


  gotoCart = (id) => {
    console.log('Add to card: ' + JSON.stringify({id: id, amount: this.state.amount}));
    this.props.addToCart(id, this.state.amount);
    const {navigate} = this.props.navigation;
    navigate('MainScreen', {tab: 'cart'})
  }

  render() {
    const {navigation} = this.props;
    const item = this.state.product;
    if (item == null) {
      return null
    }
    const swiperHeight = Metrics.screenWidth;
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchIconBack} onPress={() => {
              navigation.goBack()
            }}>
              <Icon style={styles.iconBack} name='ios-arrow-back' size={Metrics.icons.medium}/>
            </TouchableOpacity>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <Swiper autoplay={false} height={swiperHeight} paginationStyle={{bottom: 10}}
                    activeDotStyle={{backgroundColor: '#ff5722'}} showsButtons={false}>
              {
                item.images.data.map((item, index) => {
                  return (
                    <Image key={index} style={styles.image} source={{uri: item.image}}/>
                  )
                })
              }
            </Swiper>

            <View style={styles.productInfoWapper}>
              <Text style={styles.productName}>{item.name}</Text>

              <Text style={styles.price}> {currency(item.price)}
                {item.old_price > 0 ? <Text style={styles.oldPrice}>{currency(item.old_price)}</Text> : null}
              </Text>
            </View>
            <View style={styles.descriptionWapper}>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </ScrollView>
          <View style={styles.addToCart}>
            <TouchableOpacity style={styles.minusIcon} onPress={() => this.changeAmount(false)}>
              <FontAwesome name='minus' size={Metrics.icons.small}/>
            </TouchableOpacity>
            <Text style={styles.amount}>{this.state.amount}</Text>
            <TouchableOpacity style={styles.plusIcon} onPress={() => this.changeAmount(true)}>
              <FontAwesome name='plus' size={Metrics.icons.small}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shoppingCartIcon} onPress={() => this.gotoCart(item.id)}>
              <FontAwesome style={styles.icon_add_to_cart} name='shopping-cart' size={Metrics.icons.small}/>
              <Text style={styles.label_add_to_cart}>{I18n.t('add_to_cart')}</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {setCurrentNavigation, addToCart, showWaiting, hideWaiting})(ProductDetailScreen)
