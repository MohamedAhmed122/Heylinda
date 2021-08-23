/* eslint-disable react-native/no-inline-styles */
import {colors} from 'config';
import React from 'react';
import {ActivityIndicator} from 'react-native';

export default function index() {
  return (
    <ActivityIndicator
      color={colors.secondary}
      size="large"
      style={{alignSelf: 'center'}}
    />
  );
}
