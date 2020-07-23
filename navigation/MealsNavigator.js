import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen/MealDetailsScreen";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetails: {
    screen: MealDetailsScreen,
  },
});

export default createAppContainer(MealsNavigator);
