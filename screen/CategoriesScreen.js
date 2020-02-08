import React from "react";
import { StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
//
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// data
import { CATEGORIES } from "../data/dummy-data";
// componenet
import CustomHeaderButton from "../components/HeaderButton";
import CategoryGridTile from "../components/CategoryGridTile";
// color
import Colors from '../constants/Color'
//
const CategoriesScreen = props => {
  // return a view
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      />
    );
  };
  //
  return (
    <FlatList
    contentContainerStyle={styles.list}
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title="menu" iconName="ios-menu" onPress={() => {
          navData.navigation.toggleDrawer()
        }} />
      </HeaderButtons>
    )
  };
};

// style /css
const styles = StyleSheet.create({
  list: {
    backgroundColor: Colors.primaryColor
  }
});

export default CategoriesScreen;
