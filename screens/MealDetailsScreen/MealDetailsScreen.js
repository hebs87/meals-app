import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import DefaultText from "../../components/DefaultText/DefaultText";
import Colors from '../../theme/Colors';
import {toggleFavourite} from "../../store/actions/meals.actions";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector(state => state.meals.meals);
  const isFavourite = useSelector(
    state => state.meals.favouriteMeals.some(meal => meal.id === mealId)
  );
  const selectedMeal = availableMeals.find(meal => meal.id === mealId);

  // Dispatch the meal id to the reducer to enable adding/removing favourite meals
  const dispatch = useDispatch();
  const handleToggleFavourite = useCallback(() => {
    dispatch(toggleFavourite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: handleToggleFavourite});
  }, [handleToggleFavourite]);

  useEffect(() => {
    props.navigation.setParams({isFavourite});
  }, [isFavourite]);

  const renderListItem = data => {
    return (
      data.map(value => (
        <View key={value} style={styles.listItem}>
          <DefaultText>{value}</DefaultText>
        </View>
      ))
    );
  };

  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <View style={styles.mealDetails}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {
        renderListItem(selectedMeal.ingredients)
      }
      <Text style={styles.title}>Steps</Text>
      {
        renderListItem(selectedMeal.steps)
      }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  mealDetails: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: Colors.grey,
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailsScreen;
