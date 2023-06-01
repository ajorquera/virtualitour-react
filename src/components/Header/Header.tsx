import { AppBar, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { LinkProps, Menu, MenuProps } from '..';

export interface Props {
  title: string;
  logo?: string;
  subtitle?: string;
  links?: any[];
  menu?: MenuProps;
}

const Header: FC<Props> = ({ title, ...props }) => {
  return (
    <AppBar position='sticky' color='default' {...props}>
      <Toolbar>
        <Typography component="h1" sx={{ flexGrow: 1, textAlign: 'left' }}  >{title}</Typography>

        <Menu {...props.menu} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
