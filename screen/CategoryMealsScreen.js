import React from "react";
import { StyleSheet, View, Text, Button, Platform } from "react-native";

//data
import { CATEGORIES } from "../data/dummy-data";
//color
import Colors from "../constants/Color";
const CategoriesMealsScreen = props => {
  // recup l'id du title sur lequel on a clicker dans la page categoriesScreen est laffiche dans le text
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  //
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
      <Text> {selectedCategory.title} </Text>
      <Button
        title="Got to Details"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
      <Button
        title="go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};
// option navigation Dinamyc
CategoriesMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
    },
    headerTintColor: Platform.OS === "android" ? "white" : "black"
  };
};

// css
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesMealsScreen;
