import React from 'react';
import {Text} from 'react-native';
//REDUX
import {useDispatch} from 'react-redux';
import {removeSession} from 'redux/freeSessions/actions';
//TYPES
import {SettingParamList} from 'typeRoots/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
//RENDER && STYLES
import List from 'components/List';
import Screen from 'common/Screen';
import {colors} from 'config';
import styles from './styles';

interface SettingProps {
  navigation: StackNavigationProp<SettingParamList, 'SettingScreen'>;
}

const SettingScreen: React.FC<SettingProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const handleDeleteStats = () => dispatch(removeSession());

  const handleNavigateToSubscription = () =>
    navigation.navigate('SubscriptionScreen');
  return (
    <Screen scroll>
      <Text style={styles.bigTitle}>Settings </Text>
      <List
        onPress={() => handleDeleteStats()}
        title="clear data"
        separate
        name="delete"
        color={colors.danger}
      />
      <List
        onPress={() => handleNavigateToSubscription()}
        title="Subscribe Now"
        name="crown"
        color={colors.success}
      />
    </Screen>
  );
};

export default SettingScreen;
