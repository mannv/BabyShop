import React from 'react'
import {View, Text, FlatList} from 'react-native'
import {connect} from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/ListFlashSaleStyle'
import FlashSaleDetail from '../Components/Screen/FlashSaleDetail'
import FlashSaleScreenAPI from '../Services/FlashSaleScreenAPI'
import {showWaiting, hideWaiting} from '../Redux/Actions/PopupAction'

class ListFlashSale extends React.PureComponent {
  api = null;

  constructor(props) {
    super(props);
    this.api = new FlashSaleScreenAPI();
    this.state = {
      products: [],
      currentPage: 1,
      totalPage: 0,
      refreshing: true,
      pageLoad: []
    }
  }

  onEndReached() {
    if (this.state.totalPage < this.state.currentPage) {
      console.log('Total page: ' + this.state.totalPage);
      console.log('currentPage: ' + this.state.currentPage);
      return;
    }
    // this.props.showWaiting();
    this.api.flashSaleDetail(this.state.currentPage, (json) => {
      // this.props.hideWaiting();
      this.setState({refreshing: false});
      if (!json.status) {
        return;
      }
      const {pagination} = json;

      if(this.state.pageLoad.find(e => e == pagination.current_page)) {
        console.log('Page: ' + pagination.current_page + ' da load du lieu roi');
        return;
      } else {
        this.setState({pageLoad: this.state.pageLoad.concat(pagination.current_page)});
      }

      if (pagination.total_pages > this.state.currentPage) {
        this.setState({totalPage: pagination.total_pages});
        this.setState({currentPage: pagination.current_page + 1});
      }

      // console.log(json);
      this.setState({products: this.state.products.concat(json.data)});
      console.log('count: ' + this.state.products.length);
      console.log(JSON.stringify(this.state.pageLoad));

    });
  }

  onRefresh() {
    console.log('===> onRefresh');
  }

  /* ***********************************************************
   * STEP 2
   * `renderRow` function. How each cell/row should be rendered
   * It's our best practice to place a single component here:
   *
   * e.g.
   return <MyCustomCell title={item.title} description={item.description} />
   *************************************************************/
  renderRow({item}) {
    return <FlashSaleDetail item={item}></FlashSaleDetail>
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
    return null
  }

  renderSeparator = () => {
    return null
  }

  // The default function if no Key is provided is index
  // an identifiable key is important if you plan on
  // item reordering.  Otherwise index is fine
  keyExtractor = (item, index) => index

  // How many items should be kept im memory as we scroll?
  oneScreensWorth = 10

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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={() => this.onRefresh()}
          onEndReached={() => this.onEndReached()}
          onEndReachedThreshold={0.5}
          contentContainerStyle={styles.listContent}
          data={this.state.products}
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
  return {}
}

export default connect(mapStateToProps, {showWaiting, hideWaiting})(ListFlashSale)
