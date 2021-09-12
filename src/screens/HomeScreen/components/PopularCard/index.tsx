import React, {useState} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View} from 'react-native';
// REDUX
import {useSelector} from 'react-redux';
import {RootState} from 'redux/store';
//TYPES
import {MeditationItem} from '@typeRoots/index';
//RENDER && STYLES
import theme from '@config/styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {width, height} from '@config/layout';
import {colors} from '@config/color';

const Card: React.FC<MeditationItem> = ({item, onPress}) => {
  const [isPressed, setIsPassed] = useState(false);
  const {time, image, title, subtitle} = item;
  const {isSuperUser} = useSelector((state: RootState) => state.auth);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.img} />
      {isSuperUser && (
        <View style={styles.iconContainer}>
          <AntDesign
            onPress={() => setIsPassed(!isPressed)}
            name={isPressed ? 'star' : 'staro'}
            size={25}
            color={'#FFD700'}
          />
        </View>
      )}
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
    height: height - height / 1.9,
    marginLeft: 12,
    backgroundColor: colors.lightGrayPlus,
    borderRadius: 5,
    overflow: 'hidden',
  },
  img: {
    height: height - height / 1.5,
    width: '100%',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },
});
