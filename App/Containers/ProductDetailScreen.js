import React, {Component} from 'react'
import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native'
import {connect} from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProductDetailScreenStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import {Metrics} from '../Themes'
import Swiper from 'react-native-swiper'
import I18n from '../I18n'

class ProductDetailScreen extends Component {
  render() {
    const {navigation} = this.props;
    const {params} = this.props.navigation.state;
    const images = [
      "https://cf.shopee.vn/file/da9ef400d360401df1fe3dfc5d74b7fc",
      "https://cf.shopee.vn/file/7248384d19dcef9d06e69fb3a03596cb",
      "https://cf.shopee.vn/file/197482ad6b3857541e9c17b41c3a2962",
      "https://cf.shopee.vn/file/85e2e32da92a67e185dcbc109bdfad42",
      "https://cf.shopee.vn/file/d6ff0bcfc961bf9e0c705ee0ab633f2e"
    ];
    const swiperHeight = Metrics.screenWidth;
    const oldPrice = 100000;
    const desc = `4h30 ngày 3/1, sau tiếng nổ đinh tai từ kho chứa phế liệu ở giữa làng Quan Độ, xã Văn Môn (Yên Phong, Bắc Ninh), mặt đất rung chuyển mạnh, cột điện, cây cối đổ nghiêng.\n\nNăm ngôi nhà mái ngói đổ sập và bị khoét thành hố sâu chừng 10m, rộng 10m. Khoảng 10 ngôi nhà mái ngói xung quanh bị bay mất mái, sập tường. Trong đó ngôi nhà ba tầng gần kho phế liệu bị phạt mất tầng trên.\n\nĐất đá, gạch ngói và đầu đạn từ hiện trường bay rào rào, phủ khắp mái nhà, đường làng ngõ xóm trong bán kính khoảng 1km. Nhiều đầu đạn xuyên qua mái ngói, cửa kính rơi vào nhà dân.`;
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchIconBack} onPress={() => {
              navigation.goBack()
            }}>
              <Icon style={styles.iconBack} name='ios-arrow-back' size={Metrics.icons.medium}/>
            </TouchableOpacity>
            <Text style={styles.title}>Giày Lười Mẫu Mới Loại 1 - kèm feedback của khách</Text>
          </View>
        </View>
        <View style={styles.content}>
          <ScrollView>
            <Swiper autoplay={false} height={swiperHeight} paginationStyle={{bottom: 10}}
                    activeDotStyle={{backgroundColor: '#ff5722'}} showsButtons={false}>
              {
                images.map((item, index) => {
                  return (
                    <Image key={index} style={styles.image} source={{uri: item}}/>
                  )
                })
              }
            </Swiper>

            <View style={styles.productInfoWapper}>
              <Text style={styles.productName}>Giày Lười Mẫu Mới Loại 1 - kèm feedback của khách</Text>

              <Text style={styles.price}>1.000.000 {oldPrice > 0 ? <Text style={styles.oldPrice}>{oldPrice}</Text> : null}</Text>
            </View>
            <View style={styles.descriptionWapper}>
              <Text style={styles.description}>{desc}</Text>
            </View>
          </ScrollView>
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
