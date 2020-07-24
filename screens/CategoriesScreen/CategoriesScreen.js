import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import {CATEGORIES} from "../../data/dummy-data";

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <View style={styles.gridItem}>
        <Text>
          {itemData.item.title}
        </Text>
      </View>
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesScreen;
