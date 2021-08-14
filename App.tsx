/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, View} from 'react-native';

import HomeScreen from './src/screens/HomeScreen/index';
import StatsScreen from './src/screens/StatsScreen';

const App: React.FC = () => {
  return (
    <View>
      {/* <HomeScreen /> */}
      <StatsScreen />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({});
