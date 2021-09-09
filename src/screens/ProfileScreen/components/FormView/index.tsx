import React from 'react';
import {View} from 'react-native';
//Types
import {profileValue} from 'typeRoots/index';
//Form & Validation
import {Formik} from 'formik';
// RENDER
import AppButton from '@common/AppButton';
import AppInput from '@common/AppInput';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Styles
import {colors} from 'config';
import styles from './styles';

interface ViewFormProps {
  onSubmit: (values: profileValue) => void;
}

const ViewForm: React.FC<ViewFormProps> = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          job: '',
          bio: '',
        }}
        onSubmit={values => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View>
            <AppInput
              placeholder="Email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}>
              <Fontisto
                name="email"
                color={colors.gray}
                size={20}
                style={styles.icon}
              />
            </AppInput>

            <AppInput
              placeholder="Name "
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}>
              <AntDesign
                name="user"
                color={colors.gray}
                size={20}
                style={styles.icon}
              />
            </AppInput>

            <View style={styles.ageContainer}>
              <AppInput
                placeholder="Age"
                value={values.age}
                onChangeText={handleChange('age')}
                onBlur={handleBlur('age')}>
                <AntDesign
                  name="slack-square"
                  color={colors.gray}
                  size={20}
                  style={styles.icon}
                />
              </AppInput>
            </View>
            <View style={styles.jobContainer}>
              <AppInput
                placeholder="Job"
                value={values.job}
                onChangeText={handleChange('job')}
                onBlur={handleBlur('job')}>
                <MaterialIcons
                  name="work-outline"
                  color={colors.gray}
                  size={20}
                  style={styles.icon}
                />
              </AppInput>
            </View>
            <AppInput
              placeholder="Bio"
              value={values.bio}
              onChangeText={handleChange('bio')}
              onBlur={handleBlur('bio')}>
              <AntDesign
                name="folder1"
                color={colors.gray}
                size={20}
                style={styles.icon}
              />
            </AppInput>

            <AppButton
              onPress={handleSubmit}
              title="Update profile"
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
