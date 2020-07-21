import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Filters Screen!</Text>
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

export default FiltersScreen;
