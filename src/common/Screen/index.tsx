import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

interface ScreenProps {
  scroll?: boolean;
}

const Screen: React.FC<ScreenProps> = ({children, scroll}) => {
  if (scroll) {
    return <ScrollView style={styles.screen}>{children}</ScrollView>;
  } else {
    return <View style={styles.screen}>{children}</View>;
  }
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
