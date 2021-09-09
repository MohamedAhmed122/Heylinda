import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from 'config/color';

interface AppButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
}
const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = colors.primary,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    padding: 13,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
