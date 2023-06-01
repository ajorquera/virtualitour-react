import { Navigate, Route, Routes } from 'react-router-dom';
import { Plans, Profile } from './pages';
import { Box, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Menu, Paper } from '@mui/material';
import MenuCard from '../../components/MenuCard';
import Card from '../../components/Card';

const menu = {
  title: 'Configuracion',
  subItems: [
    { label: 'Cuenta', path: '/settings/profile' },
    { label: 'Planes', path: '/settings/plans' }
  ]
}
  ;
const Settings = () => {
  return (
    <Box pt={4}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <MenuCard menu={menu} />
        </Grid>
        <Grid item xs={12} md={9}>

          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/plans' element={<Plans />} />
            <Route path='*' element={<Navigate to='/settings/profile' />} />
          </Routes>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Settings;
