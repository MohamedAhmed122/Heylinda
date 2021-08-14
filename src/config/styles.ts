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
  mainTitle: {
    fontWeight: '500',
    color: colors.black,
    margin: 10,
    fontSize: 18,
  },
  subTitle: {
    color: colors.gray,
    fontSize: 16,
    marginLeft: 10,
  },
  primaryTitle: {
    color: colors.primary,
    margin: 10,
  },
});
