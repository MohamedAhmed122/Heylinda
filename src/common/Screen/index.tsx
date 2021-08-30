import React from 'react';
import {ScrollView, StyleSheet, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenProps {
  scroll?: boolean;
}

const Screen: React.FC<ScreenProps> = ({children, scroll}) => {
  if (scroll) {
    return <ScrollView style={styles.screen}>{children}</ScrollView>;
  } else {
    return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
  }
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
