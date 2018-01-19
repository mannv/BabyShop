import React from 'react'
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CategoryListViewStyle'
import CategoryScreenAPI from '../Services/CategoryScreenAPI'
import {currency} from '../Lib/global'
class CategoryListView extends React.PureComponent {
  api = null;
  constructor(props) {
    super(props);
    this.api = new CategoryScreenAPI();
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    const {params} = this.props;
    this.api.categoryProduct(params.id, (json) => {
      if(!json.status) {
        return;
      }
      this.setState({products: json.data});
    });
  }

  gotoDetail = (id) => {
    const {navigate} = this.props.navigation;
    navigate('ProductDetailScreen', {id: id});
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
    return (
      <TouchableOpacity onPress={() => this.gotoDetail(item.id)} style={styles.item}>
        <Image style={styles.thumbnail} source={{uri: item.thumbnail}}/>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.price}>{currency(item.price)}</Text>
      </TouchableOpacity>
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContent}
          data={this.state.products}
          renderItem={(item) => this.renderRow(item)}
          numColumns={2}
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
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps)(CategoryListView)
