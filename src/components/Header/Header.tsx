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
          <Heading variant="h2">Virtualitour</Heading>
          <Text>Te presentamos </Text>
        </Box>
      </BrandContainer>
      <Flex alignItems="center">
        <Popover>
          <PopoverTrigger>
            <Button circular>
              <Flex alignItems="end">
                <FaceHushed width={25} height={25} />
                <Text variant='small' ml={1}>▼</Text>
              </Flex>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <List
              onClick={() => { }}
              items={[
                { label: 'Perfil' },
              ]}
              itemProps={{ onHoverBg: 'secondary', onHoverColor: 'black' }} />
          </PopoverContent>
        </Popover>
      </Flex>
    </Container >
  );
};

export default Header;
