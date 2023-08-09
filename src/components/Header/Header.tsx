import { FC } from 'react';
import { Props as MenuProps } from '../Menu';
import styled from 'styled-components';
import logo from '../../assets/logo.png';
import Box, { Flex } from '../Box';
import { Heading } from '../Text';
import Button from '../Button/Button';


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
          <Heading variant="h1">Virtualitour</Heading>
          <div>Te presentamos </div>
        </Box>
      </BrandContainer>
      <Flex alignItems="center">
        <Button >
          Entrar ▼
        </Button>
      </Flex>
    </Container >
  );
};

export default Header;
