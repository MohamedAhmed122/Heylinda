import React from 'react';
import {View, Text} from 'react-native';
//Types
import {UserRegisterValue} from 'typeRoots/index';
//Form & Validation
import {Formik} from 'formik';
import * as Yup from 'yup';
// RENDER
import AppButton from '@common/AppButton';
import AppInput from '@common/AppInput';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Styles
import {colors} from 'config';
import styles from './styles';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  name: Yup.string().required().min(3).label('Name'),
  password: Yup.string().required().min(5).label('Password'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match',
  ),
});

interface ViewFormProps {
  onSubmit: (values: UserRegisterValue) => void;
}

const ViewForm: React.FC<ViewFormProps> = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          confirmPassword: '',
          password: '',
        }}
        onSubmit={values => onSubmit(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <AppInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}>
              <MaterialCommunityIcons
                name="email"
                color={colors.gray}
                size={20}
                style={styles.icon}
              />
            </AppInput>
            {errors.email && touched?.email ? (
              <Text style={styles.errorMessage}>{errors?.email}</Text>
            ) : null}
            <AppInput
              placeholder="Name "
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}>
              <FontAwesome5
                name="user"
                color={colors.gray}
                size={20}
                style={styles.icon}
              />
            </AppInput>
            {errors.name && touched?.name ? (
              <Text style={styles.errorMessage}>{errors?.name}</Text>
            ) : null}
            <AppInput
              secureTextEntry={true}
              placeholder="Password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}>
              <FontAwesome5
                name="lock"
                color={colors.gray}
                size={20}
                style={styles.icon}
              />
            </AppInput>
            {errors.password && touched?.password ? (
              <Text style={styles.errorMessage}>{errors?.password}</Text>
            ) : null}

            <AppInput
              secureTextEntry={true}
              placeholder="Confirm Password"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
            />
            {errors.confirmPassword && touched?.confirmPassword ? (
              <Text style={styles.errorMessage}>{errors?.confirmPassword}</Text>
            ) : null}

            <AppButton
              onPress={handleSubmit}
              title="Login"
              color={colors.secondary}
            />
          </View>
        )}
      </Formik>
      <View style={styles.bottom} />
    </View>
  );
};

export default ViewForm;
