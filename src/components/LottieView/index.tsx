/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import LottieView from 'lottie-react-native';
import {scale, verticalScale} from 'react-native-size-matters';

interface LottieProps {
  onAnimationFinish: () => void;
  source: string;
}

const Lottie: React.FC<LottieProps> = ({onAnimationFinish, source}) => {
  return (
    <LottieView
      source={source}
      autoPlay
      loop={false}
      onAnimationFinish={onAnimationFinish}
      style={{
        width: scale(300),
        height: verticalScale(300),
        alignSelf: 'center',
        marginTop: verticalScale(35),
      }}
    />
  );
};
export default Lottie;
