import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
//TYPES
import {MeditationItem} from '@typeRoots/index';
//RENDER && STYLES
import theme from '@config/styles';
import {width, height} from '@config/layout';
import {colors} from '@config/color';

const Card: React.FC<MeditationItem> = ({item, onPress}) => {
  const {time, image, title, subtitle} = item;
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.img} />
      <Text style={theme.mainTitle}>{title}</Text>
      <Text style={theme.subTitle}>{subtitle}</Text>
      <Text style={theme.primaryTitle}>{time} minutes</Text>
    </TouchableOpacity>
  );
};

export default Card;
const styles = StyleSheet.create({
  card: {
    width: width - (width / 3 + 10),
    height: height - height / 1.5,
    marginLeft: 12,
    backgroundColor: colors.white,
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    height: (height - height / 1.5) / 1.5,
    width: '100%',
  },
});
