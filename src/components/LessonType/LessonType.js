import React from 'react';

export const LessonType = ({ type }) => {
  let lessonType = '';
  switch (type) {
    case 'лекция':
      lessonType = 'Лекция';
      break;
    case 'практика':
      lessonType = 'Практика';
      break;
    case 'лабораторная':
      lessonType = 'Лабораторная работа';
      break;
    default:
      lessonType = 'Неизвестный тип занятия';
  }

  return (
    <div>
      <p>{lessonType}</p>
    </div>
  );
};
