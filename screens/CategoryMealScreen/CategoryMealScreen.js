import React from 'react';
import {useSelector} from "react-redux";
import MealsList from "../../components/MealsList/MealsList";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // Get available meals from the state
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  // Get the meals if the catId is in the categoryIds array of the Meal object
  const displayedMeals = availableMeals.filter(
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
