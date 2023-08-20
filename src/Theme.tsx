
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#0070f3',
    'primary-dark': '#0050B3',
    secondary: '#FFC700',
    white: '#ffffff',
    black: 'black',
    surface: '#ffffff',
    disabled: '#f5f5f5',
    error: '#ff0000',

    success: '#00ff00',
    warning: '#ffff00',
    info: '#0000ff',
  }
}

const Theme: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
