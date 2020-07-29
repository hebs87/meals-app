import React from 'react';
import {useSelector} from "react-redux";
import {StyleSheet, View} from 'react-native';
import DefaultText from "../../components/DefaultText/DefaultText";
import MealsList from "../../components/MealsList/MealsList";

const FavouritesScreen = props => {
  // Get favourite meals from the state
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favourite meals found. Start adding some!</DefaultText>
      </View>
    )
  }

  return (
    <MealsList
      listData={favMeals}
      navigation={props.navigation}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FavouritesScreen;
