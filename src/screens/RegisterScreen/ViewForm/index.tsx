import React from 'react';
import {UserRegisterValue} from 'typeRoots/index';
import {View, Text} from 'react-native';
import AppButton from '@common/AppButton';
import AppInput from '@common/AppInput';
import {Formik} from 'formik';
import styles from './styles';
import {colors} from 'config';

interface ViewFormProps {
  onSubmit: (values: UserRegisterValue) => void;
  validationSchema: any;
}

const ViewForm: React.FC<ViewFormProps> = ({onSubmit, validationSchema}) => {
  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          phone: '',
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
              onBlur={handleBlur('email')}
            />
            {errors.email && touched?.email ? (
              <Text style={styles.errorMessage}>{errors?.email}</Text>
            ) : null}
            <AppInput
              placeholder="Name "
              value={values.name}
              // autoCorrect={false}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
            />
            {errors.name && touched?.name ? (
              <Text style={styles.errorMessage}>{errors?.name}</Text>
            ) : null}
            <AppInput
              placeholder="Phone Number"
              value={values.phone}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
            />
            {errors.phone && touched?.phone ? (
              <Text style={styles.errorMessage}>{errors?.phone}</Text>
            ) : null}

            <AppButton
              onPress={handleSubmit}
              title="Submit"
              color={colors.secondary}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ViewForm;
