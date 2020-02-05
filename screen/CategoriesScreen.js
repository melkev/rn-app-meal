import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
//
import { CATEGORIES } from "../data/dummy-data";
// componenet
import CategoryGridTile from "../components/CategoryGridTile";

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
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

// style /css
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
