import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import MealItem from "../MealItem/MealItem";

const MealsList = props => {
  const {listData} = props;

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
            mealTitle: itemData.item.title,
          }
        )}
      />
    );
  };

  return (
    <View style={styles.listContainer}>
      <FlatList
        style={styles.mealsList}
        keyExtractor={(item, index) => item.id}
        data={listData}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mealsList: {
    width: '100%',
  }
});

export default MealsList;
