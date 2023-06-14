import { Paper, PaperProps } from '@mui/material';
import React from 'react';


interface CardProps extends PaperProps {
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, ...props }) => {
    return (
        <Paper elevation={3} {...props} sx={{ p: 2, ...props.sx }}>
            {children}
        </Paper>
    );
};

export default Card;