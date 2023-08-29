import { useMemo } from 'react';
import Box from './Box';
import styled from 'styled-components';
import { theme } from 'styled-tools';
import { Heading } from './Text';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  padding: 1.5rem;
  text-align: center;
  width: 100%;
  background-color: ${theme('colors.secondary')};
`


const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <Container>
      <Heading variant="h3">
        {`©${year}`} — Virtualitour
      </Heading>

    </Container>
  );
};

export default Footer;
