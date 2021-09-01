import React from 'react';
import {Image, Alert} from 'react-native';
// REDUX
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, superUser} from 'redux/Auth/action';
// TYPES
import {AppDispatch, RootState} from 'redux/store';
import {UserRegisterValue} from 'typeRoots/index';
// APPLE BAY
import {payByApple} from 'utils/payment';
// RENDER && STYLES
import Screen from 'common/Screen';
import LottieView from 'components/LottieView';
import ViewForm from './ViewForm';
import ViewPayment from './ViewPayment';
import {ScaledSheet} from 'react-native-size-matters';

const RegisterScreen: React.FC = () => {
  const {isAuthenticated, isSuperUser} = useSelector(
    (state: RootState) => state.auth,
  );
  const dispatch = useDispatch<AppDispatch>();

  // Handle Submit the Form
  const onSubmit = (values: UserRegisterValue) => {
    console.log(values);
    const user = {
      email: values.email,
      name: values.name,
    };
    dispatch(registerUser(user));
  };

  // Handle Pay by Apple
  const handlePay = () => {
    payByApple()
      .show()
      .then((payRes: any) => {
        payRes.complete('success');
        dispatch(superUser());
      })
      .catch((err: string) => {
        Alert.alert(` ${err}`);
      });
  };
  //
  const handleAnimationFinish = () => {
    console.log('YES');
  };

  return (
    <Screen scroll>
      {isSuperUser ? (
        <LottieView
          source={require('@assets/images/done.json')}
          onAnimationFinish={handleAnimationFinish}
        />
      ) : (
        <>
          <Image
            source={require('@assets/images/icon.png')}
            resizeMode="cover"
            style={styles.image}
          />
          {isAuthenticated ? (
            <ViewPayment handlePay={handlePay} />
          ) : (
            <ViewForm onSubmit={onSubmit} />
          )}
        </>
      )}
    </Screen>
  );
};

export default RegisterScreen;

const styles = ScaledSheet.create({
  image: {
    height: '250@s',
    width: '250@s',
    alignSelf: 'center',
    marginVertical: '30@s',
  },
});
