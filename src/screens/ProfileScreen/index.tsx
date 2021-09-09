import React from 'react';
import Screen from 'common/Screen';
import Header from 'components/Header';
import FormView from './components/FormView';
import PickImage from './components/PickImage';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackSettingsParamList} from 'typeRoots/Routes';

// import styles from './styles';

interface ProfileScreenProps {
  navigation: StackNavigationProp<RootStackSettingsParamList, 'ProfileScreen'>;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation}) => {
  const handleSubmit = () => {};
  return (
    <Screen>
      <Header title="Profile" handleNavigate={() => navigation.goBack()} />
      <PickImage />
      <FormView onSubmit={handleSubmit} />
    </Screen>
  );
};

export default ProfileScreen;
