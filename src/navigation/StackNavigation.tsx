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
import RegisterScreen from '@screens/RegisterScreen';
import SubscriptionScreen from '@screens/SubscriptionScreen';
import SupportTeamScreen from 'screens/SupportTeamScreen';
import WatchSubscriptionScreen from '@screens/WatchSubscriptionScreen';
import HistoryScreen from '@screens/HistoryScreen';
import ProfileScreen from 'screens/ProfileScreen';
//STYLES
import {StyleSheet} from 'react-native';
import {colors} from 'config';

export const HomeNavigation = () => {
  const HomeStack = createNativeStackNavigator<RootStackHomeParamList>();

  return (
    <HomeStack.Navigator
      screenOptions={{
        presentation: 'modal',
        // gestureResponseDistance: {vertical: 200, horizontal: 150},
      }}>
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
          headerShown: false,
          headerTitle: 'Play',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
        name="PlayScreen"
        component={PlayScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Play',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
        name="RegisterScreen"
        component={RegisterScreen}
      />
      <HomeStack.Screen
        options={{
          headerShown: false,
          headerTitle: 'Play',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
        name="SubscriptionScreen"
        component={SubscriptionScreen}
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
          headerTitle: 'Settings',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
        name="SettingsScreen"
        component={SettingScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: false,
        }}
        name="SupportTeamScreen"
        component={SupportTeamScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: false,
        }}
        name="WatchSubscriptionScreen"
        component={WatchSubscriptionScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: false,
        }}
        name="HistoryScreen"
        component={HistoryScreen}
      />
      <SettingStack.Screen
        options={{
          headerShown: false,
        }}
        name="ProfileScreen"
        component={ProfileScreen}
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
