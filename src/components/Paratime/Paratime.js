export const Para = ({ number }) => {
    const obj = {
        1: {
            start: '8:30',
            end: '10:05'
        },
        2: {
            start: '10:25',
            end: '12:00'
        },
        3: {
            start: '12:20',
            end: '13:55'
        },
        4: {
            start: '14:10',
            end: '15:45' 
        },
        5: {
            start: '15:55',
            end: '17:30'
        },
        6: {
            start: '17:40',
            end: '19:15'
        },
        7: {
            start: '19:25',
            end: '21:00'
        }
    }
    return (
        <div>
            <h1>{obj[number].start}</h1> - <h1>{obj[number].end}</h1>
        </div>
    );
};
