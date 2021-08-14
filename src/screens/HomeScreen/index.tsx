import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native';
import {popular, anxiety, sleep} from '../../assets/data';
import {colors} from '../../config/color';
import {Card, PopularCade} from './components';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.title}>popular </Text>
      <FlatList
        data={popular}
        keyExtractor={item => item.id}
        renderItem={PopularCade}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.title}>anxiety </Text>
      <FlatList
        style={styles.flatList}
        data={anxiety}
        keyExtractor={item => item.id}
        renderItem={Card}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.title}>sleep </Text>
      <FlatList
        style={styles.flatList}
        data={sleep}
        keyExtractor={item => item.id}
        renderItem={Card}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 50,
  },
  flatList: {
    marginTop: 10,
  },
  title: {
    marginTop: 25,
    textTransform: 'uppercase',
    marginLeft: 12,
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.secondary,
  },
});
