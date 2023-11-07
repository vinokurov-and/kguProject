import React from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import UndoIcon from '@mui/icons-material/Undo';
import './BackButton.css';


export const BackButton = () => {
    const hist = useNavigate();
    // const location = useLocation();
    return (
        <button className="backButton" onClick={() => hist.goBack()}>
            <UndoIcon/>
        </button>
    );
  };
