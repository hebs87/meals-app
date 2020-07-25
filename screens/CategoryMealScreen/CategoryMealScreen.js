import React from 'react';
import MealsList from "../../components/MealsList/MealsList";
import {MEALS} from "../../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // Get the meals if the catId is in the categoryIds array of the Meal object
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <MealsList
      listData={displayedMeals}
      navigation={props.navigation}
    />
  );
};

export default CategoryMealScreen;
