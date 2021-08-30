import React from 'react';
import {UserRegisterValue} from 'typeRoots/index';
import Screen from 'common/Screen';
import ViewForm from './ViewForm';
import {SvgXml} from 'react-native-svg';
// import testSvg from './Meditation.svg';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().min(3).label('Name'),
  password: Yup.string().required().min(5).label('Password'),
  phone: Yup.string().required().min(3).label('Phone'),
});

const RegisterScreen: React.FC = () => {
  const onSubmit = (values: UserRegisterValue) => {
    console.log(values);
  };
  // Meditation.svg
  return (
    <Screen>
      {/* <SvgXml width="200" height="200" xml={testSvg} /> */}
      <ViewForm onSubmit={onSubmit} validationSchema={validationSchema} />
    </Screen>
  );
};

export default RegisterScreen;
