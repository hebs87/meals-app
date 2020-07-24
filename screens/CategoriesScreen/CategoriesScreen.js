import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from "../../data/dummy-data";
import GridCategoryTile from "../../components/GridCategoryTile/GridCategoryTile";

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <GridCategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => props.navigation.navigate(
          'CategoryMeals',
          {
            categoryId: itemData.item.id,
          }
        )}
      />
    )
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  );
};

export default CategoriesScreen;
