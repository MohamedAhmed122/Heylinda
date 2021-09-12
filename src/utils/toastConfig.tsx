/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {BaseToast} from 'react-native-toast-message';

const toastConfig = {
  success: ({
    text1,
    text2,
    hide,
    ...rest
  }: {
    text1: string;
    text2: string;
    hide: (() => void) | undefined;
    rest: string[];
  }) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: 'green', height: 100}}
      onTrailingIconPress={hide}
      contentContainerStyle={{padding: 14}}
      text1Style={{
        fontSize: 17,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 16,
      }}
      text1={text1}
      text2={text2}
      text1NumberOfLines={1}
      text2NumberOfLines={5}
    />
  ),

  error: ({
    text1,
    text2,
    hide,
    ...rest
  }: {
    text1: string;
    text2: string;
    hide: (() => void) | undefined;
    rest: string[];
  }) => (
    <BaseToast
      {...rest}
      style={{borderLeftColor: 'red', height: 100}}
      onTrailingIconPress={hide}
      contentContainerStyle={{flex: 1, padding: 14}}
      text1Style={{
        fontSize: 17,
        fontWeight: '400',
      }}
      text2Style={{
        fontSize: 16,
      }}
      text1={text1}
      text2={text2}
      text1NumberOfLines={1}
      text2NumberOfLines={5}
    />
  ),
};

export default toastConfig;
