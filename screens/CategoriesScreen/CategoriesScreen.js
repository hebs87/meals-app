import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Categories Screen!</Text>
      <Button
        title='Go to Meals!'
        onPress={() => props.navigation.navigate('CategoryMeals')}
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

export default CategoriesScreen;
