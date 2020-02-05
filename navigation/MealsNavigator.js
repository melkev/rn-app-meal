import { Platform} from 'react-native'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
// cscreen
import CategoriesScreen from "../screen/CategoriesScreen";
import CategoriesMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
//colors
import Colors from '../constants/Color'
const MealsNavigator = createStackNavigator({
  // home page
  Categories: {
    screen:CategoriesScreen,
    navigationOptions:{
      headerTitle: 'Meals Categories'
    }
    
  },
  // second page
  CategoryMeals: {
    screen: CategoriesMealsScreen,
    
  },
  MealDetail: MealDetailScreen
},{
  //initialRouteName: 'Categories',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" ? Colors.primaryColor : "white"
    },
    headerTintColor: Platform.OS === "android" ? "white" : "black"
  }
});

export default createAppContainer(MealsNavigator);
