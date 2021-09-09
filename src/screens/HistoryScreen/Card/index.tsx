import React from 'react';
import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors, style, width} from '@config/index';
import {Meditation} from 'typeRoots';

import {ScaledSheet} from 'react-native-size-matters';

interface cardProps {
  item: Meditation;
  onPress: () => void;
}

const Card: React.FC<cardProps> = ({item, onPress}) => {
  // console.log(cardPropsz);
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ImageBackground source={item.image} resizeMode="cover" style={styles.bg}>
        <AntDesign name="play" color={colors.secondary} size={40} />
      </ImageBackground>
      <View style={styles.textContainer}>
        <Text style={style.boldTitle}>
          {item.title?.length > 20
            ? item.title?.substring(0, 20 - 3) + '...'
            : item.title}
        </Text>
        <Text style={style.subTitle}>{item.subtitle}</Text>
        <Text style={style.primaryTitle}>{item.time} mins</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = ScaledSheet.create({
  container: {
    height: '100@vs',
    width: width - 40,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
    flexDirection: 'row',

    shadowColor: colors.black,
    borderWidth: 1,
    borderColor: colors.lightGray,
    overflow: 'hidden',
    marginTop: 30,
  },
  bg: {
    // borderRadius: 20,
    height: '100%',
    width: '130@s',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  textContainer: {
    marginLeft: '15@s',
  },
});
