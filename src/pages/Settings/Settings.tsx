import { Navigate, Route, Routes } from 'react-router-dom';
import { Plans, Profile } from './pages';
import { Alert, Box, Grid } from '@mui/material';
import MenuCard from '../../components/MenuCard';


const menu = {
  title: 'Configuracion',
  subItems: [
    { label: 'Perfil', path: '/settings/profile' },
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
          <Alert sx={{
            mt: 2,

            bottom: 0,
          }} severity="info">Para cualquier inconveniente contactar a nuestro correo <a href='mailto:soporte@virtualitour.es'>soporte@virtualitour.es</a>
          </Alert>
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
