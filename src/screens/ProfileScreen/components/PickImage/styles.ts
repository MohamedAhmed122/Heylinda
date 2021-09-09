import {colors} from 'config';
import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  contain: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: colors.lightGrayPlus,
    height: 100,
    width: 100,
    overflow: 'hidden',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    // marginTop: 10,
  },
});
