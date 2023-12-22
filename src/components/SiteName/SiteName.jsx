import React from 'react';
import Typography from '@mui/material/Typography';
import {NAME_APP} from '../../config/settings.js';

export const SiteName = () => {
    return (
        <Typography variant="h5" color="white" gutterBottom>
             {NAME_APP}
        </Typography>
    );
  };
  