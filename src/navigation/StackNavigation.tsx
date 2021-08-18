import React from 'react';
//NAVIGATION
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {
  RootStackHomeParamList,
  RootStackStatsParamList,
  RootStackSettingsParamList,
} from '@typeRoots/Routes';
//SCREEN
import HomeScreen from '@screens/HomeScreen';
import PlayScreen from '@screens/PlayScreen';
import StatsScreen from '@screens/StatsScreen';
import SettingScreen from '@screens/SettingScreen';
//STYLES
import {StyleSheet} from 'react-native';
import {colors} from 'config';

export const HomeNavigation = () => {
  const HomeStack = createNativeStackNavigator<RootStackHomeParamList>();
  return (
    <HomeStack.Navigator screenOptions={{presentation: 'modal'}}>
      <HomeStack.Screen
        options={{
          headerTitle: 'Home',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <HomeStack.Screen
        options={{
          headerTitle: 'Play',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
        name="PlayScreen"
        component={PlayScreen}
      />
    </HomeStack.Navigator>
  );
};

export const StatsNavigation = () => {
  const StatsStack = createNativeStackNavigator<RootStackStatsParamList>();
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          headerTitle: 'Stats',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </StatsStack.Navigator>
  );
};

export const SettingsNavigation = () => {
  const SettingStack = createNativeStackNavigator<RootStackSettingsParamList>();
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="SettingsScreen"
        component={SettingScreen}
      />
    </SettingStack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    color: colors.white,
    fontSize: 16,
  },
  header: {
    backgroundColor: colors.secondary,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
