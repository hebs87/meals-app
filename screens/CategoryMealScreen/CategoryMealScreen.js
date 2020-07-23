import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Category Meal Screen!</Text>
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
