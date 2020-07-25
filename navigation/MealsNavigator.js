import React from 'react';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen/FavouritesScreen";
import Colors from "../theme/Colors";
import {Platform} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton/HeaderButton";
import {Ionicons} from "@expo/vector-icons";

const stackNavConfig =   {
  defaultNavigationOptions: {
    headerTitle: 'Meals App',
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
    headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
  },
}

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
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title='Favourite'
                iconName='ios-star'
                onPress={() => {
                  console.log('Mark as favourite');
                }}
              />
            </HeaderButtons>
          ),
        }
      },
    },
  },
  stackNavConfig
);

const FavNavigator = createStackNavigator(
  {
    Favourites: {
      screen: FavouritesScreen,
      navigationOptions: () => ({
        headerTitle: 'Your Favourites',
      }),
    },
    MealDetails: {
      screen: MealDetailsScreen,
      navigationOptions: navData => {
        const mealId = navData.navigation.getParam('mealId');
        const selectedMeal = MEALS.find(meal => meal.id === mealId);
        return {
          headerTitle: selectedMeal.title,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title='Favourite'
                iconName='ios-star'
                onPress={() => {
                  console.log('Mark as favourite');
                }}
              />
            </HeaderButtons>
          ),
        }
      },
    },
  },
  stackNavConfig
)

// First object that is passed into both TabNavigators
const tabsScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
      },
      // Specific to Android createMaterialBottomTabNavigator when shifting set to true
      tabBarColor: Colors.primaryColor,
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favourites!',
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      },
      // Specific to Android createMaterialBottomTabNavigator when shifting set to true
      tabBarColor: Colors.accentColor,
    },
  },
}

const MealsTabNavigator = Platform.OS === 'android' ? (
  createMaterialBottomTabNavigator(
    tabsScreenConfig,
    {
      activeColor: Colors.white,
      shifting: true,
      // Set the whole tab bar colour if shifting set to false
      // barStyle: {
      //   backgroundColor: Colors.primaryColor,
      // },
    }
  )
) : (
  createBottomTabNavigator(
    tabsScreenConfig,
    {
      tabBarOptions: {
        activeTintColor: Colors.accentColor,
      },
    }
  )
);

export default createAppContainer(MealsTabNavigator);
