// import {width, height, isSmallDevice, colors} from '@config/index';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    width: '100@s', // = scale(100)
    height: '200@vs', // = verticalScale(200)
    padding: '2@msr', // = Math.round(moderateScale(2))
    margin: 5,
  },
  bigTitle: {
    fontSize: '25@s',
    fontWeight: 'bold',
    marginLeft: '5%',
    marginVertical: '20@s',
  },
});

export default styles;
