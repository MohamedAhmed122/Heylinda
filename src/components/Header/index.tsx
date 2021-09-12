import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScaledSheet} from 'react-native-size-matters';
import {height, colors} from 'config';

interface HeaderProps {
  title: string;
  handleNavigate: () => void;
}

const Header: React.FC<HeaderProps> = ({children, title, handleNavigate}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => handleNavigate()}>
        <AntDesign name="left" size={20} color={colors.secondary} />
      </TouchableOpacity>
      <Text style={styles.title}>
        {title?.length > 20 ? title?.substring(0, 20 - 3) + '...' : title}
      </Text>
      <View>{children}</View>
    </View>
  );
};

export default Header;
const styles = ScaledSheet.create({
  header: {
    marginTop: height > 840 ? 10 : 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: '5%',
    zIndex: 100,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    color: colors.secondary,
  },
});
