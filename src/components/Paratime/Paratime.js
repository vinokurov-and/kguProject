import { Button } from "@mui/material";
import { useState } from "react";

const obj12 = { //Если выбран 12 часовой формат времени
    1: {
        start: '8:30 AM',
        end: '10:05 AM'
    },
    2: {
        start: '10:25 AM',
        end: '12:00 PM'
    },
    3: {
        start: '12:20 PM',
        end: '1:55 PM'
    },
    4: {
        start: '2:10 PM',
        end: '3:45 PM' 
    },
    5: {
        start: '3:55 PM',
        end: '17:30'
    },
    6: {
        start: '5:40 PM',
        end: '7:15 PM'
    },
    7: {
        start: '7:25 PM',
        end: '9:00 PM'
    }
}
    const obj24 = { //Если выбран 24 часовой формат времени
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
let format24 = true 

export const Para = ({ number }) => { //Вывод времени в зависимости от выбранного формата
    let [time1, setTime1] = useState(obj24[number].start + ' - ' + obj24[number].end)
 
    function SwithFormatTime(){
        if (format24 == true){
            setTime1(time1 = obj12[number].start + ' - ' + obj12[number].end)
            format24 = false
        }
        else{
            setTime1(obj24[number].start + ' - ' + obj24[number].end)   
            format24 = true 
        }
    }

    return (
                <div>
                    <Button size="small" variant="outlined" onClick={SwithFormatTime}>{time1}</Button>
                </div>
                );
    
    
};

export default Para;