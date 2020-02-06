import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

//data
import { CATEGORIES, MEALS } from "../data/dummy-data";

// components
import MealItem from "../components/MealItem";

const CategoriesMealsScreen = props => {
  // return view compoenents
  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {}}
      />
    );
  };

  // recup l'id du title sur lequel on a clicker dans la page categoriesScreen est laffiche dans le text
  const catId = props.navigation.getParam("categoryId");

  const displayMeals = MEALS.filter(
    meal => meal.categoryId.indexOf(catId) >= 0
  );
  //
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
// option navigation Dinamyc
CategoriesMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
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
