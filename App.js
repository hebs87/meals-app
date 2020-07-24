import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import {enableScreens} from "react-native-screens";
import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

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
