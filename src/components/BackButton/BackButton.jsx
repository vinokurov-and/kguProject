import React from 'react';
import {useNavigate} from "react-router-dom";
import UndoIcon from '@mui/icons-material/Undo';
import './BackButton.css';


export const BackButton = () => {
    const hist = useNavigate();
    return (
        <button className="backButton" onClick={() => hist(-1)}>
            <UndoIcon/>
        </button>
    );
  };
