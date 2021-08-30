import React from 'react';
import {useDispatch} from 'react-redux';
import {removeSession} from 'redux/freeSessions/actions';
import List from 'components/List';
import {colors} from 'config';
import Screen from 'common/Screen';
// import styles from './styles';

export default function SettingScreen() {
  const dispatch = useDispatch();
  const handleDeleteStats = () => dispatch(removeSession());
  return (
    <Screen>
      <List
        onPress={() => handleDeleteStats()}
        title="clear data"
        separate
        name="delete"
        color={colors.danger}
      />
    </Screen>
  );
}
