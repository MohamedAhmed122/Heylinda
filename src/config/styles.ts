import {StyleSheet} from 'react-native';
import {colors} from './color';

export default StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
