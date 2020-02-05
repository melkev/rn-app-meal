import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const CategoriesMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Categories Meals Screen</Text>
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
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoriesMealsScreen;
