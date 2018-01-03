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

class ProductDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quanlity: 1,
    }
  }

  changeQuanlity = (add = true) => {
    let {quanlity} = this.state;
    if (add == true) {
      quanlity++;
    } else {
      quanlity--;
    }
    if (quanlity < 1) {
      quanlity = 1;
    }
    this.setState({quanlity, quanlity});
  }

  gotoCart = () => {
    const {navigate} = this.props.navigation;
    navigate('MainScreen', {tab: 'cart'})
  }

  render() {
    const {navigation} = this.props;
    const {params} = this.props.navigation.state;
    const item = {
      name: "Giày Lười Mẫu Mới Loại 1 - kèm feedback của khách",
      oldPrice: 100000,
      price: 80000,
      desc: `4h30 ngày 3/1, sau tiếng nổ đinh tai từ kho chứa phế liệu ở giữa làng Quan Độ, xã Văn Môn (Yên Phong, Bắc Ninh), mặt đất rung chuyển mạnh, cột điện, cây cối đổ nghiêng.\n\nNăm ngôi nhà mái ngói đổ sập và bị khoét thành hố sâu chừng 10m, rộng 10m. Khoảng 10 ngôi nhà mái ngói xung quanh bị bay mất mái, sập tường. Trong đó ngôi nhà ba tầng gần kho phế liệu bị phạt mất tầng trên.\n\nĐất đá, gạch ngói và đầu đạn từ hiện trường bay rào rào, phủ khắp mái nhà, đường làng ngõ xóm trong bán kính khoảng 1km. Nhiều đầu đạn xuyên qua mái ngói, cửa kính rơi vào nhà dân.`,
      images: [
        "https://cf.shopee.vn/file/da9ef400d360401df1fe3dfc5d74b7fc",
        "https://cf.shopee.vn/file/7248384d19dcef9d06e69fb3a03596cb",
        "https://cf.shopee.vn/file/197482ad6b3857541e9c17b41c3a2962",
        "https://cf.shopee.vn/file/85e2e32da92a67e185dcbc109bdfad42",
        "https://cf.shopee.vn/file/d6ff0bcfc961bf9e0c705ee0ab633f2e"
      ]
    };
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
                item.images.map((item, index) => {
                  return (
                    <Image key={index} style={styles.image} source={{uri: item}}/>
                  )
                })
              }
            </Swiper>

            <View style={styles.productInfoWapper}>
              <Text style={styles.productName}>{item.name}</Text>

              <Text style={styles.price}>1.000.000
                {item.oldPrice > 0 ? <Text style={styles.oldPrice}>{item.oldPrice}</Text> : null}
              </Text>
            </View>
            <View style={styles.descriptionWapper}>
              <Text style={styles.description}>{item.desc}</Text>
            </View>
          </ScrollView>
          <View style={styles.addToCart}>
            <TouchableOpacity style={styles.minusIcon} onPress={() => this.changeQuanlity(false)}>
              <FontAwesome name='minus' size={Metrics.icons.small}/>
            </TouchableOpacity>
            <Text style={styles.quanlity}>{this.state.quanlity}</Text>
            <TouchableOpacity style={styles.plusIcon} onPress={() => this.changeQuanlity(true)}>
              <FontAwesome name='plus' size={Metrics.icons.small}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.shoppingCartIcon} onPress={() => this.gotoCart()}>
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

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailScreen)
