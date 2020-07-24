import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen/MealDetailsScreen";
import Colors from "../theme/Colors";
import {Platform} from "react-native";


const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: () => ({
      headerTitle: 'Meal Categories',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
      headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
    }),
  },
  CategoryMeals: {
    screen: CategoryMealScreen,
  },
  MealDetails: {
    screen: MealDetailsScreen,
  },
});

export default createAppContainer(MealsNavigator);
