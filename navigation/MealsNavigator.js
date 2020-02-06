import React from "react";
import { Platform } from "react-native";
//
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
//icon
import { Ionicons } from "@expo/vector-icons";
// screen folder
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoriesMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
//colors
import Colors from "../constants/Color";
//
const MealsNavigator = createStackNavigator(
  {
    // home page
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meals Categories"
      }
    },
    // second page
    CategoryMeals: {
      screen: CategoriesMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    //initialRouteName: 'Categories',

    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : "black"
    }
  }
);
// nav to bottom
const MealsFavNavigator = createBottomTabNavigator(
  {
    Meals: {
      // screen CategoriesScreen
      screen: MealsNavigator,
      navigationOptions: {
        // add icon to tabs
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name={"ios-restaurant"}
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    },
    Favorites: {
      // favoriteScreen
      screen: FavoritesScreen,
      navigationOptions: {
        
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name={"ios-star"}
              size={25}
              color={tabInfo.tintColor}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

export default createAppContainer(MealsFavNavigator);
