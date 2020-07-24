import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Colors from "../../theme/Colors";

const GridCategoryTile = props => {
  const {title, onSelect} = props;

  return (
    <TouchableOpacity
      style={{...styles.gridItem, ...{backgroundColor: props.color}}}
      onPress={onSelect}
    >
      <View>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    padding: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'OpenSansBold',
    fontSize: 22,
    textAlign: 'center',
  },
});

export default GridCategoryTile;
