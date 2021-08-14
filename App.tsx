/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SvgUri from 'react-native-svg-uri';

const App: React.FC = () => {
  return (
    <View>
      <Text>Hello, world!</Text>
      <SvgUri
        width={200}
        height={200}
        source={{
          uri: 'https://thenewcode.com/assets/images/thumbnails/homer-simpson.svg',
        }}
      />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({});
