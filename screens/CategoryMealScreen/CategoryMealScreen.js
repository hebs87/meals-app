import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {MEALS} from "../../data/dummy-data";

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');
  // Get the meals if the catId is in the categoryIds array of the Meal object
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  const renderMealItem = itemData => {
    return (
      <View>
        <Text>
          {itemData.item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
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
  }
});

export default CategoryMealScreen;
