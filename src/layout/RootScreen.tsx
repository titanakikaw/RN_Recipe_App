import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthScreen from './AuthScreen';
import MainScreen from './MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {login} from '../../reducers/authReducer';
type Props = {};
const RootStack = createNativeStackNavigator();
const RootScreen = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      if (token != '') {
        dispatch(login(token));
      }
    };
    getToken();
  }, []);
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="main"
        component={MainScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

export default RootScreen;
