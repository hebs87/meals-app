import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch, Platform} from 'react-native';
import Colors from "../../theme/Colors";

const FilterSwitch = props => {
  const {label, value, onChange} = props;

  return(
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{
          // Set false color if needed too
          true: Colors.primaryColor
        }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
}

const FiltersScreen = props => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters/Restrictions</Text>
      <FilterSwitch
        label='Gluten-free'
        value={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Lactose-free'
        value={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label='Vegan'
        value={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Vegetarian'
        value={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 10,
  },
});

export default FiltersScreen;
