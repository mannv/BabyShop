import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CartListStyle'
import CartItem from '../Components/Cart/CartItem'

class CartList extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  constructor(props) {
    super(props);
    this.state = {
      dataObjects: []
    }
  }

  componentDidMount() {
    const items = [
      {
        id: 1,
        name: "Giày Lười Mẫu Mới Loại 1 - kèm feedback của khách",
        oldPrice: 120000,
        price: 80000,
        thumbnail: "https://cf.shopee.vn/file/da9ef400d360401df1fe3dfc5d74b7fc"
      },
      {
        id: 2,
        name: "Giày Lười Mẫu Mới Loại 1 - kèm feedback của khách",
        oldPrice: 100000,
        price: 90000,
        thumbnail: "https://cf.shopee.vn/file/7248384d19dcef9d06e69fb3a03596cb"
      },
      {
        id: 3,
        name: "Giày Lười Mẫu Mới",
        oldPrice: 0,
        price: 50000,
        thumbnail: "https://cf.shopee.vn/file/85e2e32da92a67e185dcbc109bdfad42"
      },
      {
        id: 4,
        name: "Giày Lười Mẫu Mới Loại 1",
        oldPrice: 115000,
        price: 70000,
        thumbnail: "https://cf.shopee.vn/file/d6ff0bcfc961bf9e0c705ee0ab633f2e"
      }
    ];
    this.setState({dataObjects: items});
  }

  changeQuanlity = (id, add = true) => {
    // const amount = this.state.cartAmount;
    // let quanlity = amount[id];
    // console.log('quanlity: ' + quanlity);
    // if (add == true) {
    //   quanlity++;
    // } else {
    //   quanlity--;
    // }
    // if (quanlity < 1) {
    //   quanlity = 1;
    // }
    // amount[id] = quanlity;
    // this.demo();
    // this.setState({cartAmount, amount});
  }

  /* ***********************************************************
  * STEP 2
  * `renderRow` function. How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={item.title} description={item.description} />
  *************************************************************/
  renderRow ({item}) {
    const amount = 1;
    return <CartItem item={item}></CartItem>
  }

  /* ***********************************************************
  * STEP 3
  * Consider the configurations we've set below.  Customize them
  * to your liking!  Each with some friendly advice.
  *************************************************************/
  // Render a header?
  renderHeader = () => {
    return null
  }

  // Render a footer?
  renderFooter = () => {
    return null
  }

  // Show this when data is empty
  renderEmpty = () =>
    <Text style={styles.label}> - Nothing to See Here - </Text>

  renderSeparator = () => {
    return null
  }

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 20

  // extraData is for anything that is not indicated in data
  // for instance, if you kept "favorites" in `this.state.favs`
  // pass that in, so changes in favorites will cause a re-render
  // and your renderItem will have access to change depending on state
  // e.g. `extraData`={this.state.favs}

  // Optimize your list if the height of each item can be calculated
  // by supplying a constant height, there is no need to measure each
  // item after it renders.  This can save significant time for lists
  // of a size 100+
  // e.g. itemLayout={(data, index) => (
  //   {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  // )}

  render () {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={(item) => this.renderRow(item)}
          keyExtractor={this.keyExtractor}
          initialNumToRender={this.oneScreensWorth}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartList)
