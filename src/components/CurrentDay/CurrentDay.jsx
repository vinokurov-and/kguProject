import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';


export const CurrentDay = () => {
    const [currentDay, setCurrentDay] = useState('');
    
    useEffect(() => {
        const dayOfWeek = new Date().toLocaleString('ru-RU', { weekday: 'long' });
        setCurrentDay(dayOfWeek);
    }, []);
    
    return (
        <div>
        <Typography variant="h3">
            Сегодня: {currentDay}
        </Typography>
        </div>
    );
}