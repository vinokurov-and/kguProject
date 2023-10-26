import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import CollapseComponent from './CollapseComponent';

const YourComponent = () => {
  const faculties = [
    { title: 'Факультет 1', items: ['Список 1', 'Список 2', 'Список 3'] },
    { title: 'Факультет 2', items: ['Список 4', 'Список 5', 'Список 6'] },
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