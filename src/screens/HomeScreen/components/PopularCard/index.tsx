import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
//TYPES
import {MeditationItem} from '../../../../types';
//RENDER && STYLES
import theme from '../../../../config/styles';
import {width, height} from '../../../../config/layout';
import {colors} from '../../../../config/color';

const Card: React.FC<MeditationItem> = ({item}) => {
  const {time, image, title, subtitle} = item;
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.img} />
      <Text style={theme.mainTitle}>{title}</Text>
      <Text style={theme.subTitle}>{subtitle}</Text>
      <Text style={theme.primaryTitle}>{time} minutes</Text>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  card: {
    width: width - (width / 3 + 10),
    height: height - height / 1.9,
    marginLeft: 12,
    backgroundColor: colors.white,
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    height: height - height / 1.5,
    width: '100%',
  },
});
