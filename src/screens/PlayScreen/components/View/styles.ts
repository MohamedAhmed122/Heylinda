// import {width, height, isSmallDevice, colors} from '@config/index';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '@config/color';

const styles = ScaledSheet.create({
  // container: {
  //   width: '100@s', // = scale(100)
  //   height: '200@vs', // = verticalScale(200)
  //   padding: '2@msr', // = Math.round(moderateScale(2))
  //   margin: 5,
  // },
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    width: '80%',
    marginLeft: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '250@s',
    height: '250@s',
    borderRadius: 5,
    marginBottom: '20@s',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: '10@s',
  },
  subTitle: {
    color: colors.gray,
    fontSize: 15,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '250@s',
    marginTop: '20@s',
  },
  time: {
    fontSize: '13@s',
    color: colors.gray,
  },
});

export default styles;
