import React from 'react';
import {useSelector} from "react-redux";
import MealsList from "../../components/MealsList/MealsList";

const FavouritesScreen = props => {
  // Get favourite meals from the state
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  return (
    <MealsList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};

export default FavouritesScreen;
