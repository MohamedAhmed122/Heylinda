import React from 'react';
import List from 'components/List';
import {colors} from 'config';
import Screen from 'common/Screen';
// import styles from './styles';

export default function SettingScreen() {
  return (
    <Screen>
      <List title="clear data" separate name="delete" color={colors.danger} />
    </Screen>
  );
}
