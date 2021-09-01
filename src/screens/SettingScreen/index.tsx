import React from 'react';
import {Text} from 'react-native';
//REDUX
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from 'redux/store';
import {removeSession} from 'redux/freeSessions/actions';
//TYPES
import {RootStackSettingsParamList} from 'typeRoots/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
//RENDER && STYLES
import List from 'components/List';
import Screen from 'common/Screen';
import {colors} from 'config';
import styles from './styles';
import {logoutUser} from 'redux/Auth/action';

interface SettingProps {
  navigation: StackNavigationProp<RootStackSettingsParamList, 'SettingsScreen'>;
}

const SettingScreen: React.FC<SettingProps> = ({navigation}) => {
  const dispatch = useDispatch<AppDispatch>();
  const {isAuthenticated, isSuperUser} = useSelector(
    (state: RootState) => state.auth,
  );
  const handleDeleteStats = () => {
    if (isAuthenticated) {
      dispatch(logoutUser());
    }
    dispatch(removeSession());
  };

  const handleNavigateTo = (nav: keyof RootStackSettingsParamList) =>
    navigation.navigate(nav);

  const handleAddFakeData = () => {};

  return (
    <Screen scroll>
      <Text style={styles.bigTitle}>Settings </Text>
      <List
        onPress={() => handleDeleteStats()}
        title={isAuthenticated ? 'Logout' : 'clear data'}
        separate
        name={isAuthenticated ? 'logout' : 'delete'}
        color={colors.danger}
      />

      {!isSuperUser && (
        <List
          onPress={() => handleNavigateTo('SubscriptionScreen')}
          title="Subscribe Now"
          name="crown"
          color={colors.success}
        />
      )}
      {isSuperUser && (
        <>
          <List
            onPress={() => handleNavigateTo('WatchSubscriptionScreen')}
            title="Watch Subscription "
            name="crown"
            color={colors.success}
            separate
          />
          <List
            onPress={() => handleNavigateTo('ProfileScreen')}
            title="Organize Profile "
            name="account"
            color={colors.secondary}
            separate
          />
        </>
      )}
      <List
        onPress={() => handleNavigateTo('HistoryScreen')}
        title="History"
        name="card-text-outline"
        color={'#FFD912'}
        separate
      />
      <List
        onPress={() => handleAddFakeData()}
        title="Add Fake Sessions"
        name="clipboard-plus"
        color={colors.success}
        separate
      />
      <List
        onPress={() => handleNavigateTo('SupportTeamScreen')}
        title="Support Team"
        name="charity"
        color={'#F29952'}
      />
    </Screen>
  );
};

export default SettingScreen;
