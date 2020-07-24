import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {MEALS} from "../../data/dummy-data";

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen!</Text>
      <Text>{selectedMeal.title}</Text>
      <Button
        title='Back to Categories!'
        onPress={() => props.navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default MealDetailsScreen;
