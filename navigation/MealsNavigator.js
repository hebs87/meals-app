import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen/MealDetailsScreen";
import Colors from "../theme/Colors";
import {Platform} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";


const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: () => ({
        headerTitle: 'Meal Categories',
      }),
    },
    CategoryMeals: {
      screen: CategoryMealScreen,
      navigationOptions: navData => {
        const catId = navData.navigation.getParam('categoryId');
        const selectedCat = CATEGORIES.find(cat => cat.id === catId);
        return {
          headerTitle: selectedCat.title,
        }
      },
    },
    MealDetails: {
      screen: MealDetailsScreen,
      navigationOptions: navData => {
        const mealId = navData.navigation.getParam('mealId');
        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        return {
          headerTitle: selectedMeal.title,
        }
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitle: 'Meals App',
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      },
      headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
      headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
    },
  }
);

export default createAppContainer(MealsNavigator);
