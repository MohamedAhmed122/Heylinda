import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text} from 'react-native';
import {Card, PopularCade} from './components';
import {popular, anxiety, sleep} from '../../assets/data';
import {colors} from '../../config/color';
import mainStyle from '../../config/styles';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.screen}>
      <Text style={mainStyle.boldTitle}>popular </Text>
      <FlatList
        data={popular}
        keyExtractor={item => item.id}
        renderItem={PopularCade}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={mainStyle.boldTitle}>anxiety </Text>
      <FlatList
        data={anxiety}
        keyExtractor={item => item.id}
        renderItem={Card}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Text style={mainStyle.boldTitle}>sleep </Text>
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
