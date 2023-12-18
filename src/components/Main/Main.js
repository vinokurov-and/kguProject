// Импортирую библиотеку React
import React from 'react';

// Импортирую стили для кнопки из файла Main.css
import styles from './Main.css';

// Создаю компонент "Main" и экспортирую
const Main = ({ title, content }) => {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default Main;

