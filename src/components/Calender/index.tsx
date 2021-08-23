import React from 'react';
import {StyleSheet} from 'react-native';
import {colors} from 'config/color';
import {Calendar} from 'react-native-calendars';

export default function index() {
  return (
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
      style={styles.calender}
      theme={{
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: colors.primary,
        arrowColor: colors.secondary,
      }}
    />
  );
}

const styles = StyleSheet.create({
  calender: {
    width: '95%',
    justifyContent: 'flex-start',
    backgroundColor: colors.lightGrayPlus,
    marginLeft: '2.5%',
    height: 330,
    padding: 10,
    borderRadius: 10,
    marginTop: 40,
  },
});
