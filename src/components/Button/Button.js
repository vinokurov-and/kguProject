// Импортирую библиотеку React
import React from 'react';

// Импортирую стили для кнопки из файла Button.css
import './Button.css';

// Создаю компонент "Button" и экспортирую
// Этот компонент принимает два пропа: "text" и "onClick"
export const Button = ({ text, onClick }) => {
  // Возвращаю JSX, который представляет кнопку
  return (
    <button className="blue-button" onClick={onClick}>
      {text}
    </button>
  );
};

