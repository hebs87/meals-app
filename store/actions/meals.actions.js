import {TOGGLE_FAVOURITE} from "../constants/constants";

export const toggleFavourite = id => ({
  type: TOGGLE_FAVOURITE,
  payload: id,
});
