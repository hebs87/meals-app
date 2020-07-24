import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import MealItem from "../../components/MealItem/MealItem";
import {MEALS} from "../../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // Get the meals if the catId is in the categoryIds array of the Meal object
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => props.navigation.navigate(
          'MealDetails',
          {
            mealId: itemData.item.id,
          }
        )}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.mealsList}
        keyExtractor={(item, index) => item.id}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealsList: {
    width: '100%',
  }
});

export default CategoryMealScreen;
