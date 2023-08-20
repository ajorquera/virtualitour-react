import { Outlet } from 'react-router-dom';
import MenuCard from '../../components/MenuCard';
import Box from '../../components/Box';


const menu = {
  title: 'Ajustes',
  subItems: [
    { label: 'Perfil', path: '/settings/profile' },
    { label: 'Planes', path: '/settings/plans' }
  ]
}
  ;
const Settings = () => {
  return (
    <Box pt={4}>

    </Box>
  );
};

export default Settings;
