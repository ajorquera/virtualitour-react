import { Paper } from '@mui/material';
import React from 'react';


interface CardProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <Paper elevation={3}>
            {children}
        </Paper>
    );
};

export default Card;