// Импортирую библиотеку React
import React from 'react';

// Импортирую стили для кнопки из файла Header.css
import './Header.css';

// Создаю компонент "Header" и экспортирую
export const Header = ({children}) => {
  // Возвращаю JSX, который представляет кнопку
  return (
    <header className="header">
      {children}
    </header>
  );
};
