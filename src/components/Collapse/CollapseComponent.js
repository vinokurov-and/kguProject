import React, { useState } from 'react';
import { Collapse, List, ListItem, ListItemText } from '@mui/material';

const CollapseComponent = ({ title, items }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={title} />
      </ListItem>
      <Collapse in={isCollapsed} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ListItem key={index} button>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default CollapseComponent;