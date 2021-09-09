import React from 'react';
import {FlatList} from 'react-native';
//TYPES
import {StackNavigationProp} from '@react-navigation/stack';
import {HistoryParamList} from 'typeRoots/Routes';
// RENDER
import Screen from 'common/Screen';
import Header from 'components/Header';
import Card from './Card';
// DATA
import {anxiety} from 'assets/data';

interface HistoryScreenProps {
  navigation: StackNavigationProp<HistoryParamList, 'HistoryScreen'>;
}

const HistoryScreen: React.FC<HistoryScreenProps> = ({navigation}) => {
  const handleNavigate = () => navigation.goBack();
  return (
    <Screen>
      <Header title="History" handleNavigate={handleNavigate} />
      <FlatList
        data={anxiety}
        renderItem={({item}) => (
          <Card
            item={item}
            onPress={() => navigation.navigate('PlayScreen', {id: item.id})}
          />
        )}
        keyExtractor={item => item.id}
      />
    </Screen>
  );
};

export default HistoryScreen;
