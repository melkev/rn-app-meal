import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
//
import { CATEGORIES } from "../data/dummy-data";
// return a view

const renderGridItem = (itemData) => {
  return <View style={styles.gridItem}>
      <Text> {itemData.item.title} </Text>
    </View>
  
};
//
const CategoriesScreen = props => {
  return (
    <FlatList
      keyExtractor={(item, index)=> item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
