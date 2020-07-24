import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Platform} from 'react-native';
import {CATEGORIES} from "../../data/dummy-data";
import Colors from '../../theme/Colors';

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => props.navigation.navigate('CategoryMeals')}
      >
        <View>
          <Text>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primaryColor,
  headerTitleAlign: Platform.OS === 'android' ? 'center' : '',
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
