import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import CollapseComponent from './CollapseComponent';

const YourComponent = () => {
  const faculties = [
    { title: 'Инженерно-технологический институт', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт естествознания', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт истории и права', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт лингвистики и мировых языков', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт педагогики', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт психологии', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт искусств и социокультурного проектирования', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Институт филологии и массмедиа', items: ['Группа 1', 'Группа 2', 'Группа 3'] },
    { title: 'Медицинский институт', items: ['Группа 1', 'Группа 2', 'Группа 3'] },

  ];

  return (
    <List component="nav">
      {faculties.map((faculty, index) => (
        <CollapseComponent
          key={index}
          title={faculty.title}
          items={faculty.items}
        />
      ))}
    </List>
  );
};

export default YourComponent;