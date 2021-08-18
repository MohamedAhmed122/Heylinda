import React from 'react';
//NAVIGATION
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {RootStackParamList} from 'typeRoots/Routes';
//SCREEN
import HomeScreen from '@screens/HomeScreen';
import Completed from 'screens/CompletedScreen';
import NotFound from '@screens/NotFoundScreen/index';
import PlayScreen from '@screens/PlayScreen/index';
import StatsScreen from '@screens/StatsScreen/index';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function index() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Complete" component={Completed} />
        <Stack.Screen name="NotFound" component={NotFound} />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
