import React from 'react';
import {colors} from 'config';

import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';

interface AppInputProps {
  placeholder: string;
  value?: string;

  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

const AppInput: React.FC<AppInputProps> = ({
  placeholder,
  value,
  onChangeText,

  children,
  secureTextEntry,
  onBlur,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {children}
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        {...otherProps}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: '2.5%',
    backgroundColor: colors.lightGrayPlus,
    height: 50,
    borderRadius: 25,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  inputText: {
    backgroundColor: 'transparent',
    width: 'auto',
    height: '100%',
    marginLeft: 20,
    color: colors.black,
    fontSize: 18,
    flex: 1,
  },
});
