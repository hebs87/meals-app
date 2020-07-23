import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen!</Text>
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
