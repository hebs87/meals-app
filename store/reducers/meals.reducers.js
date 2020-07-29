import {MEALS} from "../../data/dummy-data";
import {TOGGLE_FAVOURITE, SET_FILTERS} from "../constants/constants";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favouriteMeals: []
};

const mealsReducer = (state=initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      // Get the index of the meal if it exists in favourites - return -1 if not
      const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.payload);
      if (existingIndex >= 0) {
        // Remove if already exists - create new array of favourite meals so we don't manipulate the existing one
        // Then remove the selected meal from the list
        const updatedFavMeals = [...state.favouriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return {...state, favouriteMeals: updatedFavMeals};
        // Alternative syntax
        // return Object.assign({}, state, {favouriteMeals: updatedFavMeals});
      } else {
        // Add if doesn't exist
        const meal = state.meals.find(meal => meal.id === action.payload);
        return {...state, favouriteMeals: state.favouriteMeals.concat(meal)};
        // Alternative syntax
        // return Object.assign({}, state, {favouriteMeals: [...state.favouriteMeals, meal]});
      }
    case SET_FILTERS:
      const appliedFilters = action.payload;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return {...state, filteredMeals: updatedFilteredMeals};
      // Alternative syntax
      // return Object.assign({}, state, {filteredMeals: updatedFilteredMeals});
    default:
      return state;
  }
};

export default mealsReducer;
