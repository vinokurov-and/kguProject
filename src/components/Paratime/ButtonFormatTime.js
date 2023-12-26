import { Button } from "@mui/material";
import Para from "./Paratime";

export const ButtonFormatTime = ({ text, onClick }) => { // Создание кнопки смены формата времени

    return (
        <Button id="formatTime" variant="outlined" onClick={SwithName}>12</Button> 
    );
  };
  
  function SwithName(){ //Смена зазвания кнопки
    const ButtonName = document.getElementById("formatTime");

    if (ButtonName.textContent == "24"){
        ButtonName.textContent = "12";        
    }
    else{
        ButtonName.textContent = "24";     
    }
    // Para();
}