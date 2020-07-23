import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
 return Font.loadAsync({
   OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
   OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
 });
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setLoading(false)}
        onError={error => console.log(error)}
      />
    );
  }

  return (
    <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
