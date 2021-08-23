import React from 'react';
import {ScrollView, Text} from 'react-native';
import StatsCard from '@components/StatsCard/index';
import MainStyle from '@config/styles';
import Calender from '@components/Calender';
import Screen from 'common/Screen';
const StatsScreen: React.FC = () => {
  return (
    <Screen scroll>
      <Text style={MainStyle.boldTitle}>Stats </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StatsCard title="Current Streak" subTitle="0 day" />
        <StatsCard title="Total Sessions" subTitle="0 sessions" />
        <StatsCard title="Listened" subTitle="0 minutes" />
      </ScrollView>
      <Calender />
    </Screen>
  );
};

export default StatsScreen;
