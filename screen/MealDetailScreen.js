import React, { useEffect, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
//
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from "../store/actions/meals";
import Colors from "../constants/Color";

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText> {props.children} </DefaultText>
    </View>
  );
};
//
const MealDetailScreen = props => {
  const availableMeals = useSelector(state => state.meals.meals);
  const mealId = props.navigation.getParam("mealId");
  const currentMealIsFavorite = useSelector(state =>
    state.meals.favoriteMeals.some(meal => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  const dispatch = useDispatch();

  const toogleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({ toggleFav: toogleFavoriteHandler });
  }, [toogleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView style={styles.content}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText> {selectedMeal.duration} Min </DefaultText>
        <DefaultText> {selectedMeal.complexity.toUpperCase()} </DefaultText>
        <DefaultText> {selectedMeal.affordability.toUpperCase()} </DefaultText>
      </View>
      <Text style={styles.title}> ingredient </Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}> {ingredient} </ListItem>
      ))}
      <Text style={styles.title}> steps </Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}> {step} </ListItem>
      ))}
    </ScrollView>
  );
};
// custom header Nav (button)
MealDetailScreen.navigationOptions = navigationData => {
  // const mealId = navigationData.navigation.getParam("mealId");
  const mealTitle = navigationData.navigation.getParam("mealTitle");
  const toggleFavorite = navigationData.navigation.getParam("toggleFav");
  const isFavorite = navigationData.navigation.getParam("isFav");
  //const selectedMeal = MEALS.find(meal => meal.id === mealId);
  //
  return {
    headerTitle: mealTitle,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavorite}
        />
      </HeaderButtons>
    )
  };
};
//css
const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.primaryColor,
  },
  image: {
    marginVertical: 5,
    width: "100%",
    height: 200
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center"
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 7
  }
});

export default MealDetailScreen;
