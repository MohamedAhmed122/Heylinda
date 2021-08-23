import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {ScaledSheet} from 'react-native-size-matters';
import {colors} from 'config';

interface ListProps {
  color?: string;
  name?: string;
  title: string;
  separate?: boolean;
}
const List: React.FC<ListProps> = ({
  color = colors.gray,
  name,
  title,
  separate,
}) => {
  return (
    <>
      <TouchableOpacity style={styles.list}>
        {name && (
          <Icon name={name} color={color} size={25} style={styles.icon} />
        )}
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
      {separate && <View style={styles.separate} />}
    </>
  );
};

export default List;

const styles = ScaledSheet.create({
  list: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    backgroundColor: colors.lightGrayPlus,
    flexDirection: 'row',
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  icon: {
    marginLeft: 20,
  },
  separate: {
    width: '100%',
    height: 2,
    backgroundColor: colors.lightGray,
    // bottom: 39,
  },
});
