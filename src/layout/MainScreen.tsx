import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/icons/Home.svg';
import EditIcon from '../../assets/icons/Edit.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';

type Props = {};
const MainTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
    </HomeStack.Navigator>
  );
};

const MainScreen = (props: Props) => {
  return (
    <MainTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return <HomeIcon height={size} width={size} />;
            case 'Upload':
              return <EditIcon height={size} width={size} fill={color} />;
            default:
              return null;
          }
        },
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 95,
        },
      })}>
      <MainTab.Screen name="Home" component={HomeStackScreen} />
      <MainTab.Screen name="Upload" component={HomeStackScreen} />
    </MainTab.Navigator>
  );
};

export default MainScreen;
