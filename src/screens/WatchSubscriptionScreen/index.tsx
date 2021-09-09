import React, {useState} from 'react';
import {Text, View} from 'react-native';
// TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackSettingsParamList} from 'typeRoots/Routes';
// RENDER
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import renderTime from './RenderTime';
import Screen from 'common/Screen';
import Header from 'components/Header';
import AppButton from 'common/AppButton';
// STYLE
import {scale} from 'react-native-size-matters';
import {colors} from 'config';
import styles from './styles';

interface WatchSubscriptionScreenProps {
  navigation: StackNavigationProp<
    RootStackSettingsParamList,
    'WatchSubscriptionScreen'
  >;
}

const WatchSubscriptionScreen: React.FC<WatchSubscriptionScreenProps> = ({
  navigation,
}) => {
  var duration = 10;
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const handleIsCompleted = () => {};
  const handleNavigate = () => navigation.goBack();

  return (
    <Screen>
      <Header title="Watch Subscription" handleNavigate={handleNavigate} />
      <View style={styles.container}>
        <CountdownCircleTimer
          strokeWidth={18}
          isPlaying
          size={scale(275)}
          duration={duration}
          onComplete={() => setIsCompleted(true)}
          colors={[
            ['#004777', 0.3],
            ['#F7B801', 0.4],
            ['#A30000', 0.3],
          ]}>
          {renderTime}
        </CountdownCircleTimer>
        <View style={styles.centerItem}>
          {isCompleted ? (
            <AppButton
              title="Submit"
              onPress={() => handleIsCompleted()}
              color={colors.secondary}
            />
          ) : (
            <Text style={styles.enjoyText}>Enjoy Your Mediation Time</Text>
          )}
        </View>
      </View>
    </Screen>
  );
};
export default WatchSubscriptionScreen;
