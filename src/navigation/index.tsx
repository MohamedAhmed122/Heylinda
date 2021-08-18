import React from 'react';
//NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  StatsNavigation,
  SettingsNavigation,
  HomeNavigation,
} from './StackNavigation';
//TYPES
import {RootTabParamList} from 'typeRoots/Routes';
//
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from 'config';

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function index() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.secondary,
          tabBarInactiveTintColor: colors.gray,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <Entypo name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Stats"
          component={StatsNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="date-range" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingsNavigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
