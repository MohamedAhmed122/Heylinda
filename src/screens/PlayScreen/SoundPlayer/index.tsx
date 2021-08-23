import React from 'react';
import {Text, View, Image} from 'react-native';
//TYPES
import {Meditation} from '@typeRoots/index';
//COMPONENT && STYLES
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loading from '@common/Loading';
import {colors} from 'config';
import styles from './styles';
// import RNTimer from 'react-native-counter-timer';
interface SoundPlayerProps {
  item: Meditation;
  onPressPlay: () => void;
  loading: boolean;
  isFinished: boolean;
  isPaused: boolean;
  onPressPause?: () => void;
  skip: () => void;
  skipBack: () => void;
}
const SoundPlayer: React.FC<SoundPlayerProps> = ({
  item,
  onPressPlay,
  loading,
  isFinished,
  isPaused,
  onPressPause,
  skip,
  skipBack,
}) => {
  console.log(loading, 'loading');

  return (
    <View style={styles.container}>
      <Image source={item.image} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.subtitle}</Text>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.playerContainer}>
          <Text style={styles.time}>00:00</Text>
          {/* <RNTimer timer={timer} /> */}
          <FontAwesome
            name="rotate-left"
            color={colors.secondary}
            size={21}
            onPress={skipBack}
          />
          {isPaused && !isFinished ? (
            <AntDesign
              name="pausecircle"
              color={colors.secondary}
              size={40}
              onPress={onPressPause}
            />
          ) : (
            <AntDesign
              name="play"
              color={colors.secondary}
              size={40}
              onPress={onPressPlay}
            />
          )}
          <FontAwesome
            name="rotate-right"
            color={colors.secondary}
            size={21}
            onPress={skip}
          />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      )}
    </View>
  );
};
export default SoundPlayer;

// https://www.codegrepper.com/code-examples/javascript/react+timer+count+up
