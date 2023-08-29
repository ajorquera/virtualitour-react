import { FC } from 'react';
import { Props as MenuProps } from '../Menu';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Box, { Flex } from '../Box';
import Text, { Heading } from '../Text/Text';
import Button from '../Button/Button';
import { ReactComponent as FaceHushed } from '../../assets/face-hushed.svg';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import List from '../List';
import ButtonMenu from '../Button/ButtonMenu';
import { theme } from 'styled-tools';

export interface Props {
  title: string;
  logo?: string;
  subtitle?: string;
  links?: any[];
  menu?: MenuProps;
}

const Header: FC<Props> = ({ title, ...props }) => {

  const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 70px;
    margin-right: 10px;
  }
  `;

  const Container = styled.div`
    background-color: ${theme('white', 'white')};
    display: flex;
    justify-content: space-between;
    border: 1px solid ;
    padding: 10px;
    box-shadow: 2px 2px 0 0 black;

  `;

  return (
    <Container>
      <BrandContainer>
        <img src={logo} alt="logo" />
        <Box>
          <Heading variant="h2">Virtualitour</Heading>
          <Text as="div" mt={2}>Queremos darle una vision 360 a tu mundo </Text>
        </Box>
      </BrandContainer>
      <Flex alignItems="center">
        <ButtonMenu items={[
          { label: 'Mis Tours', href: '/' },
          { label: 'Configuracion', href: '/contacto' },
          { label: 'Salir', href: '/acerca-de' },
        ]} />
      </Flex>
    </Container >
  );
};

export default Header;
