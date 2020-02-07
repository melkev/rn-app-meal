import React from "react";
import { useSelector } from "react-redux";

//data
import { CATEGORIES } from "../data/dummy-data";
// components
import MealList from "../components/MealList";

const CategoriesMealsScreen = props => {
  // recup l'id du title sur lequel on a clicker dans la page categoriesScreen est laffiche dans le text
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayMeals = availableMeals.filter(
    meal => meal.categoryId.indexOf(catId) >= 0
  );

  //
  return <MealList listData={displayMeals} navigation={props.navigation} />;
};
//
// option navigation Dinamyc
CategoriesMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

export default CategoriesMealsScreen;
