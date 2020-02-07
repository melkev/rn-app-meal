import React from "react";
import { Platform, Text } from "react-native";
//
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
//icon
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// screen folder
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoriesMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import FiltersScreen from "../screen/FiltersScreen";
//colors
import Colors from "../constants/Color";
// header nav

// default styles
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans"
  },
  headerTintColor: Platform.OS === "android" ? "white" : "black"
};

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// favoriteScreen header nav
const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// config
const tabScreenConfig = {
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
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "open-sans-bold" }}>Meals</Text>
        ) : (
          "Meals"
        )
    }
  },
  Favorites: {
    // favoriteScreen
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name={"ios-star"} size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
      Platform.OS === "android" ? (
        <Text style={{ fontFamily: "open-sans-bold" }}>Favorit</Text>
      ) : (
        "Favorit  "
      )
    }
  }
};

// nav to bottom
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primaryColor
        }
      })
    : //ios
      createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          labelStyle: {
            fontFamily: "open-sans"
          },
          activeTintColor: Colors.accentColor
        }
      });
//
const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    defaultNavigationOptions: defaultStackNavOptions
  }
);

// nav draw
const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor
    },
    drawerType: "back",
    drawerBackgroundColor: Colors.primary
  }
);

export default createAppContainer(MainNavigator);
