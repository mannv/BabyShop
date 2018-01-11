import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'

// More info here: https://facebook.github.io/react-native/docs/flatlist.html

// Styles
import styles from './Styles/CategoryFeatureStyle'
import I18n from '../I18n'
import CategoryFeatureItem from '../Components/Screen/CategoryFeatureItem'
class CategoryFeature extends React.PureComponent {
  /* ***********************************************************
  * STEP 1
  * This is an array of objects with the properties you desire
  * Usually this should come from Redux mapStateToProps
  *************************************************************/
  // Defaults for props
  static defaultProps = {
    category: {}
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
    return <CategoryFeatureItem item={item}></CategoryFeatureItem>
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

  openCategoryList = () => {
    const {category} = this.props;
    const {navigate} = this.props.navigation;
    category['feature'] = 1;
    navigate('CategoryScreen', category);
  }

  render () {
    const {category} = this.props;
    return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{category.name}</Text>
        <TouchableOpacity onPress={() => this.openCategoryList()}>
          <Text style={styles.more}>{I18n.t('more')}</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={styles.listContent}
        data={category.items}
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
    navigation: state.navigate.navigation
  }
}

export default connect(mapStateToProps)(CategoryFeature)
