/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, SafeAreaView, View, Image, TouchableOpacity} from 'react-native';
//TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackSubscriptionParamList} from 'typeRoots/Routes';
// RENDER & STYLES
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {colors} from 'config';

interface SubscriptionProps {
  navigation: StackNavigationProp<
    RootStackSubscriptionParamList,
    'SubscriptionScreen'
  >;
}

const SubscriptionScreen: React.FC<SubscriptionProps> = ({navigation}) => {
  const handleNavigateToHome = () => navigation.navigate('HomeScreen');
  const handleNavigateToRegister = () => navigation.navigate('RegisterScreen');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bigTitle}>Begin Your</Text>
      <Text style={styles.bigTitle}>Journey Now</Text>
      <View style={styles.main}>
        <View style={{marginTop: 50}}>
          <View style={styles.iconContainer}>
            <Entypo name="moon" color={colors.secondary} size={25} />
            <Text style={styles.textIcon}>Easy Sleep</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="rainbow" color={colors.secondary} size={25} />
            <Text style={styles.textIcon}>Relaxing and Breathing </Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name="flower" color={colors.secondary} size={25} />
            <Text style={styles.textIcon}>24/7 Guided Meditation</Text>
          </View>
        </View>
        <Image
          source={require('@assets/images/icon.png')}
          resizeMode="cover"
          style={styles.img}
        />
      </View>
      <TouchableOpacity
        style={styles.continueBtn}
        onPress={handleNavigateToRegister}>
        <Text style={styles.continueText}>Continue </Text>
        <Text style={styles.continuePrice}>9.99 usd / month </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.notSureBtn}
        onPress={handleNavigateToHome}>
        <Text>Not Sure? Enable Free Trial</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SubscriptionScreen;
