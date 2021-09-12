import {colors} from '@config/index';
import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  img: {
    height: '200@vs',
    width: '200@s',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.secondary,
  },
  btnContainer: {
    width: '50%',
  },
});

export default styles;
