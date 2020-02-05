import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
//
import { Categories} from '../data/dummy-data'
const CategoriesScreen = props => {
  return (
   <FlatList numColumns={2} />
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesScreen;
