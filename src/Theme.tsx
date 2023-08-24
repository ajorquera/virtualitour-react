
import { FC, PropsWithChildren } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

type Scale = any;

export const colors = {
  primary: '#0070f3',
  'primary-dark': '#0050B3',
  secondary: '#FFC700',
  white: '#ffffff',
  black: 'black',
  surface: '#ffffff',
  disabled: '#f5f5f5',
  error: '#ff0000',

  success: '#10AF20',
  warning: '#ffff00',
  info: '#0000ff',
}

export const fonts = {
  body: '"Press Start 2P"',
  heading: '"04B_30"',
};

export const fontSizes: Scale = {
  ...['0.7rem', '0.9rem', '1rem', '1.2rem', '1.5rem', '2rem', '3rem', '4rem', '5rem', '6rem', '7rem', '8rem', '9rem', '10rem']
}

fontSizes.small = fontSizes[0];
fontSizes.body = fontSizes[1];
fontSizes.h1 = fontSizes[2];
fontSizes.h2 = fontSizes[2];
fontSizes.button = fontSizes[2];

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: '04B_30';
    src: url('/fonts/04B_30.ttf') format("truetype");
  }

  * {
    font-family: ${fonts.body};
    font-size: ${fontSizes[1]};
  }

  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

`;

const theme = {
  fonts,
  colors,
}

const Theme: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
