// import {width, height, isSmallDevice, colors} from '@config/index';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    marginTop: '20@s',
  },
  errorMessage: {
    color: 'red',
    margin: '10@s',
    fontSize: '16@s',
  },
  icon: {
    marginHorizontal: 10,
  },
  bottom: {
    marginBottom: 35,
  },
});
