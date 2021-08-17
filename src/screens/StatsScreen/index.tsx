import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import StatsCard from '@components/StatsCard/index';
import MainStyle from '@config/styles';
const StatsScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text style={MainStyle.boldTitle}>Stats </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StatsCard title="Current Streak" subTitle="0 day" />
        <StatsCard title="Total Sessions" subTitle="0 sessions" />
        <StatsCard title="Listened" subTitle="0 minutes" />
      </ScrollView>
    </View>
  );
};

export default StatsScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
  },
});
