import React from 'react';
import {Text, Platform} from "react-native";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createMaterialBottomTabNavigator} from "react-navigation-material-bottom-tabs";
import {createDrawerNavigator} from "react-navigation-drawer";
import CategoriesScreen from "../screens/CategoriesScreen/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen/MealDetailsScreen";
import FavouritesScreen from "../screens/FavouritesScreen/FavouritesScreen";
import FiltersScreen from "../screens/FiltersScreen/FiltersScreen";
import Colors from "../theme/Colors";
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
    headerTitleStyle: {
      // Styles for the standard title
      fontFamily: 'OpenSansBold',
    },
    headerBackTitleStyle: {
      // Styles for the Back title
      fontFamily: 'OpenSans',
    },
    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
    headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
  },
};

const renderMenuButton = navData => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title='Menu'
      iconName='ios-menu'
      onPress={() => {
        navData.navigation.toggleDrawer();
      }}
    />
  </HeaderButtons>
);

const renderFavouritesButton = (navData, callbackFunc, isFavourite) => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title='Favourite'
      iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
      onPress={callbackFunc}
    />
  </HeaderButtons>
);

const renderSaveButton = (navData, callbackFunc) => (
  <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Item
      title='Save'
      iconName='ios-save'
      onPress={callbackFunc}
    />
  </HeaderButtons>
);

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: navData => {
        return {
          headerTitle: 'Meal Categories',
          // For navigation drawer
          headerLeft: () => (
            renderMenuButton(navData)
          ),
        }
      },
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
        const mealTitle = navData.navigation.getParam('mealTitle');
        const toggleFavourite = navData.navigation.getParam('toggleFav');
        const isFavourite = navData.navigation.getParam('isFavourite');
        return {
          headerTitle: mealTitle,
          headerRight: navData => (
            renderFavouritesButton(navData, toggleFavourite, isFavourite)
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
      navigationOptions: navData => {
        return {
          headerTitle: 'Your Favourites',
          // For navigation drawer
          headerLeft: () => (
            renderMenuButton(navData)
          ),
        }
      },
    },
    MealDetails: {
      screen: MealDetailsScreen,
      navigationOptions: navData => {
        const mealTitle = navData.navigation.getParam('mealTitle');
        const toggleFavourite = navData.navigation.getParam('toggleFav');
        const isFavourite = navData.navigation.getParam('isFavourite');
        return {
          headerTitle: mealTitle,
          headerRight: navData => (
            renderFavouritesButton(navData, toggleFavourite, isFavourite)
          ),
        }
      },
    },
  },
  stackNavConfig
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: navData => {
        return {
          headerTitle: 'Filter Meals',
          // For navigation drawer
          headerLeft: () => (
            renderMenuButton(navData)
          ),
          headerRight: () => (
            renderSaveButton(navData, navData.navigation.getParam('save'))
          ),
        }
      },
    },
  },
  stackNavConfig
);

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
      // Android specific - workaround for setting font styles on tab labels
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'OpenSansBold'}}>Meals</Text> : 'Meals',
    },
  },
  Favourites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
      },
      // Specific to Android createMaterialBottomTabNavigator when shifting set to true
      tabBarColor: Colors.accentColor,
      // Android specific - workaround for setting font styles on tab labels
      tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'OpenSansBold'}}>Favourites</Text> : 'Favourites',
    },
  },
};

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
        labelStyle: {
          fontFamily: 'OpenSansBold',
        },
        activeTintColor: Colors.accentColor,
      },
    }
  )
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsTabNavigator,
      navigationOptions: () => ({
        drawerLabel: 'Meals',
      }),
    },
    Filter: {
      screen: FiltersNavigator,
    },
  },
  {
    drawerBackgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    contentOptions: {
      inactiveTintColor: Platform.OS === 'android' ? Colors.white : '',
      activeTintColor: Platform.OS === 'android' ? Colors.white : Colors.accentColor,
      activeBackgroundColor: Platform.OS === 'android' ? Colors.accentColor : '',
      labelStyle: {
        fontFamily: 'OpenSansBold',
      },
      itemStyle: {
        width: '100%',
        justifyContent: 'center',
      },
    },
    overlayColor: Colors.opaque,
  }
);

export default createAppContainer(MainNavigator);
