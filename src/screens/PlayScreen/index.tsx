import React from 'react';
//TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamList, PlayNestedParamList} from '@typeRoots/Routes';
// import { StyleSheet, Text, View } from 'react-native'
import Container from './components/Container';
import {RouteProp} from '@react-navigation/native';

interface PlaySoundProps {
  route: RouteProp<HomeParamList, 'PlayScreen'>;
  navigation: StackNavigationProp<PlayNestedParamList, 'PlayScreen'>;
}

const PlayScreen: React.FC<PlaySoundProps> = ({route, navigation}) => {
  const {id} = route.params;
  return <Container id={id} navigation={navigation} />;
};

export default PlayScreen;
