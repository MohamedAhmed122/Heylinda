import {dateType} from 'redux/freeSessions/types';
export const getTodayDay = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  var todayDate = yyyy + '-' + mm + '-' + dd;
  return todayDate;
};

export const addNewDate = (days: dateType[]): dateType[] => {
  let newDay = getTodayDay();
  const existingDay = days.find((day: dateType) => day.date === newDay)
    ? true
    : false;
  if (existingDay) {
    return [...days];
  } else {
    return [...days, {date: newDay, selected: true, selectedColor: 'red'}];
  }
};
