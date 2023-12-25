// Импортирую библиотеку React
import React from 'react';

// Импортирую стили для кнопки из файла Main.css
import styles from './Main.css';

// Создаю компонент "Main" и экспортирую
const Main = ({ content }) => {
  return (
    <div className={styles.main}>
      <div>{content}</div>
    </div>
  );
};

export default Main;

