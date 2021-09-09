import React from 'react';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import renderTime from './renderTime';
import Screen from 'common/Screen';
import {scale} from 'react-native-size-matters';
import {Text, View} from 'react-native';
import styles from './styles';

export default function WatchSubscriptionScreen() {
  var duration = 10;

  return (
    <Screen>
      <View style={styles.container}>
        <CountdownCircleTimer
          strokeWidth={18}
          isPlaying
          size={scale(275)}
          duration={duration}
          colors={[
            ['#004777', 0.3],
            ['#F7B801', 0.4],
            ['#A30000', 0.3],
          ]}>
          {renderTime}
        </CountdownCircleTimer>
        <Text style={styles.enjoyText}>Enjoy Your Mediation Time</Text>
      </View>
    </Screen>
  );
}
