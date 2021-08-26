import React from 'react';
import {Text, View, Image} from 'react-native';
//TYPES
import {Meditation} from '@typeRoots/index';
//COMPONENT && STYLES
import Loading from '@common/Loading';
import styles from './styles';
import Controllers from './Controllers';
// import RNTimer from 'react-native-counter-timer';
interface ViewPlaySoundProps {
  item: Meditation | undefined;
  loading: boolean;
  isFinished: boolean;
  isPaused: boolean;
  isNext: boolean;
  isPrev: boolean;
  goBack: () => void;
  goNext: () => void;
  onPressPause?: () => void;
  onPressPlay: () => void;
}
const ViewPlaySound: React.FC<ViewPlaySoundProps> = ({
  item,
  onPressPlay,
  loading,
  isFinished,
  isPaused,
  onPressPause,
  goNext,
  goBack,
  isNext,
  isPrev,
}) => {
  console.log(loading, 'loading');

  return (
    <View style={styles.container}>
      {item?.image && (
        <Image source={item.image} resizeMode="cover" style={styles.image} />
      )}
      <Text style={styles.title}>{item?.title}</Text>
      <Text style={styles.subTitle}>{item?.subtitle}</Text>
      {loading ? (
        <Loading />
      ) : (
        <View style={styles.playerContainer}>
          <Text style={styles.time}>00:00</Text>
          {/* <RNTimer timer={timer} /> */}
          <Controllers
            isFinished={isFinished}
            isPaused={isPaused}
            onPressPause={onPressPause}
            goNext={goNext}
            goBack={goBack}
            isNext={isNext}
            isPrev={isPrev}
            onPressPlay={onPressPlay}
          />
          <Text style={styles.time}>{item?.time}</Text>
        </View>
      )}
    </View>
  );
};
export default ViewPlaySound;

// https://www.codegrepper.com/code-examples/javascript/react+timer+count+up
