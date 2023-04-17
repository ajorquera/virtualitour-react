import { ThemeProvider, createTheme } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0050B3',
      light: '#0067e6',
    },
    secondary: {
      main: '#FFC700',
    },
    background: {
      default: '#fff',
    },
    info: {
      main: '#2196f3',
    },
    success: {
      main: '#4caf50',
    },
    warning: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
    },
  },
});

const Theme: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
