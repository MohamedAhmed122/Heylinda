import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@config/color';
//TYPES
import {Stats} from '@typeRoots/index';

const StatsCard: React.FC<Stats> = ({title, subTitle}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.mainTitle}>{title}</Text>
      <Text style={styles.subTitle}> {subTitle}</Text>
    </View>
  );
};

export default StatsCard;

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: 150,
    backgroundColor: colors.lightGrayPlus,
    padding: 20,
    borderRadius: 5,
    marginRight: 0,
    marginLeft: 12,
  },
  mainTitle: {
    color: colors.gray,
    marginBottom: 15,
    textAlign: 'center',
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
});
