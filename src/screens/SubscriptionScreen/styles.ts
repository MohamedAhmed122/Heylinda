import {colors} from '@config/index';
import {Platform} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    backgroundColor: '#cfe2fc',
    height: '100%',
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  bigTitle: {
    textAlign: 'center',
    marginTop: '20@s',
    fontSize: '50@s',
    fontWeight: 'bold',
    color: colors.secondary,
  },
  main: {
    flexDirection: 'row',
    marginLeft: '5%',
    marginTop: '40@s',
    // alignItems: 'center',
  },
  img: {
    width: '300@s',
    height: '300@s',
    left: '-50@s',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: '30@s',
  },
  textIcon: {
    fontSize: '17@s',
    marginLeft: '20@s',
  },
  continueBtn: {
    backgroundColor: colors.secondary,
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: 40,
    height: '55@s',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueText: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: '500',
    marginBottom: '3@s',
  },
  continuePrice: {
    color: colors.white,
  },
  notSureBtn: {
    backgroundColor: '#e3edfc',
    width: '95%',
    marginLeft: '2.5%',
    borderRadius: 40,
    height: '55@s',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '20@s',
  },
});

export default styles;
