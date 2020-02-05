import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
//
import { CATEGORIES } from "../data/dummy-data";


//
const CategoriesScreen = props => {
  // return a view
  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: itemData.item.id
            }
          });
        }}
      >
        <View>
          <Text> {itemData.item.title} </Text>
        </View>
      </TouchableOpacity>
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
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
