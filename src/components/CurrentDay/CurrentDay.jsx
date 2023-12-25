import Typography from '@mui/material/Typography';

export const CurrentDay = () => {
    const currentDay = new Date().toLocaleString('ru-RU', { weekday: 'long' });
    return (
        <div style={{ position: 'fixed', bottom: '0', left: '0', padding: '10px' }}>
            <Typography variant="h6" component="h1">
                Сегодня: {currentDay}
            </Typography>
        </div>
    );
};