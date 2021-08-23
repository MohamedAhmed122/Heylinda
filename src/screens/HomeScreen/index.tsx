import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
//TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeParamList} from '@typeRoots/Routes';
import {Meditation} from '@typeRoots/index';
//COMPONENTS && STYLES
import {Card, PopularCade} from './components';
import {popular, anxiety, sleep} from '@assets/data';
import {colors} from '@config/color';
import mainStyle from '@config/styles';
import Screen from 'common/Screen';

interface HomeScreenProps {
  navigation: StackNavigationProp<HomeParamList, 'HomeScreen'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const handlePress = (item: Meditation): void => {
    navigation.navigate('PlayScreen', {item});
  };
  return (
    <Screen scroll>
      <Text style={mainStyle.boldTitle}>popular </Text>
      <FlatList
        data={popular}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PopularCade item={item} onPress={() => handlePress(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={mainStyle.boldTitle}>anxiety </Text>
      <FlatList
        data={anxiety}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card item={item} onPress={() => handlePress(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={mainStyle.boldTitle}>sleep </Text>
      <FlatList
        style={styles.flatList}
        data={sleep}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card item={item} onPress={() => handlePress(item)} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flatList: {
    marginBottom: 40,
  },
  title: {
    marginBottom: 10,
    marginTop: 25,
    textTransform: 'uppercase',
    marginLeft: 12,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
