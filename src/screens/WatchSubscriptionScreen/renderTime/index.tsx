/* eslint-disable react-native/no-inline-styles */
import styles from 'config/styles';
import React from 'react';
import {Animated, Text} from 'react-native';

const children = (remainingTime: number): string => {
  const hours = Math.floor(remainingTime / 3600);
  const days = Math.floor(remainingTime / (3600 * 24));
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return `${days}:${hours}:${minutes}:${seconds}`;
};

interface renderTimeProps {
  remainingTime: number;
  animatedColor: string;
}
const RenderTime: React.FC<renderTimeProps> = ({
  remainingTime,
  animatedColor,
}) => {
  if (remainingTime === 0) {
    return <Text style={styles.subTitle}>Time to pay for subscription</Text>;
  } else {
    return (
      <Animated.Text style={{color: animatedColor, fontSize: 22}}>
        {children(remainingTime)}
      </Animated.Text>
    );
  }
};
export default RenderTime;
