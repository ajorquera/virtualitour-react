import { AppBar, Toolbar } from '@mui/material';
import { FC } from 'react';
import { LinkProps, MenuProps } from '..';

export interface Props {
  title: string;
  logo?: string;
  subtitle?: string;
  links?: LinkProps[];
  menu?: MenuProps;
}

const Header: FC<Props> = ({ title, ...props }) => {
  return (
    <AppBar position='sticky' color='default' {...props}>
      <Toolbar>
        <h1>{title}</h1>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
