import React from 'react';
import {Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from 'config';

interface ControllersProps {
  isPrev: boolean;
  isNext: boolean;
  isPaused: boolean;
  isFinished: boolean;
  goBack: () => void;
  onPressPause?: () => void;
  onPressPlay: () => void;
  goNext: () => void;
}

const Controllers: React.FC<ControllersProps> = ({
  isPrev,
  isNext,
  isPaused,
  isFinished,
  goBack,
  onPressPause,
  onPressPlay,
  goNext,
}) => {
  return (
    <>
      {isPrev ? (
        <AntDesign
          name="stepbackward"
          color={colors.secondary}
          size={21}
          onPress={goBack}
        />
      ) : (
        <Text />
      )}
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
      {isNext ? (
        <AntDesign
          name="stepforward"
          color={colors.secondary}
          size={21}
          onPress={goNext}
        />
      ) : (
        <Text />
      )}
    </>
  );
};

export default Controllers;
