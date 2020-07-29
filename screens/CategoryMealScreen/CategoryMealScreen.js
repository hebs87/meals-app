import React from 'react';
import {StyleSheet, View} from "react-native";
import {useSelector} from "react-redux";
import MealsList from "../../components/MealsList/MealsList";
import DefaultText from "../../components/DefaultText/DefaultText";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // Get available meals from the state
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  // Get the meals if the catId is in the categoryIds array of the Meal object
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No meals found, maybe check your filters?
        </DefaultText>
      </View>
    );
  }

  return (
    <MealsList
      listData={displayedMeals}
      navigation={props.navigation}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
