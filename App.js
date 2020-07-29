import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import {enableScreens} from "react-native-screens";
import {createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import MealsNavigator from "./navigation/MealsNavigator";
import mealsReducer from "./store/reducers/meals.reducers";

enableScreens();

// Create root reducer
const rootReducer = combineReducers({
  meals: mealsReducer,
});

// Create the store
const store = createStore(rootReducer, composeWithDevTools());

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
    <Provider store={store}>
      <MealsNavigator/>
    </Provider>
  );
}
