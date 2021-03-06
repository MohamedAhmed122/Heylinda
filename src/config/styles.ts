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
    color: colors.secondary,
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
  boldTitle: {
    marginBottom: 10,
    marginTop: 25,
    textTransform: 'uppercase',
    marginLeft: 12,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
