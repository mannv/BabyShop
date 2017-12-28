import React from 'react'
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import I18n from '../I18n'
// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/FlashSale'
import FlashSaveItem from '../Components/Screen/FlashSaveItem'

class FlashSale extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  state = {
    dataObjects: [
      {id: 1, price: '99000',purchase: 1, uri: 'https://cf.shopee.vn/file/578c3daa8652b3f2013fec08a1b6d037_tn'},
      {id: 2, price: '180000',purchase: 10, uri: 'https://cf.shopee.vn/file/635987fe44199841a6af8295ce5a7fe7_tn'},
      {id: 3, price: '99000',purchase: 1, uri: 'https://cf.shopee.vn/file/7e9fc945c8d650ef618cf678074b7072_tn'},
      {id: 4, price: '116000',purchase: 1, uri: 'https://cf.shopee.vn/file/8e84afdf8bc534ec4f525b9e8aa5b4ca_tn'},
      {id: 5, price: '39000',purchase: 1, uri: 'https://cf.shopee.vn/file/ce628de4c6eb9408d99005d66d6f27a1_tn'},
      {id: 6, price: '46000',purchase: 1, uri: 'https://cf.shopee.vn/file/0c6dfa305b72950843003e611d8fde8b_tn'}
    ]
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
    return (
      <FlashSaveItem id={item.id} price={item.price} purchase={item.purchase} uri={item.uri}></FlashSaveItem>
    )
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
  renderEmpty = () => {
    return <Text style={styles.label}> - Nothing to See Here - </Text>
  }

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
        <View style={styles.heading}>
          <Text style={styles.title}>{I18n.t('flash_sale')}</Text>
          <TouchableOpacity onPress={() => {Alert.alert('ok')}}>
            <Text style={styles.more}>{I18n.t('more...')}</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          contentContainerStyle={styles.listContent}
          data={this.state.dataObjects}
          renderItem={this.renderRow}
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

export default connect(mapStateToProps, mapDispatchToProps)(FlashSale)
