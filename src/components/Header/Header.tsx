import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import { Menu, MenuProps } from '..';
import { PUBLIC_URL } from '../../env';

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
        <Box p={1}>
          <img src={PUBLIC_URL + '/images/logo.png'} />
        </Box>
        <Box sx={{ flexGrow: 1, textAlign: 'left' }}>
          <Typography variant="h5"  >{title}</Typography>
          <Typography fontStyle="italic" variant="subtitle1" >"{props.subtitle}"</Typography>
        </Box>

        <Menu {...props.menu} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
