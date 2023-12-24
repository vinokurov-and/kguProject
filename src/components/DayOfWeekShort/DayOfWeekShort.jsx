import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Typography from '@mui/material/Typography';
import './DayOfWeekShort.css';

const DayOfWeekShort = () => {
  const getAbbreviatedDay = (day) => {
    const daysOfWeek = {
      'Monday': 'Пн',
      'Tuesday': 'Вт',
      'Wednesday': 'Ср',
      'Thursday': 'Чт',
      'Friday': 'Пт',
      'Saturday': 'Сб',
      'Sunday': 'Вс',
    };

    return daysOfWeek[day] || '';
  };

  const currentDay = moment().format('dddd');
  const abbreviatedDay = getAbbreviatedDay(currentDay);

  return (
    <div className="DayOfWeekShort">
      <Typography variant="body1">{abbreviatedDay}</Typography>
    </div>
  );
};

DayOfWeekShort.propTypes = {
  day: PropTypes.string,
};

export default DayOfWeekShort;