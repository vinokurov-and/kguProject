// Импортирую библиотеку React
import React from 'react';

// Импортирую стили для кнопки из файла Button.css
import './Button.css';

// Создаю компонент "Button"
// Этот компонент принимает два пропа: "text" и "onClick"
const Button = ({ text, onClick }) => {
  // Возвращаю JSX, который представляет кнопку
  return (
    <button className="blue-button" onClick={onClick}>
      {text}
    </button>
  );
};

// Экспортирую компонент "Button", чтобы его можно было использовать в других частях приложения
export default Button;

