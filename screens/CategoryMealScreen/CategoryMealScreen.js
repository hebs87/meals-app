import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {CATEGORIES} from "../../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  const selectedCat = CATEGORIES.find(cat => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen!</Text>
      <Text>{selectedCat.title}</Text>
      <Button
        title='Go to Meal!'
        onPress={() => props.navigation.navigate('MealDetails')}
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

export default CategoryMealScreen;
