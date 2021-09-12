import React, {useState} from 'react';
import Screen from 'common/Screen';
import {Text, View, Image} from 'react-native';
import Header from 'components/Header';
import AppInput from 'common/AppInput';
import AppButton from 'common/AppButton';
import {colors} from 'config';
import styles from './styles';
import Toast from 'react-native-toast-message';

import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackSettingsParamList} from 'typeRoots/Routes';

interface SupportTeamScreenProps {
  navigation: StackNavigationProp<
    RootStackSettingsParamList,
    'SupportTeamScreen'
  >;
}

const SupportTeamScreen: React.FC<SupportTeamScreenProps> = ({navigation}) => {
  const [input, setInput] = useState<string>('');

  const handleNavigate = (): void => navigation.goBack();

  const handleSendMsg = () => {
    let regExp = /[a-zA-Z]/g;
    if (regExp.test(input)) {
      setInput('');
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Your Message has been Successfully 👋',
      });
    } else {
      console.log('NO');
      Toast.show({
        type: 'error',
        text1: 'Oops',
        text2: 'Empty Content ❌',
      });
    }
  };

  return (
    <Screen>
      <Header title="Support Team" handleNavigate={handleNavigate} />
      <View style={styles.container}>
        <Image
          source={require('@assets/images/chat.png')}
          resizeMode="contain"
          style={styles.img}
        />
        <Text style={styles.text}>Let's Talk!</Text>
        <AppInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="Report Your Problem"
        />
        <View style={styles.btnContainer}>
          <AppButton
            title="Talk To us"
            color={colors.secondary}
            onPress={handleSendMsg}
          />
        </View>
      </View>
    </Screen>
  );
};

export default SupportTeamScreen;
