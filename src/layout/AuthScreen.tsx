import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Register from '../screen/Register';
import {connect, useDispatch} from 'react-redux';

type Props = {};

const AuthStack = createNativeStackNavigator();

const AuthScreen = ({Auth, navigation}: Props) => {
  useEffect(() => {
    if (Auth.accessToken != null) {
      navigation.push('main');
    }
  }, [Auth]);
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
const mapStateToProps = ({Auth}) => ({
  Auth,
});
export default connect(mapStateToProps, null)(AuthScreen);
