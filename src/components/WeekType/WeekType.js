import React from 'react';


export const CurrentWeek = () => {
  const getWeekNumber = (date) => {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDays = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDays + firstDayOfYear.getDay() + 1) / 7);
  };

  const currentDate = new Date();
  const currentWeek = getWeekNumber(currentDate);
  const weekTypee = currentWeek % 2 === 0;;
};

export const WeekType = ({ weekTypee }) => {
  let weekType = '';

  switch (weekTypee) {
    case true:
      weekType = 'Числитель';
      break;
    case false:
      weekType = 'Знаменатель';
      break;
    default:
      weekType = 'Ошибка';
  }
  return (
    <div>
      <p>{weekType}</p>
    </div>
  );
}