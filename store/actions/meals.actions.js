import {TOGGLE_FAVOURITE, SET_FILTERS} from "../constants/constants";

export const toggleFavourite = id => ({
  type: TOGGLE_FAVOURITE,
  payload: id,
});

export const setFilters = filterSettings => ({
  type: SET_FILTERS,
  payload: filterSettings,
});
