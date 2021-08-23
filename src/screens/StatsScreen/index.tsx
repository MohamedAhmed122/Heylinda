import React from 'react';
import {ScrollView, Text} from 'react-native';
// REDUX -HOOKS
import {RootState} from 'redux/store';
// REDUX -TYPES
import {useSelector} from 'react-redux';
//RENDER
import StatsCard from '@components/StatsCard/index';
import MainStyle from '@config/styles';
import Calender from '@components/Calender';
import Screen from 'common/Screen';
const StatsScreen: React.FC = () => {
  const {days, minutes, sessions} = useSelector(
    (state: RootState) => state.freeSessions,
  );

  console.log(days, minutes, sessions);
  return (
    <Screen scroll>
      <Text style={MainStyle.boldTitle}>Stats </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <StatsCard title="Current Streak" subTitle={`${days} days`} />
        <StatsCard title="Total Sessions" subTitle={`${sessions} sessions`} />
        <StatsCard title="Listened" subTitle={`${minutes} minutes`} />
      </ScrollView>
      <Calender />
    </Screen>
  );
};

export default StatsScreen;
