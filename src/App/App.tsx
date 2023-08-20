import { MenuProps } from '../components';


import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Theme from '../Theme';


import { BrowserRouter, Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';
import { PUBLIC_URL } from '../env';
import DashboardLayout, { AccessLayout } from '../components/Layout';
import { Plans, Profile } from '../pages/Settings/pages';
import Settings from '../pages/Settings/Settings';
import { Login } from '../pages/Login';
import { AuthProvider } from '../providers/AuthProvider';
import Logout from '../components/Logout';



const menu: MenuProps = {
  links: [
    { label: 'Crear tour', href: '/tours/create' },
    { label: 'Mis tours', href: '/tours' },
    { label: 'Ajustes', href: '/settings', icon: Settings },
    { label: 'Salir', href: '/logout', icon: Logout, divider: true },
  ]
};

interface LinkProps {
  label: string;
  href: string;
}


const links: LinkProps[] = [{ label: 'Home', href: '/' }];

function App() {
  return (
    <div className='App'>
      <Theme>
        <AuthProvider>
          <BrowserRouter basename={PUBLIC_URL}>
            <RouterRoutes>

              <Route path="logout" element={<Logout />} />
              <Route path='/*' element={<AccessLayout />} >
                <Route path='login' element={<Login />} />
              </Route>
              <Route element={<DashboardLayout />}>
                <Route index element={<Navigate to="/settings" />} />
                <Route path="/settings/*" element={<Settings />} >
                  <Route path='profile' element={<Profile />} />
                  <Route path='plans' element={<Plans />} />
                  <Route index element={<Navigate to='/settings/profile' />} />
                </Route>
              </Route>
            </RouterRoutes>
          </BrowserRouter>

        </AuthProvider>
      </Theme>
    </div>
  );
}

export default App;
