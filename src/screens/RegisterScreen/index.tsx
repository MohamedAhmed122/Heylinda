import React from 'react';
import {UserRegisterValue} from 'typeRoots/index';
import Screen from 'common/Screen';
import ViewForm from './ViewForm';
import {Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const RegisterScreen: React.FC = () => {
  const onSubmit = (values: UserRegisterValue) => {
    console.log(values);
  };

  return (
    <Screen scroll>
      <Image
        source={require('@assets/images/icon.png')}
        resizeMode="cover"
        style={styles.image}
      />
      <ViewForm onSubmit={onSubmit} />
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
