import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from '../store';
import AuthScreen from './layout/AuthScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MainScreen from './layout/MainScreen';
import RootScreen from './layout/RootScreen';
type Props = {};

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: 'white',
  },
};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <RootScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
